// Cache selectors
var topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+5,
    // All list items
    menuItems = topMenu.find("a.nav-link"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
		var href = $(this).attr("href"),
			id = href.substring(href.indexOf('#')),
			item = $(id);
		if (item.length) { return item; }
    });

var nav_clicked = false;
var target;
// Bind to scroll
$(window).scroll(function(){
	// Get container scroll position
	var fromTop = $(this).scrollTop()+topMenuHeight;
	//console.log(topMenuHeight);

	// Get id of current scroll item
	var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
			return this;
	});
	// Get the id of the current element
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";
	// Set/remove active class

	menuItems
		.parent().removeClass("active")
		.end().filter("[href='#"+id+"']").parent().addClass("active");
	if (id==="") {
		$("li#first").addClass("active");
	}
	if (nav_clicked) {
		nav_clicked = false;
		$("li.nav-item.active").removeClass("active");
		target.addClass("active");
	}

});

$("li.nav-item").on("click", function(){
	$("li.nav-item.active").removeClass("active");
	$(this).addClass("active");
	nav_clicked = true;
	target = $(this);
});

//$(".navbar-brand").on("click", function(){
//	$("li.nav-item.active").removeClass("active");
//	$("li#first").addClass("active");
//});
//
//
//Canvas
var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
				['#ffcccc', '#ffffcc'],
				['#ccffcc', '#ccffff'],
				['#ccccff', '#ffccff']
            ]
        }
    }
});

