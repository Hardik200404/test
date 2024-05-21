const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

async  function getTodos() {
  // Write your code here

  let url = "https://crudcrud.com/api/32042bcf2c5c416d98f2435003d076fd/todo";

   const response = await  axios.get(url)
   .then( (response) => {
    console.log(response);
   }  ).catch ( (error) => {
    console.log(error);
   } )


}

async function postTodo() {
  // Write your code here
  let url = "https://crudcrud.com/api/32042bcf2c5c416d98f2435003d076fd/todo";
  let data = {
    "title" : "Learn Axios",
    "completed" : false,
  }
   const response =  await axios.post( url , data   )
   .then( (res) => {console.log(res)} )
   .catch ( (error) => {console.log(error)} )
    console.log( response );
}


async function putTodo() {
  // Write your code here

  let url = "https://crudcrud.com/api/32042bcf2c5c416d98f2435003d076fd/todo/66432e993207ed03e8c937dc";
  let data = {
    "title" : "Learn Axios",
    "completed" : true,
  }

   const response =  await axios.put( url , data   )
   .then( (res) => {console.log(res)} )
   .catch ( (error) => {console.log(error)} )
}

async function deleteTodo() {
  // Write your code here

  let url = "https://crudcrud.com/api/32042bcf2c5c416d98f2435003d076fd/todo/66432e993207ed03e8c937dc";
   const response =  await axios.delete( url )
   .then( (res) => {console.log(res)} )
   .catch ( (error) => {console.log(error)} )
}
