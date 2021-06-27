document.addEventListener("DOMContentLoaded",function () {
	var chungtoi= document.querySelector('.header__bottom');
		vtkhoivang=chungtoi.offsetTop;
	var trangthaikhoivang="duoi";
	var chancuoi= vtkhoivang+150;
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if ((window.pageYOffset > vtkhoivang)) {
			if (trangthaikhoivang=='duoi') {
				trangthaikhoivang="danghienthi";
				chungtoi.classList.add('header__bottom1');
			}
		}
		else if ((window.pageYOffset < vtkhoivang)) {
			if (trangthaikhoivang=='danghienthi') {
				trangthaikhoivang='duoi';
				chungtoi.classList.remove('header__bottom1');
			}
		}
	
	})
},false)