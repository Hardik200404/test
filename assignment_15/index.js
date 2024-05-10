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

    localStorage.setItem(user_obj.username,user_obj_serialized)
    
    //let user_obj_deserialized=JSON.parse(user_obj_serialized)

    //task 2, add the info as list
    //created unordered list
    let ul_list=document.getElementsByTagName('ul')[0]
    let li_ele=document.createElement('li')
    ul_list.appendChild(li_ele)

    li_ele.innerHTML=user_obj.username+'-'+user_obj.email+'-'+user_obj.phone
    li_ele.innerHTML+='<button type="button" class="delete-btn" value="Delete">Delete</button>'


    ul_list.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
          let user_to_del = event.target.parentElement;
          let user_name = user_to_del.textContent.split('-')[0];
          user_to_del.remove();
          localStorage.removeItem(user_name);
        }
    })
}

module.exports=handleFormSubmit;
