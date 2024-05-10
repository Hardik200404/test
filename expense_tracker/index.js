// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
  
    let expense = event.target.expense
    let description = event.target.description
    let category = event.target.category
  
    const myObj = {
      "expense": expense.value,
      "description": description.value,
      "category": category.value,
    };
    
    const list = document.querySelector("ul")
    
    //store the new expense in localstorage
    const myObj_serial = JSON.stringify(myObj)
    localStorage.setItem(myObj.description, myObj_serial)

    //create the new list element
    const string = `${myObj.expense} - ${myObj.description} - ${myObj.category}`
    const new_ele = document.createElement('li')
    const new_ele_text = document.createTextNode(string)
    new_ele.appendChild(new_ele_text)
    list.appendChild(new_ele)

    //add delete button to the list element
    const delete_btn = document.createElement('button')
    const delete_btn_text = document.createTextNode('Delete')
    delete_btn.appendChild(delete_btn_text)
    delete_btn.className = 'delete-btn'
    new_ele.appendChild(delete_btn)

    //add edit button to the list element
    const edit_btn = document.createElement('button')
    const edit_btn_text = document.createTextNode('Edit')
    edit_btn.appendChild(edit_btn_text)
    edit_btn.className = 'edit-btn'
    new_ele.appendChild(edit_btn)
  
    list.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-btn')) {
            const expense_to_delete = event.target.parentElement
            const expense_desc = expense_to_delete.textContent.split(' - ')[1]
            expense_to_delete.remove()
            localStorage.removeItem(expense_desc)
        }else if (event.target.classList.contains('edit-btn')) {
            const expense_to_edit = event.target.parentElement
            const expense_details = expense_to_edit.textContent.split(' - ')
            handleEdit(expense_details)
            
            //remove the expense only from the list not from localstorage
            const expense_to_delete = event.target.parentElement
            expense_to_delete.remove()
      }
    });
  
    function handleEdit(expense_details) {
      let [expense, desc, category] = expense_details;

      //remove 'deleteedit' textContent from category
      category=category.split('')
      let parsed_category=''
      for(let i=0;i<category.length-10;i++){
        parsed_category+=category[i]
      }

      populateInputFields(expense,desc,parsed_category);
    }
    
    //populate input feilds with existing values of the expense to
    //be edited
    function populateInputFields(exp,desc,parsed_category){
      expense.value = exp
      description.value = desc
      category.value = parsed_category
    }
}
  
  module.exports = handleFormSubmit