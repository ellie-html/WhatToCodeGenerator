var up = document.getElementById('GFG_UP');  
var down = document.getElementById('GFG_DOWN');  
  
var arr = ["Animals", "Food",  
        "Films", "Tech Products", "Music Artist","TV Show", "Video Game", "Dessert", "Clothing Company","Superhero", "Sport","Travel", "Cosmetics", "Recipes" ,"Pokemon", "Photographer", "Drinks", "Space", "American Diner", "Plants"]; 
  
up.innerHTML = "Click on the button to select" 
                + " random element from the" 
                + " array.<br><br>" + arr; 
  
function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  
}  
  
function GFG_Fun() { 
    down.innerHTML = arr[Math.floor(random(1, 20))-1]; 
}  



var up = document.getElementById('GFG_UP2');  
var down2 = document.getElementById('GFG_DOWN2');  
  
var arr2 = ["Flip Cards", "Cards with Hover Effect",  
        "Profile Cards", "Image Gallery", "Book Style Page", "Parallax Scrolling", "Modal Windows", "Magazine", "Blog Style Page", "Carousel", "Slideshow", "Accordian", "Login Page", "Buttons with Click Effects","Button with Hover Effects", "Page Transition", "Fullscreen Menu", "Hamburger Menu", "Sidebar Menu", "Subscribe Form"]; 
  
up.innerHTML = "Click on the button to select" 
                + " random element from the" 
                + " array.<br><br>" + arr2; 
  
function random2(mn, mx) {  
    return Math.random2() * (mx - mn) + mn;  
}  
  
function GFG_Fun2() { 
    down2.innerHTML = arr2[Math.floor(random(1, 20))-1]; 
}  




$("#GFG_DOWN2").click(function() {
    
    $(this).removeClass("run-animation").addClass("run-animation");
  });



  $("#GFG_DOWN").click(function() {
    
    $(this).removeClass("run-animation").addClass("run-animation2");
  });