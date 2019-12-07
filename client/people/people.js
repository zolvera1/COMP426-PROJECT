
const $root = $(`#root`);
//$root.append(loadUsers());

// export async function loadUsers() {
//     return `<div>hi</div>`
// }
export const loadUsers = function(){
    let r = axios.get('http://localhost:3000/account/status',
        {
           "Authorization": "Bearer" + jwt 
        })

    return ` <div id="logInForm">
        hey

        </div>`
}

// export async function handleLIPress(event){
//     // Saves name & password inputs
//     event.preventDefault();
//     var inputEmail = document.getElementById('name').value;
//     var inputPass = document.getElementById('pass').value;
   
//     let r = axios.post('http://localhost:3000/account/login',
//         {
//             "name": inputEmail,
//             "pass": inputPass,
//         });
//         r.then(response => {
//             window.location.replace('../homepage/index.html');
//             console.log(response.data);
//         }).catch(error => {
//             $(`p`).remove();
//             $(`#title`).append(`<p>Invalid email or password</p>`)
//             console.log(error);
//         });
// }

$(document).ready(function(){
    $root.append(loadUsers());
});