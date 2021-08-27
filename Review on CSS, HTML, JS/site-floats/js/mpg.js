function $ (id) {
    return document.getElementById(id);
} 

function calc () {
    // get inputs
    
    let miles = $("miles_input").value;
    let gallons = $("gallons_input").value;
    let mpg = 0;
     //validate inputs
    if (validateNumerical(miles)) {
        $("miles_error").textContent = "*";
        if (validateNumerical(gallons)) {
            miles = parseInt(miles);
            gallons = parseInt(gallons);
            mpg = parseInt(miles)*parseInt(gallons)

            // set mpg in on the site
            $("mpg_input").value = mpg.toString();
        }
        else {
            $("gallons_error").textContent = "Gallons entered is either NaN, or less than one";
        }
    }
    else {
        $("miles_error").textContent = "Miles Entered is either NaN, or less than one";
    }
    
};


function clr () {
    $("miles_input").nodeValue = "";
    $("gallons_input").nodeValue = "";
    //$("mpg_input").nodeValue = "";
};

function validateNumerical (num) {
    // check if num is a number
    number = 1;
    if (isNaN(parseInt(num))) {
        return false
    }
    else {
        // is numerical
        number = parseInt(num);
        if (number >= 1){
            return true;
        }
    }
};
