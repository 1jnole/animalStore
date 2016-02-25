/**
* showErrors()
* This method converts the given array with errors to a string ready to print to the user.
* @params errors: array with all errors to be shown.
* @return: none
*/
function showErrors(errors)
{
	var errorString = "";
	
	$.each(errors, function (index, error){
		errorString+=error+"\n";
	});
	/*
	for (var i = 0; i < errors.length; i++)
	{
		error+=errors[i]+"\n";
	}
	*/
	alert(errorString);
}

function validateNumericField(id)
{
	if($("#"+id).val()=="" || isNaN($("#"+id).val())) alert("This field must be a number");
}


//txtDate yyyy-mm-dd
function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;

    var rxDatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null) 
        return false;

    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[3];
    dtDay= dtArray[5];
    dtYear = dtArray[1];        

    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}
