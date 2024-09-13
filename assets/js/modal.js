
      // Get modal elements - ABOUT US
      var modal1 = document.getElementById("myModal1");
      var btn = document.getElementById("openModalBtn");
      var span = document.getElementsByClassName("close")[0];

      // Open the modal
      btn.onclick = function() {
          modal1.style.display = "block";
      }

      // Close the modal
      span.onclick = function() {
          modal1.style.display = "none";
      }

      // Close modal when user clicks outside of it
      window.onclick = function(event) {
          if (event.target == modal1) {
              modal1.style.display = "none";
          }
      }
 
      
      // Get modal elements - How to Play
      var modal2 = document.getElementById("myModal2");
      var btn = document.getElementById("openModalBtn2");
      var span = document.getElementsByClassName("close2")[1];

      // Open the modal
      btn.onclick = function() {
          modal2.style.display = "block";
      }

      // Close the modal
      span.onclick = function() {
          modal2.style.display = "none";
      }

      // Close modal when user clicks outside of it
      window.onclick = function(event) {
          if (event.target == modal2) {
              modal2.style.display = "none";
          }
      }
 