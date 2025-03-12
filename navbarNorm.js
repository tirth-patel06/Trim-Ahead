document.addEventListener('DOMContentLoaded', () => {
    const mainlogo = document.querySelector('.navbar-logo');
    const loginBox = document.querySelector('.login');
    const enterPin = document.querySelector('.input-box');
  
    mainlogo.addEventListener('click', () => {
      location.href = "./index.html"
    });
  
    loginBox.addEventListener('click', () => {
      location.href = "./login.html"
    });
  
    enterPin.addEventListener("keydown", function (e) {
      if (e.code === "Enter" || e.code === "NumpadEnter" ) { 
        const pincode = enterPin.value
        if(pincode.length == 6){

          if(pincode==211002){
            location.href = "./userPage.html"
          }
          else{
            location.href = "./noShop.html"
          }
          console.log(pincode)
          
        }
        else{
          alert("Enter valid 6 digit Pincode")
        }
      }
    });
  });
  
  // after login
  
  document.addEventListener('DOMContentLoaded', () => {
    const mainlogo = document.querySelector('.alogin-navbar-logo');
    const enterPin = document.querySelector('.alogin-input-box');
    const id = document.querySelector("#id").value;
  
    mainlogo.addEventListener('click', () => {
      location.href = "./alogin-index.html"
    });
    
    enterPin.addEventListener("keydown", function (e) {
      if (e.code === "Enter" || e.code === "NumpadEnter" ) { 
        const pincode = enterPin.value
        if(pincode.length == 6){
  
          if(pincode==211002){
            location.href = "./alogin_userPage.html"
          }
          else{
            location.href = "./alogin_noShop.html"
          }
          
        }
        else{
          alert("Enter valid 6 digit Pincode")
        }
      }
    });
  });
  
  document.getElementById("userProfile").addEventListener("click", function() {
    const id = document.querySelector("#id").value;
    window.location.href = "./userdashboard.html"
    // pass link of userDashboard here
  });
  
  document.getElementById("oldBooking").addEventListener("click", function() {
    window.location.href = "./pBook.html"
  });
  
  document.getElementById("signOut").addEventListener("click", function() {
    window.location.href = "./index.html"
  });

  document.getElementById("vDash").addEventListener("click", function() {
    window.location.href = "./vDashbord.html"
  });  
  
  // Vandour Dashboard
  
  document.addEventListener('DOMContentLoaded', () => {
    const mainlogo = document.querySelector('.vlogin-navbar-logo');
    const logout = document.querySelector('.logout');
  
    mainlogo.addEventListener('click', () => {
      location.href = "./vDashbord.html"
    });

    logout.addEventListener('click', () => {
      location.href = "./index.html"
    });
  });