

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
  
	  document.getElementById('daypick').value = dayOfWeek + ', ' + month1 + ' ' + day;
	  document.getElementById('inputcalender').value = month + '-' + day + '-' + year;
	 
	}
  });


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



// Valiodation and Local storage 

document.addEventListener("DOMContentLoaded", function() {
	// Retrieve the form elements
	var form = document.getElementById('job-application-form');
	var nameInput1 = document.getElementById('fname');
	var nameInput2 = document.getElementById('lname');
	var emailInput = document.getElementById('email-input');
	var mobileInput = document.getElementById('phone');
	var positionInput = document.getElementById('position-input');
  
	// Load the form data from localStorage if available
	loadFormData();
  
	// Add submit event listener to the form
	form.addEventListener('submit', function(e) {
	  e.preventDefault();
  
	  // Validate the form inputs
	  var isValid = validateForm();
  
	  if (isValid) {
		// Save the form data to localStorage
		saveFormData();
  
		// Show success message
		alert("You have successfully applied for the full-stack developer job.");
  
		// Reset the form
		form.reset();
	  }
	});
  
	// Function to validate the form inputs
	function validateForm() {
	  var firstname = nameInput1.value.trim();
	  var lastname = nameInput2.value.trim();

	  var email = emailInput.value.trim();
	  var mobile = mobileInput.value.trim();
	  var position = positionInput.value.trim();
	  var isValid = true;
  
	  // Regular expressions for validation
	  var nameRegex = /^[a-zA-Z\s]+$/;
	  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	  var mobileRegex = /^\d{10}$/;
  
	  // Validate name
	  if (!nameRegex.test(firstname)) {
		isValid = false;
		alert("Please enter a valid name.");
	  }
	  if (!nameRegex.test(lastname)) {
		isValid = false;
		alert("Please enter a valid name.");
	  }
  
	  // Validate email
	  if (!emailRegex.test(email)) {
		isValid = false;
		alert("Please enter a valid email address.");
	  }
  
	  // Validate mobile number
	  if (!mobileRegex.test(mobile)) {
		isValid = false;
		alert("Please enter a valid 10-digit mobile number.");
	  }
  
	  // Validate applied position
	  if (position === "") {
		isValid = false;
		alert("Please enter the applied position.");
	  }
  
	  return isValid;
	}
  
	// Function to save the form data to localStorage
	function saveFormData() {
	  var formData = {
		name: nameInput.value.trim(),
		email: emailInput.value.trim(),
		mobile: mobileInput.value.trim(),
		position: positionInput.value.trim()
	  };
  
	  localStorage.setItem('jobApplicationFormData', JSON.stringify(formData));
	}
  
	// Function to load the form data from localStorage
	function loadFormData() {
	  var formData = localStorage.getItem('jobApplicationFormData');
  
	  if (formData) {
		formData = JSON.parse(formData);
		nameInput.value = formData.name;
		emailInput.value = formData.email;
		mobileInput.value = formData.mobile;
		positionInput.value = formData.position;
	  }
	}
  });
  