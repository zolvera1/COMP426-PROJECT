$(function() {
   let $root = $(`#logout`);
   $(document).on("click", "#logout", function(){
        localStorage.removeItem('jwt');
        window.location.replace("../index.html")
   })

});