document.body.style.zoom="250%"

$("ul").on("click","li",function(event){
	// alert("CLICKED")
	$(this).toggleClass("itemDone");
	event.stopPropagation();
});	

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});	
});	

$("input[type='text']").keypress(function(event){
		if(event.which===13){
		var x = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+x+"</li>");
		$(this).val("");
	}	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(350);
});
