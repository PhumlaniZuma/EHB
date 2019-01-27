{
	init();
	window.onscroll = function() {scrollFunction()};
	window.onresize = function(){
		
	if(document.getElementById("mobilemenu").className.indexOf('ui-panel-open') >= 0){

		document.getElementById("mobilemenu").className = "panel position-fixed ui-panel ui-panel-position-left ui-panel-display-push ui-body-a ui-panel-fixed ui-panel-animate ui-panel-closed";

		document.getElementById("header").className = "ui-header ui-header-fixed slidedown ui-bar-inherit ui-panel-fixed-toolbar";
		window.location.reload();

	}

	};
	function scrollFunction() {
	    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	        document.getElementById("TopBtn").style.display = "block";
	    } else {
	        document.getElementById("TopBtn").style.display = "none";
	    }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	}
	function openNav() {
		    if(document.getElementById("mobilemenu").className.indexOf('ui-panel-closed') >= 0)
		    {
		    	 document.getElementById("mobilemenu").className = "panel position-fixed ui-panel ui-panel-position-left ui-panel-display-push ui-body-a ui-panel-fixed ui-panel-animate ui-panel-open";

				document.getElementById("header").className = "ui-header ui-header-fixed slidedown ui-bar-inherit ui-panel-fixed-toolbar ui-panel-animate ui-panel-page-content-position-left ui-panel-page-content-display-push ui-panel-page-content-open";

			}else if(document.getElementById("mobilemenu").className.indexOf('ui-panel-open') >= 0){

				document.getElementById("mobilemenu").className = "panel position-fixed ui-panel ui-panel-position-left ui-panel-display-push ui-body-a ui-panel-fixed ui-panel-animate ui-panel-closed";

				document.getElementById("header").className = "ui-header ui-header-fixed slidedown ui-bar-inherit ui-panel-fixed-toolbar";
			}
		  
		}
	function init(){
		
	}

	function popup(element){
	    var modal = document.getElementById("myModal");
		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var modalImg = document.getElementById("img01");
		var captionText = document.getElementById("caption");
		modal.style.display = "block";
		modalImg.src = element.src;
		captionText.innerHTML = element.alt;      
	}
	// Get the <span> element that closes the modal
	// When the user clicks on <span> (x), close the modal
	function spanclose() { 
		var modal = document.getElementById("myModal");
		modal.style.display = "none";
	}

}