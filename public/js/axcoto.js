(function ($) {
    var axcoto = {
        filterPortfolio: function () {
            var buttons = $('#portfolio-nav li')
            var folioContainer = $('#portfolio')        
            var sFolio = $('#portfolio-source')          
            
            $("a.project-thumb[rel=portfolio]").length && $("a.project-thumb[rel=portfolio]").colorbox({
                    transition:"elastic",
                    slideshow:true
            });
                
            buttons.click(function (e) {
                e.preventDefault();
                var s = $(this);
                buttons.removeClass('current');
                s.addClass('current');

                var type = $('a', s).attr('class');
                $('li', folioContainer).remove();
                $('li.'.concat(type), sFolio)
                .clone(true)
                .sort(function () {
                    return Math.round(Math.random() % 3) - 1
                })
                .css({skew: ['10deg', '10deg'], scale : 0, position: 'absolute', top: '-100px', left: '-100px'})
                .appendTo(folioContainer)
                .fadeIn('slow')
        .animate({
                    skew: ['0deg', '0deg'],
                    top: '0',
                    left: '0',
                    scale : 1
                }, 200, function () {
          $(this).css({position: 'relative'});
        })        
      })
        },

        animateFolio: function () {
            $folio = $('#portfolio');
            if (!$folio.length) {
                return false;
            }
            $('li', $folio).hover(function () {
                var deg = Math.round(Math.random() * 10) % 3 + 1;
                var direction = ['-', '+'];
                deg = direction[Math.round(Math.random() * 10) % 2].concat(deg, '0deg');
                $(this).animate({
                    rotate: deg,
                    'z-index': 2
                }, 200, 'linear')
            }, function () {
                $(this).animate({
                    rotate:'0deg',
                    'z-index': 0
                })
            })  
        },

        defaultText: function (obj, text) {
            obj.val(text);
            obj
                .click(function () {        
                    obj.val()==text && obj.val('');    
                })
            .mouseout(function () {
                setTimeout(function () {
                    obj.val()=='' && obj.val(text);
                }, 500);    
            });
            return true;  
        },

        init: function () {
            var s = axcoto
            s.filterPortfolio()
            s.validateForm()
            $('img.lazy').unveil()
        },

        validateForm: function () {
            var s = axcoto;
            var isContact = $('#email-contact-form').length;
            isContact && s.defaultText($('#name'), 'Name') && s.defaultText($('#email'), 'Email');

            isContact && $('#email-contact-form').submit(function () {
                $('.error').remove();
                if ($('#name').val() == '') {
                    $('#name').after('<label class="error">Please enter your name</label>');
                    return false;
                }

                var reg = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$");        
                if ($('#email').val() == '' || !reg.test($('#email').val())) {
                    $('#email').after('<label class="error">Please enter an valid email</label>');
                    return false;
                }
                return true
            });
        }

    }

    $(document).ready(function () {
        axcoto.init();
        axcoto.animateFolio();
        // $('#.terminalme').
    });  

})(jQuery);