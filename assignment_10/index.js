//task 1
let fruit_list=document.getElementsByClassName("fruit")
for(let i of fruit_list){
    let button=document.createElement('button');
    button.textContent="Edit"
    button.className="edit-btn"
    
    i.appendChild(button)
}

//task 2
let form=document.querySelector("form")
let ul_fruits=document.querySelector(".fruits")

//when new fruit is added
form.addEventListener('submit',function(event){
    event.preventDefault();

    let new_fruit=document.getElementById("fruit-to-add")
    let new_li_ele=document.createElement('li')
    new_li_ele.className="fruit"

    //simple way
    new_li_ele.innerHTML=new_fruit.value+'<button class="delete-btn">x</button>'
    new_li_ele.innerHTML+='<button class="edit-btn">Edit</button>'

    ////using dom manipulation
    // let new_li_text=document.createTextNode(new_fruit.value)
    // new_li_ele.appendChild(new_li_text)

    // //creating button
    // let del_button=document.createElement('button');
    // del_button.textContent="x"
    // del_button.className="delete-btn"
    // let edit_button=document.createElement('button');
    // edit_button.textContent="Edit"
    // edit_button.className="edit-btn"

    // //adding button
    // new_li_ele.appendChild(del_button)
    // new_li_ele.appendChild(edit_button)
    
    ul_fruits.appendChild(new_li_ele)
})


//when delete button is clicked
ul_fruits.addEventListener("click",function(event){
    if(event.target.classList.contains('delete-btn')){
        let fruit_to_delete=event.target.parentElement
        ul_fruits.removeChild(fruit_to_delete)
    }
})