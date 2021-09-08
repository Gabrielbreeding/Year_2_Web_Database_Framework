/*
Developer: Gabriel Breeding
Instructor: Jeff Scott
Project:   Unit 0 Test
Start Date: Septemer 3, 2021
End Date: September 7, 2021
*/

// Program Functions
//console.log('"Begin Script!" o7');
const $ = id => document.getElementById(id);

// clr (element) points to an anonymous function that clears the element given, and it's next sibling in the HTML.
const clr = (element) => {element.value=""; element.nextElementSibling.innerHTML="";};

// validateName (element) will return a boolean expression indicating whether or not the element's value (minus spaces) exists.
// (if the value is more than "" it will return true because "a" !== "")
const validateName = (element) => {
    if (element.value==="") {
        element.nextElementSibling.innerHTML="Please enter a valid name"
        return false;
    }
    else {
        element.nextElementSibling.innerHTML=""
        return true;
    }
};

const validateEmail = (element) => {
    const emailFormat = /\S+@\S+\.\S+/;
    if  (emailFormat.test(element.value)){
        element.nextElementSibling.innerHTML="";
        return true;
    }
    else {
        element.nextElementSibling.innerHTML="Enter a valid email.";
        return false
    }
}

const validatePhone = (element) => {
    const phoneFormat = /^\d{3}-\d{3}-\d{4}$/
    if (phoneFormat.test(element.value)) {
        element.nextElementSibling.innerHTML="";
        return true;
    }
    else {
        element.nextElementSibling.innerHTML="Phone number must be formatted: nnn-nnn-nnnn";
        return false;
    }
}

const validateZip = (element) => {
    const zipFormatShort = /^\d{5}/
    const zipFormatLong = /^\d{5}-\d{4}/

    if (zipFormatShort.test(element.value) || zipFormatLong.test(element.value)) {
        element.nextElementSibling.innerHTML="";
        return true;
    }
    else {
        element.nextElementSibling.innerHTML="Enter a valid zip code."
        return false;
    }
}

const validateBday = (element) => {
    const bdayFormat=/^^((0[13578]|10|12)\/(0[123456789]|(10|11|12|13|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31))|(0[469]|11)\/(0[123456789]|(10|11|12|13|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30))|02\/(0[123456789]|(10|11|12|13|15|16|17|18|19|20|21|22|23|24|25|26|27|28)))\/\d{4}$/
    if (bdayFormat.test(element.value)) {
        element.nextElementSibling.innerHTML="";
        return true;
    }
    else {
        element.nextElementSibling.innerHTML="Enter a valid birth date."
        return false;
    }
}
const clearAll = () => function () {
    // anonymous function linked to clearAll will clear all textbox and error-messages on the screen.
    clr($("f-name-text"));
    clr($("l-name-text"));
    clr($("email-text"));
    clr($("phone-text"));
    clr($("zip-text"));
    clr($("bday-text"));
    console.log('"All Clear!" o7');
}

const validateAll = () => {
    // anonymous function linked to validateAll will run through all of the validation functions for the form 
    // and return a boolean expression indicating if everything is a valid entry.
    //console.log('"validating" o7')
    return (validateName($("f-name-text")) && validateName($("l-name-text")) && validateEmail($("email-text")) &&
            validatePhone($("phone-text")) && validateZip($("zip-text")) && validateBday($("bday-text")));
    
}

const save = () => function () {
    if (validateAll()) {
        window.alert("Account Information Saved!");
        setTimeout(clearAll(), 3000);
        //console.log('Done')
    }
}

window.onload = function () {
    // gives event listeners connecting the clear and save buttons to their respective functions via click.
    $("button-clr").addEventListener("click", clearAll());
    $("button-save").addEventListener("click", save());
    //console.log('"Window Loaded!" o7')
    
}
//console.log('"End Script!" o7')






