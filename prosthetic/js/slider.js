// -------------------------------------------------------------------------------------------
// slider
// -------------------------------------------------------------------------------------------
	
	$(function () {
		$('#slider').anythingSlider({
			
		  // Appearance
		  width               : 780,      // Override the default CSS width
		  height              : 390,      // Override the default CSS height
		  resizeContents      : true,      // If true, solitary images/objects in the panel will expand to fit the viewport

		  // Navigation
		  startPanel          : 1,         // This sets the initial panel
		  toggleArrows        : false,     // if true, side navigation arrows will slide out on hovering & hide @ other times
		  buildNavigation     : true,      // If true, builds a list of anchor links to link to each panel
		  enableNavigation    : true,      // if false, navigation links will still be visible, but not clickable.
		  toggleControls      : false,     // if true, slide in controls (navigation + play/stop button) on hover and slide change, hide @ other times
		
		  // Slideshow options
		  startStopped        : false,     // If autoPlay is on, this can force it to start stopped
		  resumeOnVideoEnd    : true,      // If true & the slideshow is active & a youtube video is playing, the autoplay will pause until the video completes
		  stopAtEnd           : false,     // If true & the slideshow is active, the slideshow will stop on the last page
		  playRtl             : false,     // If true, the slideshow will move right-to-left
		  startText           : "Start",   // Start button text
		  stopText            : "Stop",    // Stop button text
		  delay               : 4000,      // How long between slideshow transitions in AutoPlay mode (in milliseconds)
		  animationTime       : 1000,       // How long the slideshow transition takes (in milliseconds)
		  easing              : "easeInOutExpo",   // Anything other than "linear" or "swing" or "easeInOutExpo" requires the easing plugin
		
		
		  // Misc options
		  maxOverallWidth     : 32766     // Max width (in pixels) of combined sliders (side-to-side); set to 32766 to prevent problems with Opera
		});
	});
	
	
