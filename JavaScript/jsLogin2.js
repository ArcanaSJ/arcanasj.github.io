function auth(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var mail = document.getElementById("email").value;
    if(user == "admin" && pass == "admin" && mail == "admin@gmail.com"){
        window.location.href = "https://forms.gle/NnmfjwEtNnqWJpMp9";
        alert("Login Successfully!");
    } else {
        alert("Invalid Password or Username!");
        return;
    }
}

function reg(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var mail = document.getElementById("email").value;
    if(user == "admin" && pass == "admin" && mail == "admin@gmail.com"){
        alert("Registered Successfully!");
        location.reload();
    } else {
        return;
    }
}