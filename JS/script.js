$(document).ready(function() {

//== Navbar ====================================================================/
    'use strict';

    $(window).scroll(function() { 
        
        'use strict';

        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
                'margin-top': '-100px',
                'opacity': '0'
            }); //== End Navbar opacity

            $('.navbar-default').css ({
                'background-color': 'rgba(59, 59, 59, 0)',
            });//== End Navbar bg color

        } else {

            $('.navbar').css ({
                'margin-top': '0px',
                'opacity': '1'
            });//== End Navbar opacity

            $('.navbar-default').css ({
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444'
            });//== End Navbar bg color

            $('navbar-brand').css({
                'height': '35px',
                'padding-top': '0px',
            });//== END Navbar logo

            $('.navbar-nav > li > a').css({
                'padding-top': '15px',
                'color': 'white' 
            });//== END Navbar-nav color

        }//== END else

    }); //== END NavBar 


//== Smooth Scroll =============================================================/
    'use strict';

$('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname == this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length){
        $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000);
    return false;
    }
}
});//== END Smooth Scroll(old)

   













}); //=> END doc ready