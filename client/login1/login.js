
const $root = $(`#root`);

export const renderLogInForm = function(){
    return ` <div id="logInForm">
        <form action=" "; id="form"; style="background-color:white";>
            <label for="fName"; id="email"; class="label";>Email</label>
            <br>
            <input type="text"; id="name"; name="name"; value="";>
            <br>
            <br>
            <label for="hfirst" class="label1";>Password</label>
            <br>
            <input type="password"; id="pass"; name="pass"; value="";>
            <br>
            <br> 
            <div id="boton">
            <button class="logIn">Log In </button>
            </div>
            <br>
            <br>
            <div id="signUpLink">
                <a href="../signup1/index.html">Sign Up</a>
            </div>
            </form>
        </div>`
}


export async function handleLIPress(event){
    // Saves name & password inputs
    event.preventDefault();
    var inputEmail = document.getElementById('name').value;
    var inputPass = document.getElementById('pass').value;
   
    let r = axios.post('http://localhost:3000/account/login',
        {
            "name": inputEmail,
            "pass": inputPass,
        });
        r.then(response => {
            window.location.replace('../homepage/index.html');
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    $(`p`).remove();
    $(`#title`).append(`<p>Invalid email or password</p>`)
    
}

$(document).ready(function(){
    $root.append(renderLogInForm());
    $root.on("click",".logIn",handleLIPress);
});