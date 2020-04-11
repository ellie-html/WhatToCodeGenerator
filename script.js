var up = document.getElementById('GFG_UP');  
var down = document.getElementById('GFG_DOWN');  
  
var arr = ["Animals", "Food",  
        "Films", "Tech Products", "Music Artist","TV Show", "Video Game", "Dessert", "Clothing Company","Superhero", "Sport","Travel", "Cosmetics", "Recipes" ,"Pokemon", "Photographer", "Drinks", "Space", "American Diner", "Plants", "Your Hobby" , "Coding", "Item in front of you" , "Milkshakes" , "Chocolate" , "Australia",  "Restaurant", "Shoes", "Cars" ] ; 
  
up.innerHTML = "Click on the button to select" 
                + " random element from the" 
                + " array.<br><br>" + arr; 
  
function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  
}  
  
function GFG_Fun() { 
    down.innerHTML = arr[Math.floor(random(1, 27))-1]; 
}  



var up = document.getElementById('GFG_UP2');  
var down2 = document.getElementById('GFG_DOWN2');  
  
var arr2 = ["Flip Cards", "Cards with Hover Effect",  
        "Profile Cards", "Image Gallery", "Book Style Page", "Parallax Scrolling", "Modal Windows", "Magazine Style Page", "Blog Style Page", "Carousel", "Slideshow", "Accordian Style", "Login Page", "Buttons with Click Effects","Buttons with Hover Effects", "Page Transitions", "Fullscreen Menu", "Hamburger Menu", "Sidebar Menu", "Subscribe Form" ,"Stacked Cards", "CSS Animations" ,"Social Buttons", "Contact Form"]; 
  
up.innerHTML = "Click on the button to select" 
                + " random element from the" 
                + " array.<br><br>" + arr2; 
  
function random2(mn, mx) {  
    return Math.random2() * (mx - mn) + mn;  
}  
  
function GFG_Fun2() { 
    down2.innerHTML = arr2[Math.floor(random(1, 20))-1]; 
}  






 // Modal Box


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}