jQuery(document).ready(function() {

	//Inicio del plugin FullPage.
	jQuery('#fullpage').fullpage({
		sectionsColor: ['#F7F5CB', '#FBEEC2', '#FFFEEB', '#F7F5CB'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#cabecera',
		scrollingSpeed: 1500
	});

});