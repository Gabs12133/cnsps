$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
    
    ScrollReveal().reveal('.prop',
         { 
            delay: 500,        
        distance: '20%',
        origin: 'top'
    });
    ScrollReveal().reveal('#cta',
        { 
           delay: 500,        
       distance: '20%',
       origin: 'left'
   });

   ScrollReveal().reveal('#areaaluno',
    { 
       delay: 500,        
   distance: '20%',
   origin: 'top'
});
ScrollReveal().reveal('#visita',
    { 
       delay: 500,        
   distance: '20%',
   origin: 'top'
});
ScrollReveal().reveal('#banner',
    { 
       delay: 500,        
   distance: '20%',
   origin: 'right'
});
ScrollReveal().reveal('#imagens',
    { 
       delay: 500,        
   distance: '20%',
   origin: 'top'
});



    })