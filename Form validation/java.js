const username=document.myform.username;
const email=document.myform.email;
const cnfirm=document.myform.cnfirm;
const repass=document.myform.repass;
const userError=document.querySelector("#userError")
const emailError=document.querySelector("#emailError")
const passError=document.querySelector("#passError")
const repassError=document.querySelector("#repassError")

function checkForm(){
    if(username.value == "" ||
    email.value == "" ||
    cnfirm.value == "" ||
    repass.value == "" ) {
        alert("please fill the field")
        return false;
    }
    else if(username.value.length <= 5 ||
            username.value.length >= 15){
                userError.innerHTML =
                "username should contain 5 to 15 charaters only"
                return false; 
    } 

    else if(!email.value.endsWith(".com")){
            userError.innerHTML = ""
            emailError.innerHTML =
            "Email should contain .com at last"
            return false; 
}
      else if(cnfirm.value !== repass.value){
        userError.innerHTML = ""
        emailError.innerHTML = ""
        passError.innerHTML="enter the same password"
        repassError.innerHTML="enter the same password"
        return false;
      }

}