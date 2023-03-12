let form = document.querySelector("#main_form");
form.addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    let name = form.name.value;
    let pass = form.pass.value;
    let repass = form.repass.value;
    let state = form.state.value;
    let fail = "";
    if (name === "" || pass === "" || state === "") {
        fail = "Заполните все поля";
    } else if (name.length <= 1 || name.length > 50) {
        fail = "Введите корректное имя";
    } else if (pass !== repass) {
        fail = "Пароли должны совпадать";
    } else if (pass.split("&").length > 1) {
        fail = "Некорректный пароль";
    }
    if (fail !== "") {
        document.getElementById("error").innerHTML = fail;
    } else {
        alert("Все данные корректно заполнены");
        window.location = "https://itproger.com";
    }
}
