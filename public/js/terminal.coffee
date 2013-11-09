class Bucket 
  constructor: ->
    @bucket =
      '/' : 
        'home' : { 'kurei' : $.parseJSON($('#bucket').text()) }
        'etc'  : [ 'rc.conf' ]
        'srv'  : { 
          'http': {
            'axcoto.com': ['index.php', 'artisant'],
            'log.axcoto.com': ['README']
            'noty.im': ['public', 'gem']
          }, 
          'ftp' : 'ftp' 
        },
        'bin'  : [ 'help', 'ls', 'wget']
        'usr'  : [ 'bin', 'sbin']
        'var'  : {'cache': 'nginx', 'rails': ['cache', 'logs'], 'backup' : ['rb']}
      
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
    console.log(path)
    path = path.split('/')
    console.log(path)
    l = path.length
    for i in path
      console.log(i)
      norm_path.push(i) if i != '' 
    console.log(norm_path)
    console.log(this.bucket)      
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
      this.stack = ['/'] 
      this.wd = '/'
      return
    if path == '~'
      this.stack = ['/', 'home', 'kurei'] 
      this.wd = '/home/kurei'
      return
    
    current_dir = this.wd
    current_stack = this.stack

    if path.charAt(0) == '/'
      #Detroy stack, it's absoulte path
      this.stack = ['/']
      this.wd = '/'
    
    if path.charAt(0) == '~'
      path = path.replace('~', this.home)
    
    path = path.split('/')
    for i in path
      switch path[i]
        when '', '.', '/' 
          console.log("Ignore " + path[i])
          continue
        when '..' then this.stack.pop()
        else this.stack.push(path[i])
    
    if this.stack[0] == '/'
      this.wd = '/' + this.stack.slice(1).join('/')
    else 
      this.wd = '/' + this.stack.join('/')
    
    if typeof this.pluck(this.wd) == 'undefined' or this.pluck(this.wd) == false
      this.wd = current_dir
      this.stack = current_stack
      return "Invalid folder"
    return true
  
  ls: (path) ->
    # path = this.normalize()
    path = this.wd if typeof path == 'undefined' or path == ''
    
    if ['/', '.', '..'].indexOf(path.charAt(0)) < 0
      path = [this.wd, path].join('/')
    return this.pluck(path)

  pwd: ->
    return this.wd == '/home/kurei'? '~':this.wd
  
class Terminal
  constructor: (option) -> 
    @bucket = new Bucket()
    @bucket = {shop: [], products:[], lab: [], work: []} if typeof @bucket != 'object'
    
    t = this
    console.log this.sh
    $('.terminalme').terminal( (input, term) =>
        input = 'help' if input == ''
        _cmd = t.parse_command(input)
        console && console.log(_cmd)          
        try 
          result = t.sh[_cmd.c].call(t, term, _cmd.o)
          return term.error(new String(result)) if result != true
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
      return @bucket.cd(opt[0])    
  
    whoami: (term, opt) ->
      term.echo("kurei")
      return true
    
    whereami: (term, opt) ->
      term.echo("Your Ip: ")
      return true

    help: (term, opt) ->
      commands = []
      term.echo("available commands: " + commands.join(', ')) if c != 'not_found' for c in @sh
      return true

    ls: (term, opt) ->
      console.log(opt)
      ls = @bucket.ls(opt[0])
      if $.isArray(ls)
        term.echo("\t" + ls[i]) for i in ls
        return true
        
      term.echo("\t" + dir) for dir, prop of ls
      return true
    
    pwd: (term, opt) ->
      console.log this
      term.echo("\t" + @bucket.pwd())
      return true
    

    cat: (term, opt) =>
      ls = @bucket.ls(opt[0])
      console.log(ls)
      return true
    
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