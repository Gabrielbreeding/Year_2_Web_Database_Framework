// constants
const MIN_MILES = 1;
const MAX_MILES = 1000;
const MIN_GALLONS = 1;
const MAX_GALLONS = 100;

function $ (id) {
    return document.getElementById(id);
} 

function calc () {
    // get inputs
    let miles = $("miles_input").value;
    let gallons = $("gallons_input").value;
    let mpg = 0;
     //validate inputs
    if (validateAll(miles, gallons)){
        mpg = parseFloat(miles)*parseFloat(gallons)

        // set mpg in on the site
        $("mpg_input").value = mpg.toString();
    }  
}

function clr () {
    $("miles_input").nodeValue = "";
    $("gallons_input").nodeValue = "";
    $("mpg_input").nodeValue = "";
};

function validateAll (miles, gallons) {
    // set local values
    let num_miles = 0;
    let num_gallons = 0;
    let valid_miles = true;
    let valid_gallons = true;
    // validate Miles ------------------------------------------------------------------
    if (validateNumerical(miles)) {
        num_miles = parseFloat(miles)
        if (num_miles < MIN_MILES || num_miles > MAX_MILES) {
            $("miles_error").textContent = "Miles is Either less than " + MIN_MILES + " or more than "+ MAX_MILES+ "!";
            valid_miles = false;
        }
        else {
           // clear miles' error span
            $("miles_error").textContent = ""; 
        }
    }
    else {
        $("miles_error").textContent = "Miles Entered is NaN!";
        valid_miles = false;
    }
    //validate Gallons -----------------------------------------------------------------
    if (validateNumerical(gallons)) {
        num_gallons = parseFloat(gallons)
        if (num_gallons < MIN_GALLONS || num_gallons > MAX_GALLONS) {
            $("gallons_error").textContent = "Gallons is Either less than "+ MIN_GALLONS + " or more than " + MAX_GALLONS+ "!";
            valid_gallons = false;
        }
        else{
           // clear gallons' error span
            $("gallons_error").textContent = ""; 
        }
    }
    else {
        $("gallons_error").textContent = "Gallons Entered is NaN!";
        valid_gallons = false;
    }
    return (valid_gallons && valid_miles) // only if both are valid, this will return true.
}

function validateNumerical (num) {
    // check if num is a number
    number = 1;
    if (isNaN(parseInt(num))) {
        return false
    }
    else {
        // is numerical
        return true;
    }
};
