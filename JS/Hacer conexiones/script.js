
var a = document.querySelector("a");
var editprofile = document.querySelector("#usuarioSelect");
document.querySelector('#usuarioSelect').addEventListener('change', function(event) {
    const editprofile = event.target.value;
    console.log('Adrien D.' + usuarioSelect);
    // Aquí puedes hacer lo que necesites con el usuario seleccionado
}
);

function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}