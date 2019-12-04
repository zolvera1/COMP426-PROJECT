const $root = $(`#root`);

export const renderSignUpForm = function(){
    return ` <div id="signUpForm">
        <form action=" "; id=form; style="background-color:white";>
            <label for="fName";>First Name</label>
            <br>
            <input type="text"; id="name"; name="name"; value="";>
            <br>
            <br>
            <label for="lName";>Last Name</label>
            <br>
            <input type="text"; id="lname"; name="lname"; value="";>
            <br>
            <br>
            <label for="email";>Email</label>
            <br>
            <input type="text"; id="email"; name="email"; value="";>
            <br>
            <br>
            <label for="hfirst";>Password</label>
            <br>
            <input type="text"; id="pass"; name="pass"; value="";>
            <br>
            <br> 
            <button class="signUp">Sign Up </button>
            </form>
        </div>`
}

export async function handleSUPress(event){
    // Saves name & password inputs
    var inputEmail = document.getElementById('email').value;
    var inputPass = document.getElementById('pass').value;
    var inputName = document.getElementById('name').value;
    var inputLast = document.getElementById('lname').value;

   
    let r = axios.post('http://localhost:3000/account/create',
        {
            "name": inputEmail,
            "pass": inputPass,
            "data": {
                "name": inputName,
                "lname": inputLast,
            }
        });
        r.then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    
    // const result = await axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/account/create',
    //     data: {
    //         "name": inputName,
    //         "pass": inputPass,
    //     }
    // })
    $root.html("hi");
}

$(document).ready(function(){
    $root.append(renderSignUpForm());
    $root.on("click",".signUp",handleSUPress);
});