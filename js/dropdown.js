/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




// $(".dropdown").click(function(){
//     $(this).children().fadeIn("fast");
//   });
//   $(".dropdown").mouseleave(function(){
//     $(".dropdown-menu").fadeOut("fast");
//   });


 // $('.dropdown').hover(function() {
 //      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
 //    }, function() {
 //      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
 //    });  