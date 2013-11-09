class Node 
  constructor: (@name, @prop=false) ->
    console.log @name
    console.log @prop
    @_isDir = true
    if $.isArray(@prop)
      @_isDir = true
    
    if @prop == false
      @_isDir = true

    @_isDir = false if @prop.info
    @_isDir = false if @prop.desc  
    # if (typeof @prop.info == 'undefined' and typeof @prop.desc == 'undefined')    
    # @_isDir = @prop is false || (typeof @prop.info == 'undefined' and typeof @prop.desc == 'undefined')    
        
  isDir: () ->
    @_isDir

  info: () ->
    @prop        
  
  echo: () -> 
    if this.isDir()
      return "dr--r--r--\tkurei\tstaff\t\t" + @name
    else
      return "-r-xr--r--\tkurei\tstaff\t\t" + @name

class Bucket 
  constructor: ->
    @bucket = $.parseJSON($('#bucket').text()) 
      # '/' : 
        # 'home' : { 'kurei' : $.parseJSON($('#bucket').text()) }
        # 'etc'  : [ 'rc.conf' ]
        # 'srv'  : { 
        #   'http': {
        #     'axcoto.com': ['index.php', 'artisant'],
        #     'log.axcoto.com': ['README']
        #     'noty.im': ['public', 'gem']
        #   }, 
        #   'ftp' : 'ftp' 
        # },
        # 'bin'  : [ 'help', 'ls', 'wget']
        # 'usr'  : [ 'bin', 'sbin']
        # 'var'  : {'cache': 'nginx', 'rails': ['cache', 'logs'], 'backup' : ['rb']}
      
    @stack = ['/', 'home', 'kurei'] # stack folder
    @home = '/home/kurei' # home dir, will be mapped to ~
    @wd = '/home/kurei' # working dir 

  normalize : (path) ->
    path.split("/").reduce(
        (o, x) -> return o[x]
      , obj
    )
  
  pluck : (path) ->
    norm_path = []
    path = path.split('/')
    l = path.length
    for i in path
      norm_path.push(i) if i != '' 
    $.merge(['/'], norm_path).reduce(
      (o, x) ->
        if typeof o == 'undefined'
          return false
        return o[x] 
      , 
      this.bucket
    )

  cd: (path) ->
    path = path.trim(' ')
    return true if path == ''
    if path == '/'
      @stack = ['/'] 
      @wd = '/'
      return true
    
    if path == '~'
      @stack = ['/', 'home', 'kurei'] 
      @wd = '/home/kurei'
      return true
    
    current_dir = @wd
    current_stack = @stack

    if path.charAt(0) == '/'
      #Detroy stack, it's absoulte path
      @stack = ['/']
      @wd = '/'
    
    if path.charAt(0) == '~'
      path = path.replace('~', this.home)
    
    path = path.split('/')
    for i in path
      switch i
        when '', '.', '/' 
          continue
        when '..' then @stack.pop()
        else @stack.push(i)
    
    if @stack[0] == '/'
      @wd = '/' + @stack.slice(1).join('/')
    else 
      @wd = '/' + @stack.join('/')
    
    if typeof this.pluck(@wd) == 'undefined' or this.pluck(@wd) == false
      @wd = current_dir
      @stack = current_stack
      return "Invalid folder"
    return true
  
  ls: (path) ->
    # path = this.normalize()
    path = @wd if typeof path == 'undefined' or path == ''
    
    if ['/', '.', '..'].indexOf(path.charAt(0)) < 0
      path = [@wd, path].join('/')
    item = this.pluck(path)
    ls = []
    if $.isArray(item)
      ls.push(new Node(i)) for i in item
    else     
      ls.push(new Node(dir, prop)) for dir,prop of item
    return ls

  pwd: ->
    if @wd == @home then '~' else @wd
  
class Terminal
  constructor: (option) -> 
    @bucket = new Bucket()
    @bucket = {shop: [], products:[], lab: [], work: []} if typeof @bucket != 'object'
    
    t = this
    $('.terminalme').terminal( (input, term) =>
        input = 'help' if input == ''
        _cmd = t.parse_command(input)
        try 
          result = t.sh[_cmd.c].call(t, term, _cmd.o)
          return term.error(new String(result)) if result != true
          return true
        catch e 
          term.error(new String(e))
        term.echo 'available command: help, uname, contact, ls, product, lab, echo, mail'
        return true
      , 
      $.extend(option, {prompt :  (p) -> p(['[kurei@axcoto.com]', t.bucket.pwd(), '➜ '].join(' '))})
    )

  parse_command: (input) =>
    if input == ''
      return {c: 'help', o: false}
    
    s = input.replace(/\s+/, ' ').split(' ')
    
    if typeof @sh[s[0]] == 'undefined'
      return {c: 'not_found', o: s}
    
    if s.length==1
      return {c: s[0], o: false}
    return {c: s[0], o: s.splice(1)}
  
  sh: 
    not_found: (term, opt) =>
      term.error("Command " + opt[0] + ' not found. Try help to see available commands.')
      return true

    cd: (term, opt) ->
      if typeof opt[0] == 'undefined' and opt[0] == ''
        return true
      if true == $result = @bucket.cd(opt[0])
        term.echo "You are in : " + this.bucket.pwd()  
        return true
      else 
        return $result  
  
    whoami: (term, opt) ->
      term.echo("kurei")
      return true
    
    whereami: (term, opt) ->
      term.echo("Your Ip: ")
      return true

    help: (term, opt) ->
      commands = []
      (commands.push(c) if c != 'not_found') for c of @sh
      term.echo("available commands: " + commands.join(', '))
      return true

    ls: (term, opt) ->
      ls = @bucket.ls(opt[0])
      # if $.isArray(ls)
      #   term.echo("\t" + ls[i]) for i in ls
      #   return true
        
      # term.echo("\t" + dir) for dir, prop of ls
      term.echo(node.echo()) for node in ls
      return true
    
    pwd: (term, opt) ->
      term.echo("\t" + @bucket.pwd())
      return true
    

    cat: (term, opt) ->
      return "Missing file name" if opt.length == 0
      ls = @bucket.ls(opt.join('').trim())
      return "File not found" if !ls? 
      if typeof ls is 'object' 
        (term.echo(value) if key is 'info' or key is 'desc') for key, value of ls
        return true    
      return [opt[0], "is a directory"].join ' '
    
    curl: (term, opt) ->
      term.echo(k) for k in @bucket
      return true

    contact: (term, opt) ->
      term.echo("echo 'Message body' | mail -s 'Subject' ")
      return true

do ($ = jQuery) ->
  new Terminal(
      greetings: "Welcome to ",
      name: 'kurei',
      height: 600,
    )