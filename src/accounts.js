let loginF = document.getElementById("login")
let registerF = document.getElementById("register")

async function register(data) {
    const username = data["username"]
    const password = data["password"]
    const bio = data["bio"]
    const profile_pic = data["profile_pic"]

    console.log(data)

    const api = document.location.href + "/../api/accounts/register"

    await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
            bio: bio,
            profile_pic: profile_pic
        })
    }).then(res => {
        console.log(res.body)
        if (res.status == 400) {
            const error_p = document.getElementById("error_p")
            error_p.innerHTML = res.json().error
            console.log("400")
        } 
    });
}

async function login(data) {
    const username = data["username"]
    const password = data["password"]

    console.log(data)

    const api = document.location.href + "/../api/accounts/login"

    await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }).then(res => {
        console.log(res.body)
        if (res.status == 400) {
            const error_p = document.getElementById("error_p")
            error_p.innerHTML = res.json().error
            console.log("400")
        } 
    });
}

if (registerF){
    registerF.addEventListener('submit', (e) => {
        e.preventDefault();
        register({
            username: registerF.elements[0].value,
            password: registerF.elements[1].value,
        });
    });
}

if (loginF){
    loginF.addEventListener('submit', (e) => {
        e.preventDefault();
        login({
            username: loginF.elements[0].value,
            password: loginF.elements[1].value,
        });
    });
}