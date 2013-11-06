(function ($) {
  var Node = {

  }

  var Bucket = function () {
    this.bucket = { 
      '/' : {
        'home' : { 'kurei' : $.parseJSON($('#bucket').text()) },
        'etc'  : [ 'rc.conf' ],
        'srv'  : { 
          'http': {
            'axcoto.com': ['index.php', 'artisant'], 
            'log.axcoto.com': ['README'], 
            'noty.im': ['public', 'gem']
          }, 
          'ftp' : 'ftp' 
        },
        'bin'  : [ 'help', 'ls', 'wget'],
        'usr'  : [ 'bin', 'sbin'],
        'var'  : {'cache': 'nginx', 'rails': ['cache', 'logs'], 'backup' : ['rb']}
      }
    }
    this.stack = ['/', 'home', 'kurei'] //stack folder
    this.home = '/home/kurei' //home dir, will be mapped to ~
    this.wd = '/home/kurei' //working dir   

  }

  Bucket.prototype.normalize = function (path) {
    return path.split("/").reduce(function(o, x) { return o[x] }, obj)
  }

  Bucket.prototype.pluck = function (path) {
    norm_path = []
    path = path.split('/')
    for (var i=0; i< path.length; i++) {
      path[i] !== '' && norm_path.push(path[i])
    }
    return $.merge(['/'], norm_path).reduce(
      function(o, x) { 
        if (typeof o == 'undefined') {
          return false
        }
        return o[x] 
      }, 
      this.bucket
    )
  }

  Bucket.prototype.cd = function (path) {
    path = path.trim(' ')
    if (path == '') {
      return true 
    }
    if (path == '/') {
      this.stack = ['/'] 
      this.wd = '/'
      return
    }
    if (path == '~') {
      this.stack = ['/', 'home', 'kurei'] 
      this.wd = '/home/kurei'
      return
    }
    current_dir = this.wd
    current_stack = this.stack

    if (path.charAt(0) == '/') {
      //Detroy stack, it's absoulte path
      this.stack = ['/']
      this.wd = '/'
    }
    if (path.charAt(0) == '~') {
      path = path.replace('~', this.home)
    }

    path = path.split('/')
    for (var i=0; i< path.length; i++) {
        // if (path[i] == '..') {
        //   this.stack.pop()
        // }
        // if (path[i] == '.') {
        //   continue 
        // }
        // if (path[i] == '') {
        //   continue 
        // }
        // if (path[i] == '/') {
        //   continue 
        // }

        switch (path[i]) {
          case '':
          case '.':
          case '/':
            console.log("Ignore " + path[i])
            continue;
            break;
          case '..':
            this.stack.pop()
            break;
          default:
            this.stack.push(path[i])
        }        
    }

    if (this.stack[0] == '/') {
      this.wd = '/' + this.stack.slice(1).join('/')
    } else {
      this.wd = '/' + this.stack.join('/')
    }
    if (typeof this.pluck(this.wd) == 'undefined' || this.pluck(this.wd) === false) {
      this.wd = current_dir
      this.stack = current_stack
      return "Invalid folder"
    }
    return true
  }

  Bucket.prototype.ls = function (path) {
    // path = this.normalize()
    if (typeof path === 'undefined' || path === '') {
      path = this.wd
    }
    if (path.charAt(0) in ['/', '.', '..']) {
      path = [this.wd, path].join('/')
    }
    return this.pluck(path)
  }

  Bucket.prototype.pwd = function () {
    return this.wd == '/home/kurei'? '~':this.wd
  }
  
  var Terminal = function (option) {
    this.bucket = new Bucket()
    if (typeof this.bucket !== 'object') {
      this.bucket = {shop: [], products:[], lab: [], work: []}
    }
    
    var t = this
    $('.terminalme').terminal(function(input, term) {
        if (input == '') {
          input = 'help'
        }
        
        if (input !== '') {
          var _cmd = t.parse_command(input)
          console && console.log(_cmd)          
          try {
            var result = t.sh[_cmd.c].call(t, term, _cmd.o)
            if (result !== true) {
              return term.echo(new String(result));
            }
          } catch(e) {
            term.error(new String(e));
          }
          return true
        }
        term.echo('available command: help, uname, contact, ls, product, lab, echo, mail');
      }, $.extend(option, 
                  {
                    prompt : function (p) {
                      p(['[kurei@axcoto.com]', t.bucket.pwd(), '➜ '].join(' '))
                    }
                  }
      ))
  }

  Terminal.prototype.parse_command = function (input) {
    if (input == '') {
      return {c: 'help', o: false}
    }
    var s = input.replace(/\s+/, ' ').split(' ')
    
    if (typeof this.sh[s[0]] == 'undefined') {
      return {c: 'not_found', o: s}
    } 

    if (s.length==1) {
      return {c: s[0], o: false}
    }
    return {c: s[0], o: s.splice(1)}
  }

  Terminal.prototype.sh = {}

  Terminal.prototype.sh.not_found = function (term, opt) {
    term.error("Command " + opt[0] + ' not found. Try help to see available commands.')
    return true
  }

  Terminal.prototype.sh.cd = function (term, opt) {
    if (typeof opt[0] == 'undefined' || opt[0] === '') {
      return true
    }
    this.bucket.cd(opt[0])
    return true
  }
  
  Terminal.prototype.sh.whoami = function (term, opt) {
    term.echo("kurei")
    return true
  }
  Terminal.prototype.sh.whereami = function (term, opt) {
    term.echo("Your Ip: ")
    return true
  }

  Terminal.prototype.sh.help = function (term, opt) {
    var commands = []
    for (var c in Terminal.prototype.sh) {
      if (c !=='not_found') {
        commands.push(c)
      }
    }
    term.echo("available commands: " + commands.join(', '))
    return true
  }

  Terminal.prototype.sh.ls = function (term, opt) {
    console.log(opt)
    var ls = this.bucket.ls(opt[0])
    if ($.isArray(ls)) {
      for (var i=0; i<ls.length; i++) {
        term.echo("\t" + ls[i])
      }
      return true
    }
    for (var k in ls) {
      term.echo("\t" + k)
    }
    return true
  }

  Terminal.prototype.sh.pwd = function (term, opt) {
    term.echo("\t" + this.bucket.pwd())
    return true
  }

  Terminal.prototype.sh.cat = function (term, opt) {
    var t = this;
    console.log(this)
    for (var k in this.bucket) {
      term.echo(k)
    }    
    return true
  }

  Terminal.prototype.sh.curl = function (term, opt) {
    var t = this;
    console.log(this)
    for (var k in this.bucket) {
      term.echo(k)
    }    
    return true
  }

  Terminal.prototype.sh.contact = function (term, opt) {
    term.echo("echo 'Message body' | mail -s 'Subject' ")
    return true
  }

  new Terminal({
        greetings: "Welcome to ",
        name: 'kurei',
        height: 600,
        })

})(jQuery)