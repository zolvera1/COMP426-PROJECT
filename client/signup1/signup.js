
const $root = $(`#root`);

export const renderSignUpForm = function(){
    return ` <div id="signUpForm">
        <form action=" "; id="form"; style="background-color:white";>
            <label for="fName" class="label";>First Name</label>
            <br>
            <input type="text"; id="name"; class="inputL"; name="name"; value="";>
            <br>
            <br>
            <label for="lName" class="label";>Last Name</label>
            <br>
            <input type="text"; id="lname"; class="inputL" name="lname"; value="";>
            <br>
            <br>
            <label for="email" class="label";>Email</label>
            <br>
            <input type="text"; class="inputL"; id="email"; name="email"; value="";>
            <br>
            <br>
            <label for="hfirst" class="label";>Password</label>
            <br>
            <input type="password"; class="inputL"; id="pass"; name="pass"; value="";>
            <br>
            <br>
            <div id="boton"> 
                <button class="signUp">Sign Up </button>
            </div>
            </form>
        </div>`
}

export async function handleSUPress(event){
    // Saves name & password inputs
    event.preventDefault();
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
            window.location.replace('../homepage/index.html');
            console.log(response.data);
            //window.location.replace('../homepage/index.html');
        }).catch(error => { 
            console.log(error);
        });

        //Checks if one of the fields was left empty
        if (inputName == "" || inputLast == "" || inputEmail == "" || inputPass =="") {
            $(`#form`).replaceWith(`
            <form action=" "; id="form"; style="background-color:white";>
            <p>Please make sure to fill out all fields</p>
            <label for="fName" class="label";>First Name</label>
            <br>
            <input type="text"; id="name"; class="inputL"; name="name"; value=${inputName}>
            <br>
            <br>
            <label for="lName" class="label";>Last Name</label>
            <br>
            <input type="text"; id="lname"; class="inputL" name="lname"; value=${inputLast}>
            <br>
            <br>
            <label for="email" class="label";>Email</label>
            <br>
            <input type="text"; class="inputL"; id="email"; name="email"; value=${inputEmail}>
            <br>
            <br>
            <label for="hfirst" class="label";>Password</label>
            <br>
            <input type="password"; class="inputL"; id="pass"; name="pass"; value=${inputPass}>
            <br>
            <br>
            <div id="boton"> 
                <button class="signUp">Sign Up </button>
            </div>
            </form>
        </div>`
        );  
    } else {
        $(`p`).replaceWith("<p id=error>This email is already in use</p>");
    }     
}
    
$(document).ready(function(){
    $root.append(renderSignUpForm);
    $root.on("click",".signUp",handleSUPress);
});

