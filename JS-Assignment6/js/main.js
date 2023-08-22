let url = "https://648ef86675a96b66444488b0.mockapi.io/api/v1/employeedata";
const tablebody = document.getElementById("displayTable");

fetchUsers();
function fetchUsers() {
  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      console.log("fetched");
      displayUsers(data);
    })
    .catch((error) => {
      console.log("Error fetching users:", error);
    });
}

var myId;
function displayUsers(data) {
  data.forEach((user) => {
    console.log("i am from display");

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.classList.add("editable");
    nameCell.textContent = user.userName;
    myId = user.id;

    const ageCell = document.createElement("td");
    ageCell.classList.add("editable");
    ageCell.textContent = user.age;

    const stateCell = document.createElement("td");
    stateCell.classList.add("editable");
    stateCell.textContent = user.state;

    const actionsCell = document.createElement("td");
    const actionsDiv = document.createElement("div");

    const editBox = document.createElement("div");
    editBox.classList.add("box");
    editBox.id = "edit";
    editBox.innerHTML = '<i class="fas fa-marker"></i>';

    const deleteBox = document.createElement("div");
    deleteBox.classList.add("box");
    deleteBox.id = "delete";
    deleteBox.setAttribute("data-bs-toggle", "modal");
    deleteBox.setAttribute("data-bs-target", "#exampleModal");
    deleteBox.innerHTML =
      '<i class="fas fa-trash-alt" style="color: #ffffff;"></i>';
    //   deleteBox.addEventListener('click', () => deleteUser(myId));

    deleteBox.addEventListener("click", () => {
      const deletingName = document.getElementById("deletingName");
      const confirmdelete = document.getElementById("confirmDelete");
      deletingName.textContent = user.userName;
      confirmdelete.addEventListener("click", () => {
        console.log("Delete confirmed");
        deleteUser(user.id);
      });
    });

    const submitBox = document.createElement("div");
    submitBox.classList.add("box");
    submitBox.id = "submit";
    submitBox.style.display = "none";
    submitBox.innerHTML =
      '<i class="far fa-arrow-alt-circle-up" style="color: #16101e;"></i>';
    //user can edit by performing this fuction
    const editUser = () => {
      nameCell.contentEditable = true;
      ageCell.contentEditable = true;
      stateCell.contentEditable = true;
      submitBox.style.display = "inline-block";
    };

    editBox.addEventListener("click", editUser);
    submitBox.addEventListener("click", () => {
      nameCell.contentEditable = false;
      ageCell.contentEditable = false;
      stateCell.contentEditable = false;
      submitBox.style.display = "none";

      // Perform save operation here
      const newUser = {
        id: user.id,
        userName: nameCell.textContent,
        age: parseInt(ageCell.textContent),
        state: stateCell.textContent,
      };
      console.log("myid is ", myId);
      updateUser(user.id, newUser);
    });

    actionsDiv.appendChild(editBox);
    actionsDiv.appendChild(deleteBox);
    actionsDiv.appendChild(submitBox);
    actionsCell.appendChild(actionsDiv);

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(stateCell);
    row.appendChild(actionsCell);

    tablebody.appendChild(row);
  });
}

function addUser() {
  fetch("https://648ef86675a96b66444488b0.mockapi.io/api/v1/employeedata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("user added succesfully");
      console.log("User added:", data);
      fetchUsers();
    })

    .catch((error) => {
      console.log("Error adding user:", error);
    });
}

function updateUser(id, user) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("user updated  succesfully");
      location.reload();
      //console.log("User updated:", data);
     
    })

    .catch((error) => {
      console.log("Error updating user:", error);
    });
}

//for deleting the user
function deleteUser(id) {
  
  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        
        alert("user deleted succesfully");
        location.reload();
        console.log("User deleted successfully");
      } else {
        console.log("User deletion failed");
      }
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
    });
}
