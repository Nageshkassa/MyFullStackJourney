
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://648ef86675a96b66444488b0.mockapi.io/api/v1/employeedata';
    
   
    const addUserForm = document.getElementById('adduser-form');


addUserForm.addEventListener('submit', event => {

  event.preventDefault();

  const nameInput = document.getElementById('name');

  const ageInput = document.getElementById('age');

  const stateInput = document.getElementById('state');

  const user = {

    userName: nameInput.value,
    age: parseInt(ageInput.value),
    state: stateInput.value
  };
  
  addUser(user);
  nameInput.value = '';
  ageInput.value = '';
  stateInput.value = '';
});

function addUser(user) {
      fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(data => {
            alert("user added  succesfully");
            console.log('User added:', data);
         
          })
          .catch(error => {
            console.log('Error adding user:', error);
          });

    
      }


});