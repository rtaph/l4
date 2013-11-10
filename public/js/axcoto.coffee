class App
    constructor: (@name) ->
        @filterPortfolio()
        @validateForm()
        $('img.lazy').unveil()
        @animateFolio()

    filterPortfolio: -> 
        buttons = $ '#portfolio-nav li'
        folioContainer = $ '#portfolio'        
        sFolio = $ '#portfolio-source'
            
        if $("a.project-thumb[rel=portfolio]").length
            $("a.project-thumb[rel=portfolio]").colorbox
                transition:"elastic",
                slideshow:true 
                
        buttons.click (e) ->
            e.preventDefault()
            s = $ this
            buttons.removeClass 'current'
            s.addClass 'current'

            type = $ 'a', s.attr('class')
            $('li', folioContainer).remove()
            $('li.'.concat(type), sFolio)
                .clone(true)
                .sort ->
                    return Math.round(Math.random() % 3) - 1
                .css
                    skew: ['10deg', '10deg']
                    scale : 0
                    position: 'absolute'
                    top: '-100px', 
                    left: '-100px'
                .appendTo(folioContainer)
                .fadeIn('slow')
                .animate(
                    skew: ['0deg', '0deg']
                    top: '0'
                    left: '0'
                    scale : 1
                    ,200, -> 
                        $(this).css
                            position: 'relative'
                )

    animateFolio: -> 
        $folio = $('#portfolio')
        return false if !$folio.length

        $('li', $folio).hover ->
                deg = Math.round(Math.random() * 10) % 3 + 1
                direction = ['-', '+']
                deg = direction[Math.round(Math.random() * 10) % 2].concat(deg, '0deg')
                $(this).animate {rotate: deg,'z-index': 2}, 200, 'linear'
            , ->
                $(this).animate 
                    rotate:'0deg',
                    'z-index': 0
                
            
        

    validateForm: ->
        isContact = $('#email-contact-form').length
        
        isContact && $('#email-contact-form').submit () ->
            $('.error').remove()
            if ($('#name').val() == '') 
                $('#name').after('<label class="error">Please enter your name</label>')
                return false
            

            reg = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$")
            if $('#email').val() == '' or !reg.test($('#email').val())
                $('#email').after('<label class="error">Please enter an valid email</label>');
                return false;
            
            return true

(($ = jQuery) -> $(document).ready -> new App "frontpage")()
