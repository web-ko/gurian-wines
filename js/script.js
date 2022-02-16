$(document).ready(function(){
     $("#wrapper").click(function() {
    	$(".icon").toggleClass("close");
    	$(".opensearch-div").toggleClass("close-1");
    	$(".landing-page-logo").toggleClass("hide-1");
    	$(".page-logo").toggleClass("hide-2");
    	$(".wine-logo").toggleClass("hide-3");
});


	let fullscreen = document.querySelector(".fullscreen");
	let fullscreen1 = document.querySelector(".fullscreen-content");
	let wrapper = document.querySelector("#wrapper");
	wrapper.onclick=function()
	{
		fullscreen.classList.toggle("show");
		fullscreen1.classList.toggle("open");
		wrapper.classList.toggle("active");
	}


	$('#menu-main').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});

});


$(window).scroll(function(){
	$("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
});


window.addEventListener('scroll', reveal);

function reveal(){
	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 0;

		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');
		}
		else{
			reveals[i].classList.remove('active');
		}
	}
}


  $(".button-details").click(function(){
    $("#hideme").slideToggle("fast");
    $(".button-details").toggleClass("intro");
  });




btn.addEventListener("click", () => {
    if (btn.innerText == "More") {
        btn.innerText = "Less";
    } else {
        btn.innerText = "More"
    }
})


function calculateAmount(val){
	var tot_price = val * 40
	// display the result
	var divobj= document.getElementById("tot_amount");
	divobj.value= tot_price;
}

