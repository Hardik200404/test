let form=document.querySelector("form")

function handleFormSubmit(event){
    event.preventDefault();

    let name=document.getElementsByName("username")[0]
    let email=document.getElementsByName("email")[0]
    let phone=document.getElementsByName("phone")[0]
    
    let user_obj={
        "username":name.value,
        "email":email.value,
        "phone":phone.value
    }

    let user_obj_serialized=JSON.stringify(user_obj)

    localStorage.setItem("User Details",user_obj_serialized)

    //let user_obj_deserialized=JSON.parse(user_obj_serialized)
}

module.exports=handleFormSubmit;
