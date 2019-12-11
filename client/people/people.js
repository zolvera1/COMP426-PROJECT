let $root = $(`#root`);


export const loadFeed = function(){
    $root.append(`
        <br> <div id="bdiv">
        <button class="boton" id="create"> New blog </button><br></div>
        <hr>
        <div id="blogs">
        </div>`)
    var jwt = localStorage.getItem('jwt');
    var username = localStorage.getItem('username');
    
    let r = axios.get('http://localhost:3000/private/blogs', 
    {headers: {Authorization:"Bearer "+jwt}});
    r.then(response => {
        for(let i = response.data.result.blog.length-1; i>-1; i--){
            $root.append(`<div id="author">${response.data.result.name[i].name}</div>
            <div id="blogs">
                ${response.data.result.blog[i]}
                <hr>
            </div>
            `)
        }
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
}
export function createPost(event){
   
    // Adding textbox of tweet
    $(`#bdiv`).append(`<textarea id="blog" placeholder="begin typing here"></textarea>`);
    $(`#create`).replaceWith(`<button class="boton" id="post">Post</button`);
    
    //Posting tweet & updating server
    $root.on("click","#post", async function(){
        let post = document.getElementById(`blog`).value;
        var jwt = localStorage.getItem('jwt');
        var username = {name: localStorage.getItem('username')};
        console.log(username);

        axios.post('http://localhost:3000/private/blogs/blog',
        {data:[post], type:"merge"}, {headers: {Authorization:`Bearer ${jwt}`}},{type: 'merge'})
        .then(response => {
           console.log(response.data);
        }).catch(error => {
           console.log(error);
        });

        axios.post('http://localhost:3000/private/blogs/name',
        {data:[username], type:"merge"}, {headers: {Authorization:`Bearer ${jwt}`}},{type: 'merge'})
        .then(response => {
           console.log(response.data);
        }).catch(error => {
           console.log(error);
        });
    window.location.reload();

    
    })
   
}


$(document).ready(function(){
    $root.append(loadFeed());
    $root.on("click","#create", createPost)
    $(document).on("click", "#logout", function(){
        localStorage.removeItem('jwt');
        window.location.replace("../index.html")
   })
  
});