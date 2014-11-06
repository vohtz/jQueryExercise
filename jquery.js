//Toggle class 'rotate' to clicked element
$("#rotate").children(".square").on('click', function(){
	$(this).toggleClass('rotate');
});

//click on fade div and 
$("#fade").click(function(){
  $("#square1").fadeToggle();
  $("#square2").fadeToggle("slow");
  $("#square3").fadeToggle(1000);
  $("#square4").fadeToggle(1500);
});

// Collapse and expand list 
$( "#listHeader" ).click(function() {
  $( "#list" ).slideToggle( "slow", function(){
    // Animation complete
  });
});

//change main imange on hover
$(".img-container img").hover(function(){
   var src = $(this).attr("src");
   $("#mainImage").attr("src",src);
});

//chaining changes class bg-color and text
$("#chaining").click(function(){
	//this it the chain
	$("#chaining").children(".yellow").css("background-color","red").text("I am now Red!");
});

//callback function
$("#callback").children(".red").click(function(){
	$("#callback").children(".red").hide("slow",function(){
		$("#callback").children(".blue").hide("slow",function(){
			$("#callback").children(".green").hide("slow",function(){
				$("#callback").children(".yellow").hide("slow",function(){
					$("#callback").children("h2").text("Exercise 5 - Callback success!");
				});
			});
		});
	});
});