let nameinput = document.getElementById("name")
let emailinput = document.getElementById("email")
let passwordinput = document.getElementById("password")
let data = [];
let registerbutton = document.getElementById("registerbutton")

if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem("data"))

}


registerbutton.addEventListener("click", function () {
    if (nameinput.value == "" || emailinput.value == "" || passwordinput.value == "") {
        x = document.getElementById("message").innerHTML = "all fields required"
        document.getElementById("message").style = "color:red"

        return
    }

    else if (data.length == 0) {
        let sentdata = {
            name: nameinput.value,
            email: emailinput.value,
            password: passwordinput.value,
        };
        data.push(sentdata)
        localStorage.setItem("data", JSON.stringify(data))
        document.getElementById("message").innerHTML = "success"
        document.getElementById("message").style = "color:green"
    }
    else if (search() == true) {
        document.getElementById("message").innerHTML = "alreadry exist"
        document.getElementById("message").style = "color:red"
    }

    else {
        let sentdata = {
            name: nameinput.value,
            email: emailinput.value,
            password: passwordinput.value,
        }
        data.push(sentdata)
        localStorage.setItem("data", JSON.stringify(data))
        document.getElementById("message").innerHTML = "success"
        document.getElementById("message").style = "color:green"
    }
    clear()

})

function search() {
    for (var i = 0; i < data.length; i++) {
        if (  (data[i].email.toLowerCase() == emailinput.value.toLowerCase())&&(data[i].password == passwordinput.value) )
         return (true)
        
    
       
        
        
    }
}


loginbutton.addEventListener("click", function () {

    if (emailinput.value == "" || passwordinput.value == "") {
        x = document.getElementById("message").innerHTML = "all fields required"
        document.getElementById("message").style = "color:red"
        console.log(emailinput.value)

        return
    }


    else if (search() == true) {
        console.log(data)
        let index = data.findIndex(x => x.email ==emailinput.value);
        username=data[index].name
       
        document.getElementById("message").innerHTML = "success"
        document.getElementById("message").style = "color:green"
        document.getElementById("content").innerHTML = ` <nav class="top-0 w-100 d-flex justify-content-between py-4 align-items-center">
        <h5 class="ms-5 text-white">SMART LOGIN</h5>
        <button class="btn btn-outline-warning mx-5" ><a href="login.html" class="text-decoration-none text-white link">Log Out </a></button>
    </nav>
    <div class="shadow-lg  color m-auto mt-5 w-50 text-center p-4">
        <h1 class="fontcolor m-5 " id="welcomemessage">welcome ${username} </h1>
       
        <button  class="form-control my-4 border-1 color fontcolor d-none" id="registerbutton" > Sign Up</button>
        <button  class="form-control my-4 border-1 color fontcolor d-none" id="loginbutton" > Login</button>
        
    </div>`
    
    }

    else {
        document.getElementById("message").innerHTML = "Password or Email incorrect"
        document.getElementById("message").style = "color:red"
        console.log(data)
    }
    clearlogin()



})

function clear() {
    nameinput.value = ""
    emailinput.value = ""
    passwordinput.value = ""
}
function clearlogin() {

    emailinput.value = ""
    passwordinput.value = ""
}















