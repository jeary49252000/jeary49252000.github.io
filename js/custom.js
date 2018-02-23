
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

//selectedHTML caution!!! must synchronize with index.html
var selectedHTML =  `
			  <div class="col-md-2"><font>2013 Fall</font></div>
			  <div class="col-md-10"><font class="bold">C-- Compiler (lex, YACC, C)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						 A C-- compiler is implemented with following features:
						 <ul>
							 <li>
								 Implicit type conversions, Assignment statements, Arithmetic expressions, Control statements(while, if-then-else, for), Procedure calls, Read and Write I/O calls, Short-circuit boolean expressions, Variable initializations, Multiple dimensional arrays.
							 </li>
						 </ul>
					  </li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2014 Spring</font></div>
			  <div class="col-md-10"><font class="bold">Virtual Machine Experiments (C/C++, Qemu, KVM)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  Implementation of <i>Shadow Stack</i> on qemu-0.13 to improve indirect brach handling routines.
					  </li>
					  <li>
						  Analyzation of mulitple virtual machines (Qemu) behaviors on KVM.
					  </li>
					  <ul>
						  <li>
							  <a href="http://www.bitmover.com/lmbench/">LMbench</a> is applied to analyze the memory interferences between VMs.
						  </li>
					  </ul>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2014 Fall</font></div>
			  <div class="col-md-10"><font class="bold">Enhanced DRAM Scheduling (C/C++)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  Experimental Platform: 
							<ul>
								<li>
									<a href="https://github.com/pranith/usimm">Simulator: USIMM: the Utah SImulated Memory Module</a> and its modified <a href="http://parsec.cs.princeton.edu/">PARSEC</a> traces
								</li>
							</ul>
					  </li>
					  <li>
						  An enhanced DRAM scheduling policy is proposed
						  <ul>
							  <li>
								  Row Hit Aware: Serve row hit request first and apply close page when no remaining row hit requests.
							  </li>
							  <li>
								  No Idle Read/Write mode: Issue write/read at idle time during read/write mode due to dependencies.
							  </li>
							  <li>
								  Thread Aware: Serve compute-intensive requests first to make CPU fully utilized and reduce memory interferences.
							  </li>
						  </ul>
					  </li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2015 Spring</font></div>
			  <div class="col-md-10"><font class="bold">Application Scheduling on Heterogeneous System (OpenCL, bash)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  Experimental Platform: 
						   <ul>
							   <li>
								   Hardware: AMD Kaveri APU (A10-7850K), Heterogeneous Unified Memory Architecture (hUMA)
							   </li>
							   <li>
								   Operating System: Ubuntu 14.04 LTS | Driver: AMD Catalyst Driver
							   </li>
						   </ul>
					  </li>
					  <li>
						  Analyzation of different behaviors on CPU and GPU of benchmarks from <a href="http://impact.crhc.illinois.edu/parboil/parboil.aspx:">parboil</a> and <a href="http://www.cs.virginia.edu/~skadron/wiki/rodinia/index.php/Rodinia:Accelerating_Compute-Intensive_Applications_with_Accelerators">rodinia suits</a>
					  </li>
					  <li>
						  A two-stage scheuling method is proposed to reduce memory interferences and balance execution time of CPU and GPU
					  </li>
				  </ul>
			  </div>
`;

var othersHTML = `
			  <div class="col-md-2"><font>2012 Fall</font></div>
			  <div class="col-md-10"><font class="bold">Ads Click Rate Prediction (C/C++, Matlab)</font></div>
			  <div class="col-12">
				  <ul>
						<li>
						  	For the not completed data of 71 features, imputing methods (KNN, SVD) are applied. 
						</li>
					  	<li>
							To predict click or not click, the binary classification learning models (SDG, rankboost and SVM) are applied and analyzed by AUC of ROC curve.
						</li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2013 Spring</font></div>
			  <div class="col-md-10"><font class="bold">Mini RPG (Java, Git)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  A horizontal game framework which can show talking dialogs, cast skill animations and control character motions with falling gravity and background changing
					  </li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2013 Spring</font></div>
			  <div class="col-md-10"><font class="bold">Stereoscopic 3D Image by Single Image (C/C++)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  A stereoscopic 3D image application from a single image by analyzing the vanishing line, detecting the semantic regions and computing the depth of the image
					  </li>
				  </ul>
			  </div>
			  <div class="col-md-2"><font>2013 Fall</font></div>
			  <div class="col-md-10"><font class="bold">Energy Disaggregation with REDD dataset (Hadoop, Java)</font></div>
			  <div class="col-12">
				  <ul>
					  <li>
						  Energy disaggregation and appliance classification with Logistic Regression, SVM and HMM on Hadoop cluster
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
									Hightlight sentences
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
					  </li>
				  </ul>
			  </div>
`;


var flip = false;

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
