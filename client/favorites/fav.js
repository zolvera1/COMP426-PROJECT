$(document).ready(function(){
    loadFavs();
    $(document).on("click", "#logout", function(){
        localStorage.removeItem('jwt');
        window.location.replace("../index.html")
   })
   // $(document).on("click",".remB", deleteButton)
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
            for(let i = 0; i<response.data.result.location.length;i++){
            $root.append(`<div class="column is-one-third">
            <div class="card large">
                <div class="card-image">
                    <figure class="image">
                        <img src=${response.data.result.image[i]}>
                    </figure>   
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 no-padding">${response.data.result.location[i]}</p>
                            <p class="label">Address: </p>
                            <p class="address">${response.data.result.address[i]}</p>
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

// export const deleteButton = async function(event){
//     console.log("button pressed");

//     var jwt = localStorage.getItem('jwt');
//     axios.delete('http://localhost:3000/user/favorite',
//         {data:{}}, {headers: {Authorization:`Bearer ${jwt}`}})
//         .then(response => {
//             console.log(response.data);
//         }).catch(error => {
//             console.log(error);
//         });

// }


//$root.append(`${response.data.result.location} `)
//$root.append(`${response.data.result.address}`)


// <button class="remB";>Remove from Favorites</button>
