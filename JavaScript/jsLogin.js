function auth(){
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(user == "admin" && password == "admin"){
        window.location.assign("myHome.html");
        alert("Login Successfully!");
    } else {
        alert("Invalid Password or Username!");
        return;
    }
}