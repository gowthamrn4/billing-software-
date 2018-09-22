var list;
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"https://5b72aecb414e970014304ac1.mockapi.io/api/v1/billing",
		dataType:"json",
		success:function(result)
		{
			list=result.length;
			var text="";
			for ( i = 0; i < result.length; i++) 
			{
				text +="<tr><td>"+result[i].id+"</td><td>"+result[i].fooditem
				+"</td><td>"+result[i].price+"</td></tr>";
			}
			$("#tbody").html(text);
		}
    });
});