// buttons to open the hidden panels
const AddUser = document.getElementById("popup-adduser");
const ViewUser = document.getElementById("popup-viewuser");
const AddRest = document.getElementById("popup-addrest");
const ViewRest = document.getElementById("popup-viewrest");

const adminPanel = document.getElementById("admin-panel");

const addUseropanel = document.getElementById("adduser-panel");
const addRestpanel = document.getElementById("addrest-panel");
const ViewUserpanel = document.getElementById("viewuser-panel");
const ViewRestpanel = document.getElementById("viewrest-panel");


// events to open the hidden panels
AddUser.addEventListener("click", function () {
  Showhidden(addUseropanel);
});
AddRest.addEventListener("click", function () {
  Showhidden(addRestpanel);
});
ViewRest.addEventListener("click", function () {
  Showhidden(ViewRestpanel);
});
ViewUser.addEventListener("click", function () {
  Showhidden(ViewUserpanel);
  Viewuser();
});


let user = { name: "idiotssssss", password: "" };
let users = [user, user, user, user];
// let users = [];
localStorage.setItem("users", JSON.stringify(users));

function Showhidden(hidden) {
  hidden.classList.remove("hidden");
  adminPanel.classList.remove("hidden");
}

// function to add the user by the admin panel 
function Adduser() {
  let username = document.getElementById("add-username").value;
  let password = document.getElementById("add-userpass").value;
  let name = JSON.parse(localStorage.getItem("users") || "[]");

  let user = { name: username, password: password };
  name.push(user);
  localStorage.setItem("users", JSON.stringify(name));
}
function Viewuser(){
  let Viewcontainer=document.getElementById("viewUser-container").innerHTML;
  let namesArray = JSON.parse(localStorage.getItem("users") || "[]");
  for (let i = 0;i<=namesArray.length;i++){
    names=namesArray[i];
    Viewcontainer.innerHTML+=names;
    console.log(names);
  }
}
