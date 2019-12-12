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
        console.log(response.data.result[0].post)
        for(let i = response.data.result.length-1; i>-1; i--){
            $root.append(`<div id="author">${response.data.result[i].name}</div>
            <div id="blogs">
                ${response.data.result[i].post}
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
   
    $(`#bdiv`).append(`<textarea id="blog" placeholder="begin typing here"></textarea>`);
    $(`#create`).replaceWith(`<button class="boton" id="post">Post</button`);
    
    $root.on("click","#post", async function(){
        let post = document.getElementById(`blog`).value;
        var jwt = localStorage.getItem('jwt');
        var username = localStorage.getItem('username');
        console.log(username);

        axios.post('http://localhost:3000/private/blogs',
        {data: {post:post,name:username}, type:"merge"}, {headers: {Authorization:`Bearer ${jwt}`}},{type: 'merge'})
        .then(response => {
           console.log(response.data);
        }).catch(error => {
           console.log(error);
        });

        // axios.post('http://localhost:3000/private/blogs/name',
        // {data:[username], type:"merge"}, {headers: {Authorization:`Bearer ${jwt}`}},{type: 'merge'})
        // .then(response => {
        //    console.log(response.data);
        // }).catch(error => {
        //    console.log(error);
        // });
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