
var nav_clicked = false;
var target;
// Bind to scroll
$(window).scroll(function(){
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


var othersHTML = `
			  <div class="col-md-2"><font>2012 Fall</font></div>
			  <div class="col-md-10"><font class="bold">Ads Click Rate Prediction on Not Completed Data (C/C++, Matlab)</font></div>
			  <div class="col-12">
				  <ul>
						<li>
						  	For the not completed data of 71 features, imputing methods (KNN, SVD) are applied. 
						</li>
					  	<li>
							To predict click/not click, binary classification learning models (SDG, rankboost and SVM) are applied and analyzed by AUC of ROC curve.
						</li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2013 Spring</font></div>
			  <div class="col-md-10"><font class="bold">Mini RPG (Java, Git)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  A single thread horizontal game framework with following features:
							<ul>
								<li>
									Story with talking dialogs and different backgrounds
								</li>
								<li>
									Skill/Monster animations and character motions with gravity effects
								</li>
								<li>
									Loading story/map/mission from json format files without re-compilation	
								</li>
							</ul>
					  </li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2013 Spring</font></div>
			  <div class="col-md-10"><font class="bold">Stereoscopic 3D Image from Single Image (C/C++)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  A stereoscopic 3D image application from a single image by 3 steps:
							<ul>
								<li>
									Do color segmentation and detect semantic regions (sky, mountain, land, other) by machine learning model (SVM).
								</li>
								<li>
									Detect vanishing lines by Sobel edge detection and variation of edge slopes.
								</li>
								<li>
									Generate depth map of the image from the vanishing lines and combine all above data to a stereoscopic 3D image.
								</li>
							</ul>
					  </li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2013 Fall</font></div>
			  <div class="col-md-10"><font class="bold">Energy Disaggregation with REDD dataset (Hadoop, Java)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  Experimental Platform: 
						<ul>
					  <li>
						 A remote Hadoop cluster with 3 computers (2 are virtual machine): Linux Ubuntu 12.04, 20GB disk, 1G/4G/8G RAM, 1/2/4 cores
					  </li>
						</ul>
						</li>
						<li>
							Energy disaggregation and appliance classification with Logistic Regression, SVM and HMM on the Hadoop cluster
						<ul>
						<li>
							To classify multiple appliances, one-vs-all thought is applied for binary classification model (SVM).
						</li>
						</ul>
						</li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2013 Fall</font></div>
			  <div class="col-md-10"><font class="bold"><a href="https://github.com/haku/Onosendai">Onosendai</a> twitter android app analysis (Android, Java)</font></div>
			  <div class="col-12">
					<ul>
						<li>
							Whole project class diagrams are analyzed and drew.
						</li>
						<li>
							Based on the class diagrams, color scheme changing and sorting posts functions are implemented into this app.	
						</li>
					</ul>
			  </div>
			  <div class="col-md-2"><font>2014 Spring</font></div>
			  <div class="col-md-10"><font class="bold">Grapage (Javascript, HTML/CSS)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  A chrome extension to help people take notes on web pages with following features:
							<ul>
								<li>
									Highlight sentences
								</li>
								<li>
									Edit/Delete color or font-style of words and other elements
								</li>
								<li>
									Save and Print	
								</li>
							</ul>
					  </li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2014 Fall</font></div>
			  <div class="col-md-10"><font class="bold">Real Time Color Harmonization (C/C++, Qt)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  A color harmonization application that making a picture transform its own colors like a digital chameleon in real time
						<ul>
							<li>
								Surrounding images are captured from main camera of a laptop.
							</li>
							<li>
								Harmonic color wheels are computed from down-scaled surrounding images.
							</li> 
							<li>
								Depending on the harmonic color wheel, picture colors are shifted to fit surrounding environments.
							</li>
						</ul>
					  </li>
				  </ul>
			  </div>
`;


var flip = false;
var selectedHTML = $("#pHTML").html(); 

function flipIt() {
	if (flip === false) {
		console.log("HAHA");
		flip = true;
		$("#pHTML").html(othersHTML);
		$("#pH2").html('OTHER PROJECTS <button id="pButton" type="button" class="btn btn-outline-primary btn-sm" onclick="flipIt()">selected</button>');
	} else {
		console.log("HAHA");
		flip = false;	
		$("#pHTML").html(selectedHTML);
		$("#pH2").html('SELECTED PROJECTS <button id="pButton" type="button" class="btn btn-outline-primary btn-sm" onclick="flipIt()">others</button>');
	}
}
