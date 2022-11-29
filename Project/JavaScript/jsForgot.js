function email(){
    var email = document.getElementById("email").value;
    if(email == "admin@edu.ph"){
        alert("Recovery sent");
    } else {
        alert("Account doesn't exist");
        return;
    }
}

function user(){
    var user = document.getElementById("username").value;
    if(user == "admin"){
        alert("Recovery sent");
    } else {
        alert("Account doesn't exist");
        return;
    }
}