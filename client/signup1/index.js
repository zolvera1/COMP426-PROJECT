$(function() {
    const $root = $(`#root`);
    $root.append(renderSignUpForm());
   

});

export const renderSignUpForm = function(){
    return ` <div id="signUpForm">
        <form action=" "; id=form; style="background-color:white";>
            <label for="fName";>First Name</label>
            <br>
            <input type="text"; id="fname"; name="fname"; value="";>
            <br>
            <br>
            <label for="hfirst";>Last Name</label>
            <br>
            <input type="text"; id="hfirst"; name="hfirst"; value="";>
            <br>
            <br>
            <label for="hlast";>Last Name</label>  
            </form>
        </div>`
}