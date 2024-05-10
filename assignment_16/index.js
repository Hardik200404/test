// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
  
    const usernameInput = event.target.username;
    const emailInput = event.target.email;
    const phoneInput = event.target.phone;
  
    const myObj = {
      "username": usernameInput.value,
      "email": emailInput.value,
      "phone": phoneInput.value,
    };
  
    const myObj_serial = JSON.stringify(myObj);
    localStorage.setItem(myObj.email, myObj_serial);
  
   
  
    const string = `${myObj.username} - ${myObj.email} - ${myObj.phone}`;
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);
    const list = document.querySelector("ul");
    list.appendChild(newLi);
  
    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('Delete');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className = 'delete-btn';
    newLi.appendChild(deleteBtn);
  
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-btn';
    newLi.appendChild(editBtn);
  
  
    list.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-btn')) {
        const userToDelete = event.target.parentElement;
        const userEmail = userToDelete.textContent.split(' - ')[1];
        userToDelete.remove();
        localStorage.removeItem(userEmail);
      } else if (event.target.classList.contains('edit-btn')) {
        const userToEdit = event.target.parentElement;
        const userDetails = userToEdit.textContent.split(' - ');
        handleEdit(userDetails);
      }
    });
  
    function handleEdit(userDetails) {
      let [username, email, phone] = userDetails;
      phone=parseInt(phone)
      populateInputFields(username, email,phone);
    }
  
    function populateInputFields(username, email, phone) {
      usernameInput.value = username;
      emailInput.value = email;
      phoneInput.value = phone;
    }
  }
  
  module.exports = handleFormSubmit;