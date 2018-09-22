    var a ="";
	var b ="";
	var c ="";
	var total="";
	var ftotal="";
	var list;
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"https://5b72aecb414e970014304ac1.mockapi.io/api/v1/billing",
		dataType:"json",
		success:function(result)
		{
			list=result.length
			var text="";
			for (var i=0; i<result.length; i++) 
			{
				text +="<option>"+result[i].fooditem+"</option>"
			}
			$("#select").html(text)
		}
	});
	

$("#submit").click(function(){
	$.ajax({
        type:"GET",
		url:"https://5b72aecb414e970014304ac1.mockapi.io/api/v1/billing",
		dataType:"json",
	    success:function(result)
      {
		
		 a = $("#select").val();
		 b = $("#qty").val();
		 for(var i = 0;i < result.length;i++)
		 {
			 if(result[i].fooditem==a)
			 {
				 c=result[i].price;
			 }
		 }
		 total=b*c;
		 list+=1;
		 $("#tbody").append("<tr><td>"+list+"</td><td>"+a+
		"</td><td>"+b+"</td><td>"+total+"</td></tr>");	
	ftotal=eval(ftotal+total)
	$("#total").html(ftotal)
}
	})
})
})