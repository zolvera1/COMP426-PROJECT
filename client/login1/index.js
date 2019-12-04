const $root = $(`#root`);

export const renderLogInForm = function(){
    return ` <div id="logInForm">
        <form action=" "; id=form; style="background-color:white";>
            <label for="fName" class="label";>Email</label>
            <br>
            <input type="text"; id="name"; name="name"; value="";>
            <br>
            <br>
            <label for="hfirst" class="label";>Password</label>
            <br>
            <input type="text"; id="pass"; name="pass"; value="";>
            <br>
            <br> 
            <button class="logIn">Log In </button>
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
    var inputName = document.getElementById('name').value;
    var inputPass = document.getElementById('pass').value;
    
    // const result = await axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/account/login',
    //     data: {
    //         "name": inputName,
    //         "pass": inputPass,
    //     }
    // }).then(console.log(result.data));
    let success = false;
    let r = axios.post('http://localhost:3000/account/login',
        {
            "name": inputName,
            "pass": inputPass,
        });
        r.then(response => {
            success=true;
            //console.log(success);
            console.log(response.data);
        }).catch(error => {
            success=false;
            console.log(error);
        });
        console.log(success);

    $root.html("it works");
}

$(document).ready(function(){
    $root.append(renderLogInForm());
    $root.on("click",".logIn",handleLIPress);
});