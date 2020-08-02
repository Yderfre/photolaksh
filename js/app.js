// nav bar change
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }
})

// nav bar responsive

const navSlide =()=>{
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li');


    burguer.addEventListener('click',()=>{

        //toggle Nav
        nav.classList.toggle('nav-active');
        // Animte Links
        navLinks.forEach((link, index) =>{

            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
           
            
        });
        //Burguer Animation
        burguer.classList.toggle('toggle')
    })
    
  
}
navSlide();


	// Init paralax
    $("#scene").parallax();

    $(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		$('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};
