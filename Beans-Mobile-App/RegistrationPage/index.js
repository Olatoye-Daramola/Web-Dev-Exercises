document.addEventListener("DOMContentLoaded", () =>{
    let registerObject = {}
    let loginObject = {}

    // ButtonElement
    function confirmRegistration() {
        if (Object.keys(registerObject).length === 4) {
            try {
                let userRepository = localStorage.getItem("userNames")
                if (userRepository === null) {
                    let repository = [registerObject]
                    localStorage.setItem("userNames", JSON.stringify(repository))
                } else {
                    let previousRepository = JSON.parse(userRepository)
                    let updatedRepository = [...previousRepository, registerObject]
                    localStorage.setItem("userNames", JSON.stringify(updatedRepository))
                }
            }
            catch (error) {
                console.log(error)
            }
        } else {
            alert("Incomplete user info")
        }
    }

    if (document.getElementsByClassName("register_btn").length > 0) {
        let button = document.getElementsByClassName("register_btn")[0]
        button.addEventListener("click", () => confirmRegistration());
    }

    // InputFields
    function handleInputChange(e) {
        registerObject = {...registerObject, [e.target.name]: e.target.value}
    }

    function handleLoginChange(e) {
        loginObject = {...loginObject, [e.target.name]: e.target.value}
    }

    if (document.getElementsByClassName("register_btn").length > 0) {
        let registerInputFields = document.getElementsByClassName("register_input")
        Array.from(registerInputFields).forEach((inputField) =>
            inputField.addEventListener("input", (e) => handleInputChange(e)))
    }

    if (document.getElementsByClassName("login_input").length > 0) {
        let loginInputFields = document.getElementsByClassName("login_input")
        Array.from(loginInputFields).forEach((inputField) =>
            inputField.addEventListener("input", (e) => handleLoginChange(e)))
    }


    function confirmLogin() {
        let userRepository = JSON.parse(localStorage.getItem("userNames"))
        let {email, password} = loginObject
        let userObject = userRepository.find(user => user.email === email)
        if (userRepository.findIndex(user => user.email === email) !== -1) {
            if (userObject.password === password) {
                localStorage.setItem("userName", JSON.stringify(userObject))
                location.href="../HomePage/home.html"
            } else {
                alert("Please enter a correct password")
            }
        } else {
            alert("User does not exist")
        }
    }

    if (document.getElementsByClassName("login_input").length > 0) {
        let loginButton = document.getElementsByClassName("login_btn")[0]
        loginButton.addEventListener("click", () => confirmLogin())
    }

})


function myFunction() {
    let userName = JSON.parse(localStorage.getItem("userName"))
    document.getElementById("user-holla").innerHTML = "Hey " + userName.last_name
}

myFunction()