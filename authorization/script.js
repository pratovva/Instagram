let img = document.querySelector('.img')
var chet = 1;
			window.onload = function () { setTimeout(frout, 5000); }
			function frout() {
			chet++;
			if (chet>5) {chet=0;}
				switch(chet) {
				case 1:
					document.getElementById('img').src = "/authorization/img/insta4.png";
					
					break;
				case 2:
					document.getElementById('img').src = "/authorization/img/insta2.png";
					break;
				case 3:
					document.getElementById('img').src = "/authorization/img/insta3.png";
					break;
				case 4:
					document.getElementById('img').src = "/authorization/img/insta5.png";
					break;
				case 5:
					document.getElementById('img').src = "/authorization/img/insta1.png";
					break;
				}
				
			setTimeout(frout, 3000);
			}