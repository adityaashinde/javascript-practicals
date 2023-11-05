function validate() {
  var firstName = document.myForm.fname.value;
  var lastName = document.myForm.lname.value;
  var userpassword = document.myForm.usrpassword.value;
  var usrmobile = document.myForm.usrmobile.value;

  console.log(firstName);
  console.log(lastName);
  console.log(userpassword);
  console.log(usrmobile);

  if (firstName == null || firstName == "" || firstName.length < 3) {
    alert("First Name can't be blank or Less than 3 Charecter");
    document.myForm.fname.focus();
    return false;
  }
  if (lastName == null || lastName == "") {
    alert("Last Name can't be blank");
    document.myForm.lname.focus();
    return false;
  }
  if (userpassword.length < 6) {
    alert("Password must be at least 6 characters long.");
    document.myForm.usrpassword.focus();
    return false;
  }
  if (isNaN(usrmobile)) {
    alert("Enter Numeric value only");
    document.myForm.usrmobile.focus();
    return false;
  }
  return true;
}
