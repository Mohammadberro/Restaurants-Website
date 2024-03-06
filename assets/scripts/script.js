window.onload = () => {
  if (localStorage.getItem("nav-check") == null) {
    return;
  }
  let nav_buttons = document.querySelectorAll('[data-nav="nav-buttons"]');
  let check =  localStorage.getItem("nav-check");
  for (let i = 0; i < nav_buttons.length; i++) {
    if ( i ==  check){
        nav_buttons[i].classList.remove("hidden");
    }
    else{
        nav_buttons[i].classList.add("hidden");
    }
  }
};

function check(item) {
  let nav_buttons = document.querySelectorAll('[data-nav="nav-buttons"]');
  if(item == document.getElementById("logo")){
    localStorage.setItem("nav-check",0);
  }
  for (let i = 0; i < nav_buttons.length; i++) {
    if (nav_buttons[i].parentNode.parentNode == item) {
      nav_buttons[i].classList.remove("hidden");
      localStorage.setItem("nav-check",i);
      
    } else {
      nav_buttons[i].classList.add("hidden");
    }
  }
  
}
