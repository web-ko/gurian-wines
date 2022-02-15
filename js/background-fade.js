// პირველი ვარიანტი fade-ით, ჯავათი (უფრო კარგია)
let bg1 = document.getElementById("bg1")
let bg2 = document.getElementById("bg2")
let bg3 = document.getElementById("bg3")
let time = 2000


let slider = function(){
	if(bg1.className === "bgImg"
		&& bg2.className === "bgImg"
		&& bg3.className === "bgImg"){
		bg1.className = "bgImgShow"
		}
		else if(bg1.className === "bgImgShow"){
			bg1.className = "bgImg"
			bg2.className = "bgImgShow"
		}
		else if(bg2.className === "bgImgShow"){
			bg2.className = "bgImg"
			bg3.className = "bgImgShow"
		}
		else if(bg3.className === "bgImgShow"){
			bg3.className = "bgImg"
			bg1.className = "bgImgShow"
		}

		setTimeout("slider()",time)
}

window.onLoad = slider()
// end of პირველი ვარიანტი fade-ით, ჯავათი (უფრო კარგია)



// მეორე ვარიანტი ჯავათი
// var bgArr = [
// 'img/bg-6.jpg', 'img/bg.jpg', 'img/bg-12.jpg'];

// document.body.style.backgroundImage = 'url(' + bgArr[2] + ')';
// bgCur = 0;
// backgroundSwitch = function () {
// 	if (bgCur == bgArr.length) bgCur = 0;
// 	document.body.style.backgroundImage = 'url(' + bgArr[bgCur++] + ')';
// }
// window.setInterval(backgroundSwitch, 3000); // Switch every 6 seconds.
// end of მეორე ვარიანტი ჯავათი





