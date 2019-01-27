{
	init();
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

}