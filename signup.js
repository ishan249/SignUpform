var submission = document.getElementById('submit');
submission.addEventListener('click', checkPassword);
function checkPassword(e) {
    e.preventDefault();
    var passLength = document.getElementById('pass').value;
    var pass1Length = document.getElementById('pass1').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var userName = document.getElementById('username').value;
    if ((passLength.length) > 10) {
        alert('*password should not contain more than 10 characters');
    }
    else if ((passLength.length) <= 10) {
        if (passLength != pass1Length) {
            alert('Confirmed password is different, Please try again!')
        }
        else if ((name.length) == 0 || (email.length) == 0 || (userName.length) == 0) {
            alert('* marked are mandatory fields.');
        }
        else {
            window.location.href = 'thankyou.html';
        }
    }

}