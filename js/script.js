$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

$(document).ready(function(){
    $('.tabs').tabs();
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {}
    var instances = M.Sidenav.init(elems, options);

   // var elems = document.querySelectorAll('.dropdown-trigger');
   // var instances = M.Dropdown.init(elems, options);

    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
    
    $('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
  });



function hoverImg(e,name){
    document.getElementById("text-"+name).style.visibility = "visible";
    document.getElementById("text-"+name).style.opacity = "1";
   
}

function normalImg(e,name){
    document.getElementById("text-"+name).style.visibility = "hidden";
    document.getElementById("text-"+name).style.opacity = "0";
    document.getElementById("text-"+name).style.transition = "visibility 1s, opacity 0.5s linear";
    
}
