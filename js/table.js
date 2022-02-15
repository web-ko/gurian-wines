


// $(".info-block").click(function(){
//     $(".info-block").toggleClass("intro");
//     $(".intro").slideToggle("slow");
//   });

// click to slide down/up the panel
$('.btn-click').click(function(){
var $helper = $('.toggled-content');
$helper.animate({
            height: "toggle"
        }, {
        duration: 500,
        progress: function(){
            $helper.scrollTop( $helper[100].scrollHeight );       
        }
    });
});
// end of click to slide down/up the panel



// swaps the display:none between the two spans: html-ში ვწერ <span id="first" onclick="toggleOne('second','first');">, <span id="second" onclick="toggleOne('first','second');">
function toggleOne(id,wid) {
       var e = document.getElementById(id);
        var f = document.getElementById(wid);
       if(e.style.display == 'block'){
          e.style.display = 'none';
		  f.style.display = 'block';
	   }
       else {
          e.style.display = 'block';
            f.style.display = 'none';
	   }
    }
// end of swaps the display:none between the two spans

