(function ($) {
  var Terminal = function (option) {
    this.stack = '/'

    var t = this
    $('.terminalme').terminal(function(input, term) {
        if (input == '') {
          input = 'help'
        }
        
        if (input !== '') {
          var _cmd = t.parse_command(input)
          console && console.log(_cmd)          
          try {
            var result = t.sh[_cmd.c].call(this, term,_cmd.o)
            if (result !== true) {
              term.echo(new String(result));
            }
          } catch(e) {
              term.error(new String(e));
          }
        }

        term.echo('available command: help, uname, contact, ls, product, lab, echo, mail');
        

      }, option)
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
    return {c: s[0], o: s.splice(0,1)}
  }

  Terminal.prototype.sh = {}

  Terminal.prototype.sh.not_found = function (term, opt) {
    term.error("Command " + opt[0] + ' not found. Try help to see available commands.')
    return true
  }

  Terminal.prototype.sh.cd = function (term, opt) {

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
    term.echo("available commands: uname, contact, ls, product, lab")
    return true
  }
  Terminal.prototype.sh.ls = function (term, opt) {
    term.echo("product")
    term.echo("lab")
    term.echo("shop")
    return true
  }

  Terminal.prototype.sh.contact = function (term, opt) {
    term.echo("echo 'Message body' | mail -s 'Subject' ")
    return true
  }

  new Terminal({
        greetings: "\
        #                                  #              \
        #                                  #              \
       ###    ##   ##   #####    #####   ######    #####  \
       # #      # #    #        #     #    #      #     # \
      #####      #     #        #     #    #      #     # \
      #   #     # #    #        #     #    #      #     # \
     ##   ##  ##   ##   #####    #####      ###    #####  \
        ",
        name: 'kurei',
        height: 600,
        prompt: '[kurei@axcoto.com] ~> '})

})(jQuery)