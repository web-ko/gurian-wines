$(document).ready(function(){
	// გვერდის ყოველი ახალი ჩატვირთვისას ფოტოს შეცვლა (random image on page load).
	// var images = ["samsung ad.jpg", "biblusi ad.jpg", "tegeta ad.jpg"];
	// $('<img class="fade-in" src="./img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#randimg');
	// end of გვერდის ყოველი ახალი ჩატვირთვისას ფოტოს შეცვლა (random image on page load).

	// burger/toggler-ს გახსნა-დაკეტვისას პიქტოგრამის ცვლილება
    $("#wrapper").click(function() {
    	$(".icon").toggleClass("close");
    	$(".opensearch-div").toggleClass("close-1");
    	$(".landing-page-logo").toggleClass("hide-1");
    	$(".page-logo").toggleClass("hide-2");
    	$(".wine-logo").toggleClass("hide-3");
  	// end of burger/toggler-ს გახსნა-დაკეტვისას პიქტოგრამის ცვლილება
});

    // fullscreen
	let fullscreen = document.querySelector(".fullscreen");
	let fullscreen1 = document.querySelector(".fullscreen-content");
	let wrapper = document.querySelector("#wrapper");
	wrapper.onclick=function()
	{
		fullscreen.classList.toggle("show");
		fullscreen1.classList.toggle("open");
		wrapper.classList.toggle("active");
	}
	// end of fullscreen

	// smooth scroll
	// html-ში ვამატებ nav.js ფაილს
	// default-ტად არის: changeHash: false და არა true.
	// $('a').smoothScroll();

	$('#menu-main').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});
	// end of smooth scroll

});

// fade-ი scroll-out-ის დროს
// jQuery(window).scroll(function() {
// if (jQuery(this).scrollTop() > 200){  
//     jQuery('.wrapper').fadeIn("slow");
//   }
//   else{
//     jQuery('.wrapper').fadeOut("slow");
//   }
// });
// end of fade-ი scroll-out-ის დროს

