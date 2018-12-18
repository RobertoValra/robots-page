$(document).ready(function(){
	/*********Display packages**********/
	var packList = [
		{ id: 1, img: "img/pack-1.png", packName: "Paquete 1", specs: "Estudiantes 1-20 <br><br> 5 Krypton<br>1 Oculus" },
		{ id: 2, img: "img/pack-2.png", packName: "Paquete 2", specs: "Estudiantes 1-30 <br><br> 2 Krypton<br>4 Oculus"},
		{ id: 3, img: "img/pack-3.png", packName: "Paquete 3", specs: "Estudiantes 1-40 <br><br> 3 Krypton<br>2 Oculus"},
		{ id: 4, img: "img/pack-4.png", packName: "Paquete 4", specs: "Estudiantes 1-50 <br><br> 4 Krypton<br>5 Oculus"},
		{ id: 5, img: "img/pack-5.png", packName: "Paquete 5", specs: "Estudiantes 1-20 <br><br> 8 Krypton<br>13 Oculus"},
		{ id: 6, img: "img/pack-6.png", packName: "Paquete 6", specs: "Estudiantes 1-30 <br><br> 1 Krypton<br>5 Oculus"},
		{ id: 7, img: "img/pack-7.png", packName: "Paquete 7", specs: "Estudiantes 1-40 <br><br> 3 Krypton<br>1 Oculus"},
		{ id: 8, img: "img/pack-1.png", packName: "Paquete 8", specs: "Estudiantes 1-10 <br><br> 2 Krypton<br>3 Oculus"},
	];
		
	var ulPack = document.createElement('ul');
	$('.grid').append(ulPack);
	
	$.each(packList, function( key, value ){
		var liPack = document.createElement('li')
		liPack.classList.add("col-lg-6", "col-md-6", "col-sm-6", "col-xs-12");
		ulPack.append(liPack);
		
		const markup = `
		<div class="effect-ming">
			<img src=${value.img} alt="img09"/>
			<div class="figcaption">
				<h2>${value.packName}</h2>
				<p>${value.specs}</p>
				<a href="#" data-toggle="modal" data-target="#detailModal">View more</a>
				<span class="pack-img-title">${value.packName}</span>
			</div>			
		</div>
		`;
				
		liPack.innerHTML = markup;
	});
		
	/**********Select clicked package to display correct info in modal**********/
	$('.effect-ming').click(function(){
		var packSelected = $(this).find('h2').text();
		switch(packSelected){
			case "Paquete 1":
				var packDetalTitle = "Equipo 1";
				var introVideo = "url";
				var introText = "this is package no. 1";
				break;
			case "Paquete 2":
				var packDetalTitle = "Equipo 2";
				var introVideo = "url";
				var introText = "this is package no. 2";
				break;
			case "Paquete 3":
				var packDetalTitle = "Equipo 3";
				var introVideo = "url";
				var introText = "this is package no. 3";
				break;
			case "Paquete 4":
				var packDetalTitle = "Equipo 4";
				var introVideo = "url";
				var introText = "this is package no. 4";
				break;
			case "Paquete 5":
				var packDetalTitle = "Equipo 5";
				var introVideo = "url";
				var introText = "this is package no. 5";
				break;
			case "Paquete 6":
				var packDetalTitle = "Equipo 6";
				var introVideo = "url";
				var introText = "this is package no. 6";
				break;
			case "Paquete 7":
				var packDetalTitle = "Equipo 7";
				var introVideo = "url";
				var introText = "this is package no. 7";
				break;
			case "Paquete 8":
				var packDetalTitle = "Equipo 8";
				var introVideo = "url";
				var introText = "this is package no. 8";
				break;
		}
			
		const detailModal = `
		<div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">${packDetalTitle}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<ul class="pack-detail">
							<li class="pack-detail-item video">
								<div class="video-space">
								</div>
								<p class="pack-detail-exp">${introText}</p>
							</li>
							<li class="pack-detail-item project-no">
								<h4>No. de proyectos</h4>
								<div class="video-space">
								</div>
							</li>
							<li class="pack-detail-item test">
								<h4>Testitmonios</h4>
								<div class="video-space">
								</div>
							</li>
						</ul>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn" data-toggle="" data-target="">
							Cotizar
						</button>
					</div>
				</div>
			</div>
		</div>
		`;
		
		$("#customizeModal").after(detailModal)
	})
	
	/*********Calculator**********/
	var clickValue,
		operation,
		total = 0,
		kryptonQty = 0, occulusQty = 0, irisQty = 0, everestQty = 0, boyaQty = 0,
		kryptonTotal = 0, occulusTotal = 0, irisTotal = 0, everestTotal = 0, boyaTotal = 0;
		
	$('.modal .modal-body .pack-item-body .moreless-btn').click(function(){
		if($(this).hasClass('more')){
			operationClicked = true;
		}else{
			operationClicked = false;
		}
		var thisCliked = $(this).closest('li.item-list').children();
		if ( thisCliked.hasClass('krypton')){
			clickValue = 10;
			if ( operationClicked ){
				kryptonQty = kryptonQty + 1;
				kryptonTotal = clickValue * kryptonQty;
			}else{
				if ( kryptonQty === 0 ){
					alert("No puedes reducir el número")
				}else{
					kryptonQty = kryptonQty - 1;
					kryptonTotal = kryptonTotal - clickValue;
				}
			}
			$(this).siblings('span.number').text(kryptonQty)
			$(this).parent().prev().find('span.total').text("$" + kryptonTotal)
		}
		if ( thisCliked.hasClass('occulus')){
			clickValue = 20;
			if ( operationClicked ){
				occulusQty = occulusQty + 1;
				occulusTotal = clickValue * occulusQty;
			}else{
				if ( occulusQty === 0 ){
					alert("No puedes reducir el número")
				}else{
					occulusQty = occulusQty - 1;
					occulusTotal = occulusTotal - clickValue;
				}
			}
			$(this).siblings('span.number').text(occulusQty)
			$(this).parent().prev().find('span.total').text("$" + occulusTotal)
		}
		if ( thisCliked.hasClass('iris')){
			clickValue = 30;
			if ( operationClicked ){
				irisQty = irisQty + 1;
				irisTotal = clickValue * irisQty;
			}else{
				if ( irisQty === 0 ){
					alert("No puedes reducir el número")
				}else{
					irisQty = irisQty - 1;
					irisTotal = irisTotal - clickValue;
				}
			}
			$(this).siblings('span.number').text(irisQty)
			$(this).parent().prev().find('span.total').text("$" + irisTotal)
		}
		if ( thisCliked.hasClass('everest')){
			clickValue = 40;
			if ( operationClicked ){
				everestQty = everestQty + 1;
				everestTotal = clickValue * everestQty;
			}else{
				if ( everestQty === 0 ){
					alert("No puedes reducir el número")
				}else{
					everestQty = everestQty - 1;
					everestTotal = everestTotal - clickValue;
				}
			}
			$(this).siblings('span.number').text(everestQty)
			$(this).parent().prev().find('span.total').text("$" + everestTotal)
		}
		if ( thisCliked.hasClass('boya')){
			clickValue = 50;
			if ( operationClicked ){
				boyaQty = boyaQty + 1;
				boyaTotal = clickValue * boyaQty;
			}else{
				if ( boyaQty === 0 ){
					alert("No puedes reducir el número")
				}else{
					boyaQty = boyaQty - 1;
					boyaTotal = boyaTotal - clickValue;
				}
			}
			$(this).siblings('span.number').text(boyaQty)
			$(this).parent().prev().find('span.total').text("$" + boyaTotal)
		}
		total = kryptonTotal + occulusTotal + irisTotal + everestTotal + boyaTotal;
		
		$('.modal-dialog .modal-content .modal-footer h2').text("Total: $" + total);
	});
	
	/*********Scroll to section********/
	$('.navbar-custom a, .next-section-btn a, .next-pack-btn a, .plans a, .go-to-top-btn a').click(function(){
		var top = 50;
		//Toggle Class   
		$(this).closest('li').addClass("active");
		var theClass = $(this).attr("class");
		$('.'+theClass).parent('li').addClass('active');
		//Animate
		$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 50
		}, 1500);
		return false;
	});
	$('.scrollTop a').scrollTop();
	
	/********Effect Ming for packs*********/
	$(document).on('mouseenter', '.effect-ming', function(){
		$(this).find('span.pack-img-title').fadeOut();
		$(this).find('h2').css('opacity', '10');
	});
	$(document).on('mouseleave', '.effect-ming', function(){
		$(this).find('span.pack-img-title').fadeIn();
		$(this).find('h2').css('opacity', '0');
	});
	
	/*********Width of images in slide on page load*********/
	sliderImages = function(){
		var windowWidth = $(window).width();
		if ( windowWidth < 621 ){
			$('.img-slide-1 img').attr('src' , 'img/krypton-slide-phone.png')
			$('.img-slide-2 img').attr('src' , 'img/boya-slide-phone.png')
			$('.img-slide-3 img').attr('src' , 'img/everest-slide-phone.png')
			$('.img-slide-4 img').attr('src' , 'img/iris-slide-phone.png')
		}
	}
	
	/*********Change slide images width when resize*********/
	var resizeTimer;
	$(window).on('resize', function(e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			var windowWidth = $(window).width();
			if ( windowWidth < 621 ){
				$('.img-slide-1 img').attr('src' , 'img/krypton-slide-phone.png')
				$('.img-slide-2 img').attr('src' , 'img/boya-slide-phone.png')
				$('.img-slide-3 img').attr('src' , 'img/everest-slide-phone.png')
				$('.img-slide-4 img').attr('src' , 'img/iris-slide-phone.png')
			}else{
				$('.img-slide-1 img').attr('src' , 'img/krypton-slide.png')
				$('.img-slide-2 img').attr('src' , 'img/boya-slide.png')
				$('.img-slide-3 img').attr('src' , 'img/everest-slide.png')
				$('.img-slide-4 img').attr('src' , 'img/iris-slide.png')
			}
		}, 250);
	});
	
	/**********Close expaned menu from navbar***********/
	$('.nav a').on('click', function(){
		$('.btn-navbar').click(); //bootstrap 2.x
		$('.navbar-toggle').click() //bootstrap 3.x by Richard
	});
	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");               
		var _opened = $navbar.hasClass("in");
		if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
			$navbar.collapse('hide');
		}
	});

	sliderImages();		
});