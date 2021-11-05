// // console.log(document.getElementsByTagName("Body")[0].innerHTML);
document.addEventListener("DOMContentLoaded", () =>{
    // ButtonElement
    let button = document.getElementsByClassName("register_btn")[0]
    button.addEventListener("click", () => console.log("register_btn clicked"));

    // InputFields
    function handleInputChange(e) {
        console.log(e.target.name, e.target.value)
    }
    let inputFields = document.getElementsByTagName("input")
    // for (let i = 0; i < inputFields.length; i++) {
    //     inputFields[i].addEventListener("input", (e) => handleInputChange(e))
    // }
    Array.from(inputFields).forEach((inputField) => inputField.addEventListener("input", (e) => handleInputChange(e)))

})


// document.addEventListener("DOMContentLoaded", function() {
//     let registerObject = {}
//
//     // ButtonElement
//     let button = document.getElementsByClassName("register_btn")[0]
//     button.addEventListener("click", () => console.log(registerObject))
//
//     // InputFields
//     function handleInputChange(e) {
//         registerObject = {...registerObject, [e.target.name]: e.target.value}
//     }
//
//     let inputFields = document.getElementsByTagName("input")
//     Array.from(inputFields).forEach((inputField) =>
//         inputField.addEventListener("input", (e) => handleInputChange(e)))
// })