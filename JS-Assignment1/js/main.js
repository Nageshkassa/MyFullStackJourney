flatpickr("#StartDate", {
    enableTime: false,
    dateFormat: "m-d-Y ",
    minDate: "today",
    onChange: function(selectedDates, dateStr) {
        var selectedDate = new Date(dateStr);
        var month = selectedDate.toLocaleDateString('en-US', { month: '2-digit' });
        var year = selectedDate.toLocaleDateString('en-US', { year: "numeric" });
        var day = selectedDate.toLocaleDateString('en-US', { day :'numeric'});  
        document.getElementById('StartDate').value =month+'-'+day+'-'+year;
         
       
  
      }
  
  });
  
  
  var dayinput;
  flatpickr("#calenderpick", {
    enableTime: false,
    dateFormat: "m-d-Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr) {
    var selectedDate = new Date(dateStr);
    var dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    var month = selectedDate.toLocaleDateString('en-US', { month: '2-digit' });
    var month1 = selectedDate.toLocaleDateString('en-US', { month: 'long' });
    var year = selectedDate.toLocaleDateString('en-US', { year: "numeric" });
    var day = selectedDate.toLocaleDateString('en-US', { day :'numeric'});        
  
    document.getElementById('daypick').value = dayOfWeek + ' ' + month1 + ' ' + day;
    document.getElementById('interviewdate').value =month+'-'+day+'-'+year;
    dayinput=dayOfWeek + ' ' + month1 + ' ' + day;
    //   document.getElementById('inputcalender').value = month + '-' + day + '-' + year;
     
    }
  });
  var dayvalid =false;
  
  function buttonFun(e){
   
  dayvalid=true;
  // console.log(rate_value);
    document.getElementById('daypick').value=dayinput+', '+e.innerText;
    // console.log(selectedGender);
    
    
  }
  
   
  
  
  
  var dropArea = document.getElementById('drop-area');
  // Prevent default behavior when files are dragged and dropped
  dropArea.addEventListener('dragenter', preventDefault, false);
  dropArea.addEventListener('dragleave', preventDefault, false);
  dropArea.addEventListener('dragover', preventDefault, false);
  dropArea.addEventListener('drop', preventDefault, false);
  // Highlight drop area when files are dragged over it
  dropArea.addEventListener('dragenter', highlight, false);
  dropArea.addEventListener('dragleave', unhighlight, false);
  dropArea.addEventListener('dragover', highlight, false);
  dropArea.addEventListener('drop', unhighlight, false);
  // Handle file drop
  dropArea.addEventListener('drop', handleDrop, false);
  function preventDefault(e) {
  
  e.preventDefault();
  e.stopPropagation();
  
  }
  function highlight() {
  dropArea.classList.add('highlight');
  }
  function unhighlight() {
  dropArea.classList.remove('highlight');
  }
  function handleDrop(e) {
  var files = e.dataTransfer.files;
  // Process dropped files here
  handleFiles(files);
  }
  function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    // Access each file using files[i]
    console.log(files[i].name);
    // Perform any additional operations with the file
  }
  }
  
  
  
  
 


  const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^\d{10}$/;

// Form submission event listener
$("#jobApplicationForm").submit(function(e) {
  e.preventDefault();

  // Clear previous error messages
  $(".error").text("");

  // Get form data
  const name = $("#name").val();
  const lname = $("#lname").val();
  const email = $("#email").val();
  const mobile = $("#mobile").val();

  const city = $("#city").val();
  const position = $("#position").val();
  const startDate = $("#StartDate").val();
  const gender = $("input[name='gender']:checked").val();
  const interviewDate = $("#interviewdate").val();
  const day = $("#daypick").val();

  // Validate form inputs
  let isValid = true;

  if (!nameRegex.test(name) || !nameRegex.test(lname)) {
    $("#nameError").text("Invalid name");
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    $("#emailError").text("Invalid email");
    isValid = false;
  }

  if (!mobileRegex.test(mobile)) {
    $("#mobileError").text("Invalid mobile number");
    isValid = false;
  }

  if (city === "") {
    $("#cityError").text("Please select a city");
    isValid = false;
  }

  if (position.trim() === "") {
    $("#positionError").text("Applied position is required");
    isValid = false;
  }

  if (startDate.trim() === "") {
    $("#startDateError").text("Start date is required");
    isValid = false;
  }

  if (interviewDate.trim() === "") {
    $("#interviewdateError").text("Invalid interview date");
    isValid = false;
  }

  if (!dayvalid) {
    console.log("I am stucked");
    $("#interviewtimeError").text("Enter time ");
    isValid = false;
    dayvalid = false;
  }

  if (!gender) {
    $("#genderError").text("Please select a gender");
    isValid = false;
  }

  if (isValid) {

    // Store form data in local storage
    localStorage.setItem("firstname", name);
    localStorage.setItem("lastname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("city", city);
    localStorage.setItem("position", position);
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("gender", gender);
    localStorage.setItem("interviewDate", interviewDate);
    localStorage.setItem("selected_day", dayinput);

    // Clear inputs
    $("#name").val("");
    $("#lname").val("");
    $("#email").val("");
    $("#mobile").val("");
    $("#city").val("");
    $("#position").val("");
    $("#StartDate").val("");
    $("input[name='gender']").prop("checked", false);
    $("#interviewdate").val("");
    $("#daypick").val("");

  
    alert("You have successfully applied for the full-stack developer job.");
  }

  return false;
});

// restore data
$(document).ready(function() {
  $("#name").val(localStorage.getItem("firstname"));
  $("#lname").val(localStorage.getItem("lastname"));
  $("#email").val(localStorage.getItem("email") );
  $("#mobile").val(localStorage.getItem("mobile"));
  $("#city").val(localStorage.getItem("city"));
  $("#position").val(localStorage.getItem("position"));
  $("#StartDate").val(localStorage.getItem("startDate"));
  $("input[name='gender'][value='" + (localStorage.getItem("gender") ) + "']").prop("checked", true);
  $("#interviewdate").val(localStorage.getItem("interviewDate") );
  $("#daypick").val(localStorage.getItem("selected_day"));
});
