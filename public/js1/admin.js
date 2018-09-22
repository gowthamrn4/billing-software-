var list;
$(document).ready(function(){
	$.ajax();
$("button").click(function(){
		var billing={
		    fooditem:$("#fooditem").val(),
            price:$("#price").val(),
		}
		list=list+1;
		$.post("https://5b72aecb414e970014304ac1.mockapi.io/api/v1/billing",billing);
		$("#tbody").append("<tr><td>"+list+"</td><td>"+billing.fooditem+"</td><td>"+billing.price+"</td></tr>");

	});
	});