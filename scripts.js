
function closeGroupExercise() {
	var x = document.getElementsByClassName("oneGroupGrid");
	console.log(x)
	x[0].style.display = "none";
};

function showGroupExercise() {
	var x = document.getElementsByClassName("oneGroupGrid");
	x[0].style.display = "block";
};

function closeExercise() {
	var x = document.getElementsByClassName("oneExercise");
	x[0].style.display = "none";
};

function showExercise() {
	var x = document.getElementsByClassName("oneExercise");
	x[0].style.display = "block";
};

function toggle(button, content) {
	return function(event) {
		if(content.css('display') === "none") {
			content.css({'display': 'block'});
			button.removeClass("rotatedButton");
		} else {
			content.css({'display': 'none'});
			button.addClass("rotatedButton");
		}
	}
}


function goToByScroll(id) {
	id = id.replace('link', '')
	if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
		$("body").animate({
			scrollTop: $(id).offset().top}, // THIS DOES NOT WORK ON MOBILE
		);
	} else{
		$('html,body').animate({
			scrollTop: $(id).offset().top},
		);
	}
}

function toggleFeatureBox(button, oneFeature) {
	return function(event) {
		theClassList = oneFeature[0].classList

		if (theClassList.contains("FeExpand")) {
			theClassList.remove("FeExpand");
			theClassList.add("FeCollapsed");
			button[0].className = "";
		}
		else {
			theClassList.remove("FeCollapsed");
			theClassList.add("FeExpand");
			button[0].className = "flipButton";
		}
	}
}


function hamburgerMenu() {
	var x = document.getElementById("myTopNav");
	if (x.className === "navMenu") {
		x.className += " responsive";
	}
	else {
		x.className = "navMenu";
	}
};


// Buttons switch for first grey box
$('.tabList').each(function(index, element) {
	let $this 	= $(element);
	let $tab 	= $this.find('li.active');
	let $link 	= $tab.find('a');
	let $panel	= $($link.attr('href'));
	$link.css({'opacity': '1'})

	$this.on('click', '.tabControl', function(e) {
		e.preventDefault();
		let $newLink 	= $(this);
		let id 			= this.hash;	

		if (id && !$newLink.is('.active')) {
			$panel.removeClass('active');
			$tab.removeClass('active');
			$panel	= $(id).addClass('active');
			$tab 	= $newLink.parent().addClass('active');
			$link.css({'opacity': '0.5'})
			$newLink.css({'opacity': '1'})
			$link = $newLink;
		}
	});
});


//Header and footer loading
$(function() {
	$('#bottom').load('bottom.html'); 
	$('#top').load('top.html'); 
});









