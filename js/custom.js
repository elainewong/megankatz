
// -------------------------------------------------------------------------------------------
// cufon
// -------------------------------------------------------------------------------------------

	Cufon.replace('h1, h2, h3, h4, h5, h6', {
			hover: 'true'
		});
	Cufon.replace('#nav li a', {
			hover: 'true'
		});
	Cufon.replace('.column .box h3', {
			textShadow: '#9FCCF5 .5px 1px'
		});


// -------------------------------------------------------------------------------------------
// navigation effect
// -------------------------------------------------------------------------------------------

	$(document).ready(function(){
	
		$('#nav li .not_current').each(function(){
	
			$(this).before($(this).clone().removeClass().addClass('hoverMenu'));
	
		});
		
		$('#nav li').hover(function(){
		
			$(this).find('.hoverMenu').stop().animate({marginTop:'0px'}, {queue:false, duration: 200, easing: ''});
	
		},
		
		function(){
		
			$(this).find('.hoverMenu').stop().animate({marginTop:'-32px'}, {queue:false, duration: 200, easing: ''});
	
		});
		
	});
	
	
// -------------------------------------------------------------------------------------------
// sliding box
// -------------------------------------------------------------------------------------------

	$(document).ready(function(){
		//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
		//Vertical Sliding
		$('.boxgrid.slidedown').hover(function(){
			$(".cover", this).stop().animate({top:'-147px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		$('.boxgrid.slideup').hover(function(){
			$(".cover", this).stop().animate({top:'147px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		//Horizontal Sliding
		$('.boxgrid.slideright').hover(function(){
			$(".cover", this).stop().animate({left:'226px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		$('.boxgrid.slideleft').hover(function(){
			$(".cover", this).stop().animate({left:'-226px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
		//Diagnal Sliding
		$('.boxgrid.slideangle').hover(function(){
			$(".cover", this).stop().animate({top:'147px', left:'226px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		}, function() {
			$(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:500, easing: 'easeInOutExpo'});
		});
	});
	

// -------------------------------------------------------------------------------------------
// menu sidebar
// -------------------------------------------------------------------------------------------

//menu links effects							
							
$(document).ready(function(){

	      $('ul.menu_sidebar li a').hover(function() {
	        $(this).stop().animate({ paddingLeft: '40px', backgroundPosition: '15px' }, 200);
	      }, function() {
	        $(this).stop().animate({ paddingLeft: '35px', backgroundPosition: '10px' }, 200);           
	      });
		
});



	
// -------------------------------------------------------------------------------------------
// forms
// -------------------------------------------------------------------------------------------

//search form

$(document).ready(function() {
	$('#search_form input[type="text"]').focus(function() {
	    if (this.value == this.defaultValue){ 
		this.value = '';
			}
			if(this.value != this.defaultValue){
			this.select();
		}
	});
	$('#search_form input[type="text"]').blur(function() {
	    if ($.trim(this.value) == ''){
			this.value = (this.defaultValue ? this.defaultValue : '');
			}
	});
});

	

// -------------------------------------------------------------------------------------------
// styles switcher sliding
// -------------------------------------------------------------------------------------------


$(document).ready(function(){ 

	$(".styles_switcher").css('top', '-230px');

	$("a.sliding_button").toggle( 
				function () { 
 					$(".styles_switcher").animate({top: "0"}, {queue:false, duration: 1700, easing: 'easeOutQuint'}) 
                }, 
                function () { 
					$(".styles_switcher").animate({top: "-230px"}, {queue:false, duration: 1700, easing: 'easeOutQuint'})  
				} 
		); 
        
}); 


// -------------------------------------------------------------------------------------------
// tooltip
// -------------------------------------------------------------------------------------------

this.tooltip = function(){	
	/* CONFIG */		
		xOffset = 10;
		yOffset = 10;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
	$(".tooltip").hover(function(e){											  
		this.t = this.title;
		this.title = "";									  
		$("body").append("<p id='tooltip'>"+ this.t +"</p>");
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn(300);		
	},
	function(){
		this.title = this.t;		
		$("#tooltip").remove();
	});	
	$("a.tooltip").mousemove(function(e){
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
	};



	// starting the script on page load
	$(document).ready(function(){
		tooltip();
	});








