function Header() {

  return (

<header>
  <div class="topnav">
  <label for="">Resume</label>
        
          <div class="left">
    
            <li >
              <a class="nav-home" href="./index.html">Home</a>
          </li>
          <li  >
              <a class="nav-link" href="./about.html">About Me</a>
          </li>
          <li >
              <a class="nav-link" href="./project.html">Projects</a>
          </li>
          
          <li >
              <a class="nav-link" href="./contact.html">Contact</a>
          </li>
          </div>
  </div>
</header>
  );
}

function MainBody(){
  return (

    <section>
    <div>
      <div class="div1">
      <img src="./images/myimg.jpg" />
      
      
       </div>
      
       <div class="div2">
        <h2>Hi, I am Nagesh Kassa.</h2>
        <p>I am a Full stack developer, currently studying  B.Tech(IT) third year</p>
       </div>
    </div>
  
   </section>

  );
}

function Footer(){

  return(
    <footer class="text-center foot1" id="footsection">
    
    <div class="container p-4 pb-0">

      <section class="">
        <p class="d-flex justify-content-center align-items-center">
       
          
         <a href="https://www.facebook.com/profile.php?id=100071884009140"><i class="fa-brands fa-facebook-f" ></i></a> 
          <a href="https://myaccount.google.com/personal-info?hl=en" >  <i class="fa-brands fa-google" ></i></a>
        
          <a href="https://www.instagram.com/nagesh_kassa_/"><i class="fa-brands fa-instagram" ></i></a>
       
          <a href="https://www.linkedin.com/in/nagesh-kassa-24a6b1237/"> <i class="fa-brands fa-linkedin" ></i> </a>
         
          <a href="https://github.com/Nageshkassa?tab=repositories"><i class="fa-brands fa-github"  ></i></a>
          <br></br>
   
        </p>

      </section>
      <label for="copyright"> © {new Date().getFullYear()}  Copyright:</label>

    </div>



 

  </footer>

  )
}

function Page() {
  return (

      
          <div >
              <Header/>
             <MainBody/>
             <Footer/>
          </div>

   
      
  )
}

ReactDOM.render(<Page/>, document.getElementById("root"));