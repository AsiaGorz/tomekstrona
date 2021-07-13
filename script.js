const menu = document.querySelector(".menu");
const iconBurger = document.querySelector(".bar1");
const iconExit = document.querySelector(".bar3");
const line = document.querySelector("nav");

function myFunction(x) {
    x.classList.toggle("show");
}

menu.addEventListener("click", function () {
    line.classList.toggle("show");
})



$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})


// $(document).on('scroll', function () {

//     const windowHeight = $(window).height()
//     const scrollValue = $(this).scrollTop();
   
  
  
    
//     const $art1 = $('.art1');
//     const art1FromTop = $art1.offset().top
//     const art1Height = $art1.outerHeight()
    
  
//     const $art2 = $('.art2');
//     const art2FromTop = $art2.offset().top
//     const art2Height = $art2.outerHeight()
  
//     const $art3 = $('.art3');
//     const art3FromTop = $art3.offset().top
//     const art3Height = $art3.outerHeight()
  
//     if (scrollValue > art1FromTop + art1Height - windowHeight) {
//       $art1.addClass('available');
//     }
  
//     if (scrollValue > art2FromTop + art2Height - windowHeight) {
//     $art2.addClass('available');
//     }
  
//     if (scrollValue > art3FromTop + art3Height - windowHeight) {
//       $art3.addClass('available');
//     }
// })