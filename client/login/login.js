
$(function() {
    $(document).on('submit', '#login-form', (e) => {
        e.preventDefault();
        let email = $('#email').val();
        alert(email)
    })
})