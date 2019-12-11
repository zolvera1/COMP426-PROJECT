

$(document).ready(function() {
    renderComments();
    $(document).on("click","#boton", buttonPress)
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});

export function renderComments (){
    const $root = document.getElementById(`comments`)
    
    let r = axios.get('http://localhost:3000/public/review', );
    r.then(response => {
        for(let i = response.data.result.review.length-1; i>response.data.result.review.length-4; i--){
            $(`#comments`).append(`${response.data.result.review[i]}
                <hr>
            </div>
            `)
        }
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
    
}


export const buttonPress = async function(event){
    $(`#comments`).append(`<br><textarea id="rev" placeholder="Leave a review here"></textarea>`);
    $(`#boton`).replaceWith(`<button class="post" id="post">Post</button`);

    $(document).on("click",".post", async function(){
        console.log('posted');

        let post = document.getElementById(`rev`).value;
        var jwt = localStorage.getItem('jwt');
        var username = {name: localStorage.getItem('username')};
        console.log(username);

        axios.post('http://localhost:3000/public/review/review',
        {data:[post], type:"merge"}, )
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        }); 
        window.location.reload();   
    })

}
