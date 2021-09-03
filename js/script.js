
/*smooth scrolling */
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();
			
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth' 
			});
		})
	});
			
	/*parallax */

function scrollParallax(){
	parallax= document.querySelector('.parallax') ;
	let scrollTop =document.documentElement.scrollTop;
	parallax.style.backgroundPosition=" 0 " + scrollTop * -0.3 + "px" ;
	alert('scrollParallax activo');
}

window.addEventListener('scroll',scrollParallax);


        /* menu fixed */
window.addEventListener('load',function(){
	animacion = document.querySelector ('#ontop');
	clasesAnimacion = animacion.className;	
	activo=0;

	window.addEventListener('scroll', function(){			
			posicion = animacion.offsetTop ;
			var scroll = window.pageYOffset ;
			
			if(scroll > posicion ){
					if( activo==0 ){
						animacion.style.position = 'fixed';
						// animation.style.right = '0';
						// animation.style.top = '0';
						activo=1;	
					}						
			}else{
						animacion.style.position = 'relative';
						activo=0;								
			}
	});

});



/* animacion scroll */
window.addEventListener('load',function(){
	let animacion = document.querySelectorAll('.animacion-scroll');
	clasesAnimacion = animacion[0].className;
	displayAnimacion = animacion[0].style.display;
	let posicionObj1=[];
	inicializado=[];
	let tamanoDePantalla = window.innerHeight/1.5;

		window.addEventListener('scroll', function(){
			//alert('animacion[0].className: '+animacion[0].className+'   clasesAnimacion: '+clasesAnimacion);

				for (var i = 0; i < animacion.length; i++) {
					posicionObj1[i] = animacion[i].getBoundingClientRect().top;
					if( animacion[i].className == clasesAnimacion ){
						animacion[i].style.visibility="hidden";
					}
				}

				// for (var k = 0; k < animacion.length; k++) {
				// 	animacion[k].className = clasesAnimacion;
				// }

				for (var j = 0; j < animacion.length; j++) {
					if(posicionObj1[j] < tamanoDePantalla   ){
						if( animacion[j].className == clasesAnimacion ){
							animacion[j].className +=' animate__animated animate__zoomIn';
							animacion[j].style.visibility="visible";
						}
					}
								
				}
			
		});

});



/* control contenido posts */

window.addEventListener('load',function(){

	contenidoPost =  document.querySelectorAll('.contenido-post');
	id_publicacion =  document.querySelectorAll('.id_publicacion');
	

	for (let i = 0; i < contenidoPost.length; i++) {
		content = contenidoPost[i].innerHTML;
		content = content.substr(0,120);
		id = id_publicacion[i].innerHTML;

		if(contenidoPost[i].innerHTML.length>120){
			contenidoPost[i].innerHTML = content + ' <a href="post-details.php?post_id='+id+'&pagina=1" > ...leer mas</a> ';
		}else{
			contenidoPost[i].innerHTML = content;
		}

	}
});

/* side-bar */

window.addEventListener('load',function(){

	sidebarContent = document.querySelector('.side-bar-content');
	sidebar = document.querySelector('#side-bar');

	clasesSidebar = sidebar.className;
	posYsidebar = sidebar.offsetTop;
	altoBrowser = window.innerHeight;


		window.addEventListener('scroll',function(){

			scrollY = window.pageYOffset;
			
			if( scrollY >= posYsidebar-80 ){
				sidebarContent.style.position = 'fixed';
				sidebarContent.style.right = '0';
				sidebarContent.style.bottom = '0';
			}else
			if( scrollY < posYsidebar-80 ){
				sidebarContent.style.border='0';
				sidebarContent.style.position = 'relative';		
			}

			/* footer */

			footer = document.querySelector('#footer');

			posYfooter = footer.offsetTop;

			if( scrollY >= posYfooter-altoBrowser ){
				sidebarContent.style.position = 'relative';
				sidebar.className += ' align-items-end ';
			}else{
				sidebar.className = clasesSidebar;
			}


		});


});



/* notice sidebar */

window.addEventListener('load',function(){
	
		sidebarNotice = document.querySelector('.sidebar-notice');
		spanNotice = document.querySelector('.span-notice');
		spanNotice.style.display="none";
		claseSpan = spanNotice.className;
		isOver = 0;

		if(window.innerWidth>=1200){
			sidebarNotice.addEventListener('mouseover',function(){
				if(isOver==0){
					spanNotice.style.display="block";
					spanNotice.className+=" animate__animated animate__slideInUp";
				}
			});
		}

});


/** estilos  */


// //body section.container-fluid div.row div.col-12 nav.navbar div#uno ul.navbar-nav li.nav-item a.nav-link:hover{
// 	window.addEventListener('load',function(){
// 		link = document.querySelectorAll('body section.container-fluid div.row div.col-12 nav.navbar div#uno ul.navbar-nav li.nav-item a.nav-link');
		
// 		for (let i = 0; i < link.length; i++) {
// 			clasesLink = link[i].className;
// 			link[i].addEventListener('mouseover',function(){
// 				link.style.
// 				alert(link.className);
// 			});
// 			link[i].addEventListener('mouseout',function(){
// 				link.className = clasesLink;
// 				alert(link.className);
// 			});	
				
// 		}
// 	});









