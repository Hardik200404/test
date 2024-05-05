let form=document.querySelector("form")

function handleFormSubmit(event){
    event.preventDefault();

    let name=event.target.username.value
    let email=event.target.email.value
    let phone=event.target.phone.value
    
    let user_obj={
        "username":name,
        "email":email,
        "phone":phone
    }

    let user_obj_serialized=JSON.stringify(user_obj)

    localStorage.setItem("User Details",user_obj_serialized)

    //let user_obj_deserialized=JSON.parse(user_obj_serialized)

    //task 2, add the info as list
    //created unordered list
    let ul_list=document.getElementsByTagName('ul')[0]
    let li_ele=document.createElement('li')
    let body=document.getElementsByTagName('body')[0]
    ul_list.appendChild(li_ele)

    user_obj=JSON.parse(localStorage.getItem("User Details"))

    li_ele.innerHTML=user_obj.username+'-'+user_obj.email+'-'+user_obj.phone

}

module.exports=handleFormSubmit;
