function adduser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("usern_name", username);
window.location="kwitter_room.html";
}

