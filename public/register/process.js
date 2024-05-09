function login() {
    var username = document.getElementById("fullname").Value;
    var username = document.getElementById("username").Value;
    var username = document.getElementById("phone").Value;
    var username = document.getElementById("email").Value;
    var username = document.getElementById("cpass").Value;
    var password = document.getElementById("password").value;

if (password && username != "") {
    console.log(username)
    console.log(password)
    swal.fire('Done','Registration Successful, please check your to verify.', 'success')
                .then(()=>{window.location='../email_verify.php?email=$email'})
               
}else{
    swal.fire('error','OTP could not be sent. Mailer Error','error')
             .then(
              function(res){
                  if(true){
                      window.location='../register';
                  }
              }
             )
}
}