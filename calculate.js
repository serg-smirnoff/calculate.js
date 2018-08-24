function calc(s){
	
	costThat = s.value;
	costThis = $("#price").text();

	var num1 = Number(costThat);
	var num2 = Number(costThis);
	
	if ($(s).attr("checked")){
		ret = num1 + num2;
		if ($("#priceText").val().indexOf(s.name+" - "+s.value,0) == -1)
			$("#priceText").val($("#priceText").val()+"\r\n"+s.name+" - "+s.value);	
	} else {
		ret = num2 - num1;
		a = $("#priceText").val();
		if (a.indexOf(s.name+" - "+s.value,0) != -1){
			a.replace(s.name+" - "+s.value,"");
			$("#priceText").val(a);
		}
	}

	$("#price").text(ret);
	$("#priceInput").val(ret);

}