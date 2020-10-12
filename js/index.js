function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function phoneIsValid(phone)
{
  return /^\d{12}$/.test(phone)
}

function nameValidation(){
  const name = document.getElementById("orderName").value
  if(!name){
    alert("Please insert your name")
    return false
  }
  return true
}

function emailValidation(){
  const email = document.getElementById("orderEmail").value
  if(!email){
    alert("Please insert your email")
    return false
  }
  
  if(!emailIsValid(email)){
    alert("Invalid email address")
    return false
  }

  return true
}

function phoneValidation(){
  const phone = document.getElementById("orderPhone").value
  if(!phone){
    alert("Please insert your phone number")
    return false
  }

  if(!phoneIsValid(phone)){
    alert("Invalid phone number")
    return false
  }

  return true
}

function needsValidation(){
  const needs = document.getElementById("orderNeeds").value
  if(!needs){
    alert("Please insert your needs")
    return false;
  }

  return true
}

function onSubmit(){
  if(nameValidation() && emailValidation() && phoneValidation() && needsValidation()){
    alert("Thank you for ordering with us!")
  }
}