let main_heading=document.querySelector("#main-heading")
let basket_heading=document.querySelector("#basket-heading")
let fruits_list=document.querySelectorAll(".fruit")
main_heading.style.textAlign="right"
basket_heading.style.color="brown"

for(let i=0;i<fruits_list.length;i++){
    if(i%2!=0){
        fruits_list[i].style.backgroundColor="brown"
        fruits_list[i].style.color="white"
    }
}
