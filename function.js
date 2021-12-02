if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }


    function fireSweetAlert() {
        Swal.fire({
        icon: 'info',
        text: 'francescarellano@gmail.com',
        padding: 10,
        animation: true,
        imageUrl: './assets/icons/mail.jpg'
    })
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  /*!
 * GRT Responsive Menu - jQuery Plugin
 * Version: 1.1
 * Author: GRT107
 *
 * Copyright (c) 2018 GRT107
 * Released under the MIT license
*/

// Create a function for mobile version
(function( $ ){
	$.fn.grtmobile = function () {
		$('.grt-mobile-button').on('click', function(){
			$(this).toggleClass("grt-mobile-button-open");
			$("ul.grt-menu").toggleClass("open-grt-menu ");
			$("html, body").toggleClass("body-overflow");
		});
		$('li.grt-dropdown').on('click', function(e){
			$(this).toggleClass("active-dropdown");
		});
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();


// Add fixed class on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

// Prevent a href clicks on dropdown category item
$('li.grt-dropdown > a').on('click', function(e){
	e.preventDefault();
});


