let names = document.querySelector(".name");
let surname = document.querySelector(".surname");
let phoneNumber = document.querySelector(".phone");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let ConfirmPassword = document.querySelector(".confirm");
let btn = document.querySelector(".btn");
let user = document.querySelectorAll(".user");
let p = document.querySelector("p");
let form = document.querySelector(".form__body")
let input = document.querySelectorAll("input")
p.style.background = "green";
p.style.color = "white";
p.style.borderRadius = "20px";
p.style.border = "none";
p.style.padding = "20px";






for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

names.addEventListener("input", () => {
    console.log();
    if(names.value.length <= 3) {
        user[0].innerText = "ՍԽԱԼ Է";
        user[0].style.color = "red";
    } else if (names.value.length >= 5) {
        user[0].innerText = "ՃԻՇՏ Է";
        user[0].style.color = "rgb(95, 255, 2)";
    }

})

surname.addEventListener("input", () => {
    console.log();
    if(surname.value.length <= 7) {
        user[1].innerText = "ՍԽԱԼ Է";
        user[1].style.color = "red";
    } else if (surname.value.length >= 10) {
        user[1].innerText = "ՃԻՇՏ Է";
        user[1].style.color = "rgb(95, 255, 2)";
    }

})

phoneNumber.addEventListener("input", () => {
    console.log();
    if(phoneNumber.value.length <= 5) {
        user[2].innerText = "ՍԽԱԼ Է";
        user[2].style.color = "red";
    } else if (phoneNumber.value.length >= 8) {
        user[2].innerText = "ՃԻՇՏ Է";
        user[2].style.color = "rgb(95, 255, 2)";
    }

})

email.addEventListener("input", () => {
    console.log();
    if(email.value.length < 22) {
        user[3].innerText = "ՍԽԱԼ Է";
        user[3].style.color = "red";
    } else if (email.value.length >= 29) {
        user[3].innerText = "ՃԻՇՏ Է";
        user[3].style.color = "rgb(95, 255, 2)";
    }

})

password.addEventListener("input", () => {
    console.log();
    if(password.value.length < 6) {
        user[4].innerText = "ՍԽԱԼ Է";
        user[4].style.color = "red";
    } else if (password.value.length >= 8) {
        user[4].innerText = "ՃԻՇՏ Է";
        user[4].style.color = "rgb(95, 255, 2)";
    }

})

ConfirmPassword.addEventListener("input", () => {
    console.log();
    if(ConfirmPassword.value.length < 6) {
        user[5].innerText = "ՍԽԱԼ Է";
        user[5].style.color = "red";
    } else if (ConfirmPassword.value.length >=8) {
        user[5].innerText = "ՃԻՇՏ Է";
        user[5].style.color = "rgb(95, 255, 2)";
    }

})


form.addEventListener('submit', (e) => {
for (let index = 0; index < input.length; index++) {
    p.innerHTML = `<p> ${input[0].value} , ${input[1].value} , ${input[2].value} , ${input[3].value} , ${input[4].value} , ${input[5].value} </p>`
}
    
    // return false
    e.preventDefault()

})











// form.addEventListener('submit', (e) => {

//     p.innerHTML = `<p> ${names.value}</p>`
//     // return false
//     e.preventDefault()

// })

// form.addEventListener('submit', (e) => {

//     p.innerHTML = `<p> ${surname.value}</p>`
//     // return false
//     e.preventDefault()

// })

// form.addEventListener('submit', (e) => {

//     p.innerHTML = `<p> ${phoneNumber.value}</p>`
//     // return false
//     e.preventDefault()

// })

// form.addEventListener('submit', (e) => {

//     p.innerHTML = `<p> ${email.value}</p>`
//     // return false
//     e.preventDefault()

// })

// form.addEventListener('submit', (e) => {

//     p.innerHTML = `<p> ${password.value}</p>`
//     // return false
//     e.preventDefault()

// })

// form.addEventListener('submit', (e) => {

//     p.innerHTML = `<p> ${ConfirmPassword.value}</p>`
//     // return false
//     e.preventDefault()

// })
