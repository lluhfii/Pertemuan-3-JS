const title = document.createElement("title");
const heading = document.createElement("h1");
const inputUsername = document.createElement("input");
const buttonLogin = document.createElement("button");

inputUsername.setAttribute("name", "username");
inputUsername.setAttribute("type", "text");

buttonLogin.setAttribute("type", "submit");
buttonLogin.addEventListener("click", function() {
    var a=prompt("Masukkan Kembali angka!","")
    var b=(a==2)?"Benar":"Salah"
    alert(b)
});

buttonLogin.appendChild(document.createTextNode("Submit"));
heading.appendChild(document.createTextNode("Silahkan isi Kolom dibawah ini dengan angka 2 !!!"));

document.head.appendChild(title);
document.body.appendChild(heading);
document.body.appendChild(inputUsername);
document.body.appendChild(buttonLogin);