// navbar-ის ფერის შეცვლა scroll-ზე
$(window).scroll(function(){
	$("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
});
// end of navbar-ის ფერის შეცვლა scroll-ზე


 // animation on scroll
 // scroll-out კარგად არ კეთდება ვერტიკალურზე
// ScrollOut({
// 	targets: ".target,.target1,.target2"
// })
 // scroll-out კარგად არ კეთდება ვერტიკალურზე

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
 // end of animation on scroll

// click to slide down/up the panel
  $(".button-details").click(function(){
    $("#hideme").slideToggle("fast");
    $(".button-details").toggleClass("intro");
  });


// სიჩქარეები: slow, middle, fast. როცა მინდა მარტო დახრვა ან  მარტო გახსნა slideToggle-ის ნაცვლად ვწერ slideUp ან slideDown

// მეორე ვარიანტი, სადაც სიჩქარეები შემიძლია მეტად ზუსტად ვარეგულირო ციფრებით
// $('.button-details').click(function(){
// var $helper = $('#hideme');
// $helper.animate({
//             height: "toggle"
//         }, {
//         duration: 200,
//         progress: function(){
//             $helper.scrollTop( $helper[100].scrollHeight );       
//         }
//     });
// });
// end of მეორე ვარიანტი, სადაც სიჩქარეები შემიძლია მეტად ზუსტად ვარეგულირო ციფრებით
// end of click to slide down/up the panel


// როდესაც მინდა კლიკის დროს იცვლებოდეს ტექსტი
btn.addEventListener("click", () => {
    if (btn.innerText == "More") {
        btn.innerText = "Less";
    } else {
        btn.innerText = "More"
    }
})
// end of როდესაც მინდა კლიკის დროს იცვლებოდეს ტექსტი




// smooth scroll, active კლასის გარეშე
// var navigation = $("#navigation").height();
// 	$('a[href^="#').on("click", function(){
// 		var clickedElementAttrName = $(this).attr("href");
// 		var seciton = $(clickedElementAttrName);
// 		var scroToTop = seciton.offset().top - navigation;
// 		console.log(scroToTop, navigation);
// 		$("html,body").animate({
// 			scrollTop:scroToTop
// 		}, 1000)
// 	});
// end of smooth scroll, active კლასის გარეშე






// როდესაც მინდა კლიკის დროს დატრიალდეს ობიექტი
// $("button").click(function() {
//   $("button").toggleClass("down-arrow");
// });

// css-ში ვწერ:
// .down-arrow{
// 	transform: rotate(180deg);
// }

// div{
// 	transition: .5s;
// }
// end of როდესაც მინდა კლიკის დროს დატრიალდეს ობიექტი




// როდესაც მინდა მშობელ ობიექტზე კლიკის დროს დატრიალდეს შვილი ობიექტი.
// $(document).ready(function() {
//   var leftdegplus = -45;
//   var leftdegminus = 45;
//   var rightdegplus = 45;
//   var rightdegminus = -45;
//   $(".wine-bottle-text").click(function() {
//     leftdegplus = leftdegplus + 180;
//     $(this).find(".down-arrow").css("transform", "rotate(" + leftdegplus + "deg)");

//     leftdegminus = leftdegminus - 180;
//     $(this).find("#left-bottom").css("transform", "rotate(" + leftdegminus + "deg)");
  
//   });
//   $(".right").click(function() {

//     rightdegplus = rightdegplus - 180;
//     $(this).find("#right-top").css("transform", "rotate(" + rightdegplus + "deg)");

//     rightdegminus = rightdegminus + 180;
//     $(this).find("#right-bottom").css("transform", "rotate(" + rightdegminus + "deg)");
//   });

// });


// იმ შემთხვევაში, როდესაც უნდა დატრიალდეს მთელი ობიექტი და არა ობიექტი სხვადასხვა გვერდებით, ეს ნაწილი საკმარისია.
// $(document).ready(function() {
//   var leftdegplus = 0;
//   var leftdegminus = 180;
//   var rightdegplus = 180;
//   var rightdegminus = -180;
//   $(".wine-bottle-text").click(function() {
//     leftdegplus = leftdegplus + 180;
//     $(this).find(".down-arrow").css("transform", "rotate(" + leftdegplus + "deg)");
// end of იმ შემთხვევაში, როდესაც უნდა დატრიალდეს მთელი ობიექტი და არა ობიექტი სხვადასხვა გვერდებით, ეს ნაწილი საკმარისია.
//   });
// });

// end of როდესაც მინდა მშობელ ობიექტზე კლიკის დროს დატრიალდეს შვილი ობიექტი.





// პროდუქტის ოდენობის ცვლილებისთვის (არ მუშაობს, რადგან php ფაილი ვერ მივაბი).
// function calculateTotal(){
// 	var gelRate = document.calculateTotal("qty").value;
// 	if (Number(gelRate) >= 1) {
// 	let phpval = "<?= $grandTotal ?>";

// 	var dollarResult = document.querySelector("#tot_amount");
// 	var total = Number(gelRate) * Number(phpval);

// 	return dollarResult.innerHTML = total;
// 	}
// 	else{
// 		exit();	
// 	}
// }
// end of პროდუქტის ოდენობის ცვლილებისთვის (არ მუშაობს, რადგან php ფაილი ვერ მივაბი).



// პროდუქტის ოდენობის ცვლილებისთვის
function calculateAmount(val){
	var tot_price = val * 40
	// display the result
	var divobj= document.getElementById("tot_amount");
	divobj.value= tot_price;
}
// end of პროდუქტის ოდენობის ცვლილებისთვის


// smooth loading
// $('#nav').fadeIn(500,function() {
//     $('#main').fadeIn(1000,function() {
//        $('#footer').fadeIn(1000);     
//     });
// });


// ან მეორე ვარიანტი
// jQuery(function ($) {
//     $('.loading').show();
//     $('.main').hide();
// });
// $(document).on('load', function () {
//     $('.main').fadeIn(500);
//     $('.loading').hide();
// });
// end of smooth loading
