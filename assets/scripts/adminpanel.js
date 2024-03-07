// buttons to open the hidden panels
const AddUser = document.getElementById("popup-adduser");
const ViewUser = document.getElementById("popup-viewuser");
const AddRest = document.getElementById("popup-addrest");
const ViewRest = document.getElementById("popup-viewrest");

const adminPanel = document.getElementById("admin-panel");
const userPanel = document.getElementById("user-panel");

const addUserpanel = document.getElementById("adduser-panel");
const addRestpanel = document.getElementById("addrest-panel");
const viewUserpanel = document.getElementById("viewuser-panel");
const viewRestpanel = document.getElementById("viewrest-panel");

const editusernamePanel=document.getElementById("edit-username-panel");


const Editusername=document.getElementById("popup-editname");
const Edituserpass=document.getElementById("popup-editpass");

// events to open the hidden panels
AddUser.addEventListener("click", function () {
  Showhidden(addUserpanel);
});
AddRest.addEventListener("click", function () {
  Showhidden(addRestpanel);
});
ViewRest.addEventListener("click", function () {
  Showhidden(viewRestpanel);
});
ViewUser.addEventListener("click", function () {
  Showhidden(viewUserpanel);
});

let user = { name: "ashraf", password: "" };
let users = [user,user];
// let users = [];
localStorage.setItem("users", JSON.stringify(users));

function Showhidden(hidden) {
  hidden.classList.remove("hidden");
  adminPanel.classList.remove("hidden");
  userPanel.classList.remove("hidden");
}

function Hidepanels(){
addUseropanel.classList.add("hidden");
addRestpanel.classList.add("hidden");
viewRestpanel.classList.add("hidden");
viewUserpanel.classList.add("hidden");
adminPanel.classList.add("hidden");
}
function Adduser() {
  let username = document.getElementById("add-username").value;
  let password = document.getElementById("add-userpass").value;
  let name = JSON.parse(localStorage.getItem("users") || "[]");

  let user = { name: username, password: password };
  name.push(user);

  localStorage.setItem("users", JSON.stringify(name));
  Hidepanels();
}

function Viewuser() {
  let Viewcontainer = document.getElementById("viewUser-container");
  Viewcontainer.innerHTML="";
  let namesArray = JSON.parse(localStorage.getItem("users") || "[]");
  for (let i = 0; i <= namesArray.length; i++) {
    names = namesArray[i];
    Viewcontainer.innerHTML += `<div><h2>${names.name}</h2><button id="${names.name}"onclick="Removeuser(this)">remove</button></div>`
  }
}

function Removeuser(event){
  let name = JSON.parse(localStorage.getItem("users") || "[]");
  let index = 0;
  for(let i =0; i<name.length;i++){
    if(event.id == name[i].name){
      index = i;
    }
    name[index].name = "";
    name[index].password = ""
    localStorage.setItem("users", JSON.stringify(name));
  }
}