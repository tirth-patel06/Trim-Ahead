function signUp(){
    alert("You are Sucessfully Signed Up")
}

document.getElementById("photo-edit").addEventListener("click", function(event) {
    document.getElementById("photo-input").click(); // Open file picker
});

document.getElementById("photo-input").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        document.getElementById("file-name").textContent = file.name; // Show file name
    } else {
        document.getElementById("file-name").textContent = ""; // Clear if no file selected
    }
});