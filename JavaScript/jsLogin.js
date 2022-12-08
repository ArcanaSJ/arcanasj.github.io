function auth(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user == "admin" && pass == "admin"){
        window.location.href = "myHome.html";
        alert("Login Successfully!");
    } else {
        alert("Invalid Password or Username!");
        return;
    }
}