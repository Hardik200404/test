//task 1,add input elemtn, which will take desc
let form=document.getElementsByTagName("form")
let new_input=document.createElement("input")
new_input.id="description"
new_input.type="text"
//tast 2, make desc have italic font
new_input.style.fontStyle="italic"

//getelementsbyid returns a collection, so get the button
//element first then form element
let button=form[0][1]
form=form[0]
form.insertBefore(new_input,button)

//task 3, apply filter
let filter=document.getElementById("filter")
let fruits_list=document.getElementsByClassName("fruit")
filter.addEventListener("keyup",function(event){
    let text_entered=event.target.value.toLowerCase()
    for(let i of fruits_list){
        let fruit=i.firstChild.textContent.toLowerCase()
        let fruit_desc=i.firstElementChild.textContent.toLowerCase()
        if(fruit.indexOf(text_entered)==-1){
            i.style.display="none"
        }else{
            i.style.display="flex"
        }
        if(fruit_desc.indexOf(text_entered)==-1 || fruit_desc=='x'){
            i.style.display="none"
        }else{
            i.style.display="flex"
        }    
    }
})

let ul_fruits=document.querySelector(".fruits")

//when new fruit is added
form.addEventListener('submit',function(event){
    event.preventDefault();

    let new_fruit=document.getElementById("fruit-to-add")
    let new_li_ele=document.createElement('li')
    new_li_ele.className="fruit"
    
    let new_fruit_desc=document.getElementById("description")
    
    new_li_ele.innerHTML=new_fruit.value+`<p style="font-style:italic">${new_fruit_desc.value}</p>`
    new_li_ele.innerHTML+='<button class="delete-btn">x</button>'

    ul_fruits.appendChild(new_li_ele)
}
)