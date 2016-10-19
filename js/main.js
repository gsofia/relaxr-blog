$(document).ready(function() {
	$(".p2, #p3").hide();
});

/*On clicking of the 'Sign up' button:
- Display an alert that says "We are not currently taking sign ups"
- Then change the text of the button to say "No Sign Ups!” */

$("#footerButton").on("click", function(){
	alert("We are not currently taking sign ups.");
	$("#signUp").html("No Sign Ups!");
});

/* If a user clicks "Read More":
- Have an extra paragraph show using $.slideDown() or $.show() 
and change the link to say “Read Less”

If a user clicks "Read Less":
- Have an extra paragraph hide using 
$.slideUp() or $.hide() and change the link to say “Read More”*/

var moreOpen1 = false;
var moreOpen2 = false;

$("#button1").on("click", function(){
	if (moreOpen1 === false) { 
		moreOpen1 = true;
		$(".p1").slideDown();
		$("#button1").text("Read Less");
	} else {
		moreOpen1 = false;
		$(".p1").slideUp(1000);
		$("#button1").text("Read More");
	}
});

$("#button2").on("click", function(){
	if (moreOpen2 === false) { 
		moreOpen2 = true;
		$(".p2").slideDown();
		$("#button2").text("Read Less");
	} else {
		moreOpen2 = false;
		$(".p2").slideUp(1000);
		$("#button2").text("Read More");
	}
});

/* If a user clicks “Learn More” in the sidebar:
- Have an extra paragraph show using $.slideDown() or $.show() 
and change the link to say “Learn Less”

If a user clicks "Learn Less” in the sidebar:
- Have an extra paragraph hide using $.slideUp() or $.hide() 
and change the link to say “Learn More” */

var learnOpen = false;

$("#learnMore").on("click", function(){
	if (learnOpen === false) {
		learnOpen = true;
		$("#p3").slideDown();
		$("#learnMore").text("Learn Less");
	} else {
		learnOpen = false;
		$("#p3").slideUp(1000);
		$("#learnMore").text("Learn More");
	}
});



/*
Need to know if the value of the button .readMore says Read More 
or Read Less. 

If the text of the button .readMore says "Read More" then you should be able 
click on the button, and reveal more text, and have the button 
copy change to "Read Less"

However, if the button text for .readMore says "Read Less" then you should
be able to click on the button and hide p2, and change it to "Read More"

function checkStatus() {
	if ($(".readMore").text() === "Read More"){
		$(".readMore").addClass("more");
	} else {
		$(".readMore").addClass("less");
	} 		
} 

with CSS
.more {
	color: "red";
}

Another attempt
$(".readStatus").on("click", function(){
	if ($(".readStatus").text("Read More")) {
		$(".p2").show();
		$(".readStatus").text("Read Less");
	} else {
		$(".readStatus").addClass("extraP")
		$(".readStatus").removeClass("readStatus");
	}
	
});

Another attempt

$(".readStatus").on("click", function(){
	$(".readStatus").text() === "Read More";
	$(".p2").show();
	$(".readStatus").text("Read Less");
	$(".")
});

$(".readStatus").on("click", function(){
	$(".readStatus").text() === "Read Less";
	$(".p2").hide();
});
*/

