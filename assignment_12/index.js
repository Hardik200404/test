let form=document.querySelector("form")

form.addEventListener('submit',function(event){
    event.preventDefault();

    let name=document.getElementsByName("username")[0]
    let email=document.getElementsByName("email")[0]
    let phone=document.getElementsByName("phone")[0]
    
    localStorage.setItem("Username",name.value)
    localStorage.setItem("Email",email.value)
    localStorage.setItem("Phone",phone.value)
})