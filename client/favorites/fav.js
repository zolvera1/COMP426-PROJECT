$(document).ready(function(){
    loadFavs();
    $(document).on("click", "#logout", function(){
        localStorage.removeItem('jwt');
        window.location.replace("../index.html")
   })
   $(document).on("click", ".remove", async function(){
        // let targetCard = $(event.target);
        // let cardId = event.target.id;
        // var username = localStorage.getItem('username');

        // var image = document.getElementById(`image-${cardId}`).src;
        // var name = document.getElementById(`location-${cardId}`).innerText;
        // var addy = document.getElementById(`addy-${cardId}`).innerHTML;
    
        var jwt = localStorage.getItem('jwt');
       //console.log("button clicked");
        let r = axios.delete('http://localhost:3000/user/favorite', 
        {headers: {
            Authorization:"Bearer "+jwt}});
       r.then(response => {
           window.location.reload();
            console.log(response.data.result);
        }).catch(error => {
           console.log(error);
        })
    })
})

let loadFavs = async function(){
    const $root = $('#rws');
    var jwt = localStorage.getItem('jwt');
   // console.log(jwt);

    let r = axios.get('http://localhost:3000/user/favorite', 
        {
            headers: {
                Authorization:"Bearer "+jwt}});
        r.then(response => {
            console.log(response.data.result.name)
            for(let i = 0; i<response.data.result.location.length;i++){
            $root.append(`<div class="column is-one-third">
            <div class="card large">
                <div class="card-image">
                    <figure class="image">
                        <img id="image-${i}" src=${response.data.result.image[i]}>
                    </figure>   
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 no-padding" id="location-${i}">${response.data.result.location[i]}</p>
                            <p class="label">Address: </p>
                            <a class="address" id="addy-${i}" href="https://www.google.com/maps/dir/?api=1&orgin=&destination=${response.data.result.location[i]}">${response.data.result.address[i]}</a>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
            console.log(response.data.result);
        }}).catch(error => {
            console.log(error);
        })
        
}

        // var jwt = localStorage.getItem('jwt');
       //console.log("button clicked");
//        let r = axios.delete('http://localhost:3000/user/favorite/', 
//        {
//            headers: {
//                Authorization:"Bearer "+jwt}});
//        r.then(response => {

//            console.log(response.data.result);
//        }).catch(error => {
//            console.log(error);
//        })