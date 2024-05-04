//task 1
let h3_heading=document.createElement('h3')
let h3_content=document.createTextNode("Buy high quality organic fruits online")

h3_heading.appendChild(h3_content)

let first_div=document.getElementById("header")
first_div.appendChild(h3_heading)

//task 2
h3_heading.style.fontStyle="italic"

//task3
let new_para=document.createElement('p')
new_para.textContent="Total fruits: 4"

let second_div=document.getElementsByTagName("div")[1]
let fruits_list=document.querySelector(".fruits")
//had to use queryselector

second_div.insertBefore(new_para,fruits_list)

//task 4
new_para.id="fruits-total"

