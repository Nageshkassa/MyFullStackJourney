


let users = [
    {
      "userid": "USR00001",
      "name": "Andrew Grudde",
      "profilePicture": "./images/image1.jpg",
      "statusMessage": "We become what we think about!",
      "presence": 1
    },
    {
      "userid": "USRO0002",
      "name": "Steve Hughes",
      "profilePicture": "./images/image2.jpg",
      "statusMessage": "A positive mindset brings positive things",
      "presence": 2
    },
    {
      "userid": "USR00003",
      "name": "Kathy Smiley",
      "profilePicture": "./images/image3.jpg",
      "statusMessage": "One small positive thought can change your whole day",
      "presence": 3
    },
    {
      "userid": "USR00004",
      "name": "Steve Dunk",
      "profilePicture": "./images/image4.jpg",
      "statusMessage": "I am a rock star",
      "presence": 1
    },
    {
      "userid": "USR00005",
      "name": "Maria Dropola",
      "profilePicture": "./images/image5.jpg",
      "statusMessage": "I am using Gradious messenger",
      "presence": 4
    }
  ];

  function loadData(){
    renderUserList();
  }



    //const userListContainer = document.getElementById('userListContainer');
    function  renderUserList(){
    const userList = document.getElementById('right');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const userContainer = document.createElement('div');
      userContainer.classList.add('grid-container');
  
      const profileContainer = document.createElement('div');
      profileContainer.classList.add('grid-child', 'purple');
  
      const profilePicture = document.createElement('img');
      profilePicture.classList.add('imge');
      profilePicture.src = user.profilePicture;
      profilePicture.alt = "Profile Picture";
      profilePicture.style.border = presenceColor(user.presence);
      profilePicture.style.height = '50px';
      profilePicture.style.width = '50px';
      profilePicture.classList.add('rounded-pill');
  
      profileContainer.appendChild(profilePicture);
      userContainer.appendChild(profileContainer);
  
      const userInfo = document.createElement('div');
      userInfo.classList.add('grid-child');
      userInfo.style.marginLeft = '20px';//20px space between profile and name
  
      const userName = document.createElement('label');
      userName.classList.add('headng');
      userName.textContent = user.name;
  
      const statusMessage = document.createElement('small');
      statusMessage.textContent = user.statusMessage;
  
      const ellipseLink= document.createElement('a');
      ellipseLink.classList.add('ellipse', 'nav-link');
      ellipseLink.href = '#';
  
      const ellipsisIcon = document.createElement('i');
      ellipsisIcon.classList.add('fa', 'fa-ellipsis-v');
      ellipsisIcon.setAttribute('aria-hidden', 'true');
  
      ellipseLink.appendChild(ellipsisIcon);
      userInfo.appendChild(userName);
      userInfo.appendChild(document.createElement('br'));
      userInfo.appendChild(statusMessage);
      userInfo.appendChild(document.createElement('br'));
      userInfo.appendChild(ellipseLink);
  
      userContainer.appendChild(userInfo);
      userList.appendChild(userContainer);
    });
    }
  
  // Function to get the online presence border color
  function presenceColor(presence) {
    switch (presence) {
      case 1: // Online - Green
        return '4px solid green';
      case 2: // Busy - Red
        return '4px solid red';
      case 3: // Idle/Away - Yellow
        return '4px solid yellow';
      case 4: // Not logged in - Grey
        return '4px solid grey';
      default: // Default to grey for unknown presence
        return '4px solid grey';
    }
  }


    // Function to update the presence for a specific user
    function updatePresence(status) {
      const { userid, presence } = status;
      const user = users.find(user => user.userid === userid);
      console.log(`Prsence status is updated for user ${user.userid}`);
      if (user) {
        user.presence = presence;
        renderUserList();
      } else {
        console.log("User not found");
      }
    }
  
  // Function to update the status message for a particular user
  function updateMessage(msg) {
    const user = users.find(user => user.userid === msg.userid);
    if (user) {
      user.statusMessage = msg.statusMessage;
      renderUserList();
      console.log(`Status message updated for user ${user.userid}`);
    } else {
      console.log(`User ${msg.userid} not found`);
    }
  }
  
  // Function to add a user
  function addUser(user) {
    const existingUser = users.find((u) => u.userid === user.userid);

  if (existingUser) {
    console.log(`User ${user.userid} already exists`);
  } else {
    users.unshift(user);
    renderUserList();
    console.log(`User ${user.userid} added`);
  }
   
  }
  
  
  // Function to delete a user
  function deleteUser(userid) {
    const index = users.findIndex(user => user.userid === userid);
    if (index !== -1) {
      users.splice(index, 1);
      renderUserList();
      console.log(`User ${userid} deleted`);
    } else {
      console.log(`User ${userid} not found`);
    }
  }
  


  
  // Test the functions
 // updatePresence({ userid: "USRO0005", presence: 3 });
  // updateMessage({ userid: "USR00005", statusMessage: "Do good and good will come to you" });
  // addUser({
  //   "userid": "USR00006",
  //   "name": "Cassendra Trousy",
  //   "profilePicture": "./images/image6.jpg",
  //   "statusMessage": "I am using Gradious messenger",
  //   "presence": 1
  // });
  // deleteUser("USR00004");
  