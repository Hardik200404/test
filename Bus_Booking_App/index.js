function handle_filter(event){
    event.preventDefault();
    let filter_value=event.target.Buses_filter.value
    axios.get("https://crudcrud.com/api/907e0717104b4ae081ed97e5f1afed66/bus_booking")
    .then((res)=>{
        if(filter_value=='All'){
            for(let i=0;i<res.data.length;i++){
                displayUserOnScreen(res.data[i])
            }
        }else{
            for(let i=0;i<res.data.length;i++){
                if(filter_value==res.data[i].bus){
                    displayUserOnScreen(res.data[i])
                }
            }
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}
function handle_form_submit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      bus: event.target.Buses.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/907e0717104b4ae081ed97e5f1afed66/bus_booking",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone} - ${userDetails.bus}`
      )
    );
  
    //adding delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    //adding edit button
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    //adding hidden id element
    const user_id=document.createElement("p");
    user_id.textContent=userDetails._id
    user_id.style.display='none'
    userItem.appendChild(user_id)
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
      let user_id=userDetails._id
      axios.delete(`https://crudcrud.com/api/907e0717104b4ae081ed97e5f1afed66/bus_booking/${user_id}`)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
      userList.removeChild(event.target.parentElement);
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      let user_id=userDetails._id
      axios.delete(`https://crudcrud.com/api/907e0717104b4ae081ed97e5f1afed66/bus_booking/${user_id}`)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }

  // Do not touch code below
  module.exports ={handle_form_submit,handle_filter};
  