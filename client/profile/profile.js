

export const buttonPress = async function(event){ 
    var name = localStorage.getItem('username');
    var jwt = localStorage.getItem('jwt');  
    console.log(name);
   // axios.delete('http://localhost:3000/user/favorite/'+name,{data:[]}, {headers: {Authorization:`Bearer ${jwt}`}});
    axios.delete('http://localhost:3000/account/'+name);
    window.location.replace(`../index.html`)
}


$(function() {
    const $root = $(`#subtitle`)
    $root.append(`<button id="delete">Delete my account</button>`)  
    $root.on("click", "#delete", buttonPress)
    $(document).on("click", "#logout", function(){
        localStorage.removeItem('jwt');
        window.location.replace("../index.html")
   })
});