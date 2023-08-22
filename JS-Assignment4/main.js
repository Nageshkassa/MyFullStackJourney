function loadData() {
  // Check if the data is available in localStorage
  if (localStorage.getItem('Students')) {


   renderTable();
  }
 else {

      // if data is  not available, store the JSON in localStorage
      var students = {
          "nagesh@gmail.com": {
              "firstName": "Nagesh",
              "lastName": "Kassa",
              "mobile": "9080706050",
              "age": 20,
              "city": "Solapur"
          },

          "abhi@gmail.com": {
              "firstName": "Abhishek",
              "lastName": "Verma",
              "mobile": "9012345678",
              "age": 25,
              "city": "Delhi"
          },
          
          "babu@gmail.com": {
              "firstName": "Babu",
              "lastName": "Annam",
              "mobile": "1012345678",
              "age": 20,
              "city": "Hyderabad"
          },

          "chitra@gmail.com": {
              "firstName": "Chitra",
              "lastName": "Kumar",
              "mobile": "2012345678",
              "age": 22,
              "city": "Bangalore"
          },
          "deepa@gmail.com": {
              "firstName": "Deepa",
              "lastName": "Verma",
              "mobile": "3012345678",
              "age": 27,
              "city": "Chennai"
          },
          "rohit@gmail.com": {
            "firstName": "Rohit",
            "lastName": "Verma",
            "mobile": "3012345678",
            "age": 25,
            "city": "Mumbai"
        },
        "mohit3@gmail.com": {
            "firstName": "Mohit",
            "lastName": "Verma",
            "mobile": "3012345687",
            "age": 27,
            "city": "Delhi"
        },
        "ajay@gmail.com": {
            "firstName": "Ajay",
            "lastName": "Mitul",
            "mobile": "3012345783",
            "age": 28,
            "city": "Chennai"
        },
        "vinay@gmail.com": {
            "firstName": "Vinay",
            "lastName": "Kanaki",
            "mobile": "3012345876",
            "age": 26,
            "city": "Solapur"
        },
        "deepka@gmail.com": {
            "firstName": "Deepa",
            "lastName": "Kanaki",
            "mobile": "3012345076",
            "age": 25,
            "city": "Solapur"
        },
        "anish@gmail.com": {
            "firstName": "Anish",
            "lastName": "Shah",
            "mobile": "3012345987",
            "age": 27,
            "city": "Pune"
        },
        "vedant@gmail.com": {
            "firstName": "Vedant",
            "lastName": "Kulkarni",
            "mobile": "3012345456",
            "age": 24,
            "city": "Solapur"
        },
        "revan@gmail.com": {
            "firstName": "Revan ",
            "lastName": "Mali",
            "mobile": "2132345676",
            "age": 25,
            "city": "Pune"
        },
        "pavan@gmail.com": {
            "firstName": "Pavan",
            "lastName": "Mitte",
            "mobile": "3012345678",
            "age": 30,
            "city": "Hyderabad"
        },
        "arun@gmail.com": {
            "firstName": "Arun",
            "lastName": "Kanaki",
            "mobile": "4026307845",
            "age": 24,
            "city": "Kadapa"
        },
        "nikhil@gmail.com": {
            "firstName": "Nikhil",
            "lastName": "Patil",
            "mobile": "3012345678",
            "age": 26,
            "city": "Nashik"
        },
        "pratik@gmail.com": {
            "firstName": "Pratik",
            "lastName": "Ghodke",
            "mobile": "3012345789",
            "age": 27,
            "city": "Akkalkot"
        },
        "nidhish@gmail.com": {
            "firstName": "Nidhish",
            "lastName": "Patil",
            "mobile": "3012345876",
            "age": 25,
            "city": "Latur"
        },
        "rohan@gmail.com": {
            "firstName": "Rohan",
            "lastName": "Jadhav",
            "mobile": "3012345235",
            "age": 27,
            "city": "Pune"
        },
        "mahima@gmail.com": {
            "firstName": "Mahima",
            "lastName": "Kasture",
            "mobile": "3012345045",
            "age": 29,
            "city": "Akluj"
        },
        "nikita@gmail.com": {
            "firstName": "Nikita",
            "lastName": "Reddy",
            "mobile": "3012345456",
            "age": 27,
            "city": "Karnool"
        },
        "akash@gmail.com": {
            "firstName": "Akash",
            "lastName": "Karmal",
            "mobile": "4012345789",
            "age": 25,
            "city": "Kalburgi"
        },
        "shyan@gmail.com": {
            "firstName": "Shyam",
            "lastName": "Kassa",
            "mobile": "2012345620",
            "age": 22,
            "city": "Adoni"
        },
        "himanshu@gmail.com": {
            "firstName": "Himanshu",
            "lastName": "Shukla",
            "mobile": "5012345423",
            "age": 23,
            "city": "Mumbail"
        },
        "ayush@gmail.com": {
            "firstName": "Ayush",
            "lastName": "Tripati",
            "mobile": "60123450232",
            "age": 25,
            "city": "Pune"
        }
    



      };

      localStorage.setItem('Students', JSON.stringify(students));
      renderTable();
  }
  

}

function renderTable() {
  // Read from localStorage and render user info in the UI
  var Students = JSON.parse(localStorage.getItem('Students'));
  //console.log("Json data: ", Students);
  var tableDiv = document.getElementById('tableContainer');

  // Create table headers
  var headersDiv = document.createElement('div');
  headersDiv.className = 'head';

  var fullnameHeader = document.createElement('span');
  
  fullnameHeader.textContent = 'Fullname';

  headersDiv.appendChild(fullnameHeader);



  var ageHeader = document.createElement('span');
  ageHeader.textContent = 'Age';

  headersDiv.appendChild(ageHeader);

  var mobileHeader = document.createElement('span');
  mobileHeader.textContent = 'Mobile';
 
  headersDiv.appendChild(mobileHeader);

  var emailHeader = document.createElement('span');
  emailHeader.textContent = 'Email';

  headersDiv.appendChild(emailHeader);

  var cityHeader = document.createElement('span');
  cityHeader.textContent = 'City';

  headersDiv.appendChild(cityHeader);

  tableDiv.appendChild(headersDiv);

  // Iterate over Students and create table rows

  for (var stud in Students) {
  

      var user = Students[stud];
      var row = document.createElement('div');
      row.className = 'row';

      var fullname = document.createElement('span');
      fullname.textContent = user.firstName + ' ' + user.lastName;
      row.appendChild(fullname);

      var age = document.createElement('span');
      age.textContent = user.age;
      row.appendChild(age);

      var mobileNo = document.createElement('span');
      mobileNo.textContent = user.mobile;
      row.appendChild(mobileNo);

      var Email = document.createElement('span');
      Email.textContent = stud;
      row.appendChild(Email);

      var city = document.createElement('span');
      city.textContent = user.city;
      row.appendChild(city);

      tableDiv.appendChild(row);

  }

}