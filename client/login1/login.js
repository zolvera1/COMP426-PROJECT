
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
            <button class="logIn">LOG IN </button>
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
            localStorage.setItem('jwt', response.data.jwt);
            localStorage.setItem('username',response.data.name);
            var username = localStorage.getItem('username');
            // console.log("a " + jwt);
            // console.log(name) //this works

            var jwt = localStorage.getItem('jwt');

            axios.post('http://localhost:3000/user/favorite',
            {data:{location:[],address:[],image:[]}}, {headers: {Authorization:`Bearer ${jwt}`}}).then(response => {
            console.log(response.data);
            }).catch(error => {
                console.log(error);
            }); 


            axios.post('http://localhost:3000/private/blogs',
            {data:{blog:[],name:[]}}, {headers: {Authorization:`Bearer ${jwt}`}}).then(response => {
            console.log(response.data);
            }).catch(error => {
                console.log(error);
            }); 


            window.location.replace('../homepage/index.html');
            console.log(response.data);
        }).catch(error => {
            $(`p`).remove();
            $(`#title`).append(`<p>Invalid email or password</p>`)
            console.log(error);
        });
}

$(document).ready(function(){
    $root.append(renderLogInForm());
    $root.on("click",".logIn",handleLIPress);
});