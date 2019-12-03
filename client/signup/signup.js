$(document).ready(function(){
    //const $root = $('#root');
    //comparePasswords();
    $('#froot').on("click",`#signUp`,comparePasswords)

})

function comparePasswords(event) {
    console.log("hello, world");
    let password1 = document.getElementById('password1');
    $(document).html("Hi");
  //  console.log(password1);
  // $(`#password1`).html("Hello, World");


}

//function isUsed 
  //check if the email has already been used to sign up 