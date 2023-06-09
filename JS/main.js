// 슬라이드 자동 움직임
		var counter = 1;
		setInterval(function(){
			document.getElementById('radio' + counter).checked = true;
			counter++;
			if(counter > 5){
				counter = 1;
			}
		}, 5000);

// 스크롤 라이브러리
window.addEventListener('load', function(event){
	AOS.init();
});