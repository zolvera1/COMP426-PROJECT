export const renderCard = function(place) {
    return ` 
    <div class="column is-one-third">
                <div class="card large">
                    <div class="card-image">
                        <figure class="image">
                            <img class="images" id="pic${place.id}" src="${place.img}">
                        </figure>   
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 no-padding" id="name${place.id}">${place.location}</p>
                                <p class="label">Address: </p>
                                <p class="address" id="addy${place.id}">${place.address}</p>
                                <br>
                                <button class="favB"; id="${place.id}">Favorite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           `
};

export const buttonPress = async function(event){
    let targetCard = $(event.target);
    let cardId = event.target.id;
    
    var location = document.getElementById(`name${cardId}`).innerHTML;
    var address = document.getElementById(`addy${cardId}`).innerHTML;
    var picture = document.getElementById(`pic${cardId}`).src;
    //var id = document.getElementById(`${cardId}`);
    var jwt = localStorage.getItem('jwt');
    //console.log(localStorage.getItem('jwt'));

    
    axios.post('http://localhost:3000/user/favorite/location',
        {data:[location], type:"merge"}, {headers: {Authorization:`Bearer ${jwt}`}},{type: 'merge'}).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        }); 
        
    axios.post('http://localhost:3000/user/favorite/address',
        {data:[address], type:"merge"}, {headers: {Authorization:`Bearer ${jwt}`}},{type: 'merge'}).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

    axios.post('http://localhost:3000/user/favorite/image',
        {data:[picture], type:"merge"}, {headers: {Authorization:`Bearer ${jwt}`}},{type: 'merge'}).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

    
}



export const loadCards = function(place) {
    const $root = $('#rws');

    place.forEach(place => {
        let card = renderCard(place);
        $(`#rws`).append(card);
    })
    $(document).ready(function () { 
        $(`#rws`).on("click", ".favB", buttonPress)
    });
 
};

$(function() {
    loadCards(placesData);
    $(document).on("click", "#logout", function(){
        localStorage.removeItem('jwt');
        window.location.replace("../index.html")
   })
});