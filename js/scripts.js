function testEmailAddress( email ){
  
  var invalidChars = " /:,;\=()[]<>";
  
	if (email == ""){
		return false;
	}
  
  for(i = 0; i < invalidChars.length; i++){
    badChar = invalidChars.charAt(i);
    if( email.indexOf( badChar, 0 ) > -1 ){
      return false;
    }
  }
	
	var atPos = email.indexOf("@",1);// make sure that email contains an "@" symbol
	if (atPos == -1){
		return false;
	}
	
	if (email.indexOf("@",atPos+1) != -1){	// make sure that the email contains only one "@" symbol
		return false;
	}
	
	var periodPos = email.indexOf(".",atPos);
	if (periodPos == -1){					// and at least one "." after the "@"
		return false;
	}
	if (periodPos+3 > email.length){		// must be at least 2 characters after the "."
		return false;
	}
	return true;
}

function validateForm(formData)
{
	//get the values from the form
	var name = formData.name.value;
	var email = formData.email.value;
	var country = formData.country.value;
	var subject = formData.subject.value;
	var message = formData.message.value
	
	
	//do validation
	var errorCount = 0;
	
	//name
	if(name == "" || name == null)
	{
		errorCount++;
		document.getElementById("error1").innerHTML="You must enter your name.";
	}
	else
	{
		document.getElementById("error1").innerHTML="";
	}
	
	//country
	if(country == "" || country == null)
	{
		errorCount++;
		document.getElementById("error3").innerHTML="You must select a country.";
	}
	else
	{
		document.getElementById("error3").innerHTML="";
	}

	//subject
	if(subject == "" || subject == null)
	{
		errorCount++;
		document.getElementById("error4").innerHTML="You must include a subject.";
	}
	else
	{
		document.getElementById("error4").innerHTML="";
	}
	
	//message
	if(message == "" || message == null)
	{
		errorCount++;
		document.getElementById("error5").innerHTML="You must include a message.";
	}
	else
	{
		document.getElementById("error5").innerHTML="";
	}
	
		//validate email
	if(testEmailAddress(email) == false)
	{
		errorCount++;
		document.getElementById("error2").innerHTML="You must enter a valid email address.";
	}
	else
	{
		document.getElementById("error2").innerHTML="";
	}
	
	if(errorCount != 0)
	{
		return false;
	}
	else
	{
		return true;
	}
	
	return false;
}