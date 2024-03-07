// buttons to open the hidden panels
const AddUser = document.getElementById("popup-adduser");
const RemoveUser = document.getElementById("popup-removeuser");
const AddRest = document.getElementById("popup-addrest");
const RemoveRest = document.getElementById("popup-removerest");

const adminPanel = document.getElementById("admin-panel");

const addUseropanel = document.getElementById("adduser-panel");
const addRestpanel = document.getElementById("addrest-panel");
const removeUserpanel = document.getElementById("removeuser-panel");
const removeRestpanel = document.getElementById("removerest-panel");

// events to open the hidden panels
AddUser.addEventListener("click", function () {
  Showhidden(addUseropanel);
});
AddRest.addEventListener("click", function () {
  Showhidden(addRestpanel);
});
RemoveRest.addEventListener("click", function () {
  Showhidden(removeRestpanel);
});
RemoveUser.addEventListener("click", function () {
  Showhidden(removeUserpanel);
});

let user = { name: "", password: "" };
// let users = [user, user, user, user, user, user, user, user, user, user, user];
let users = [];
localStorage.setItem("users", JSON.stringify(users));

function Showhidden(hidden) {
  hidden.classList.remove("hidden");
  adminPanel.classList.remove("hidden");
}

function Adduser() {
  let username = document.getElementById("add-username").value;
  let password = document.getElementById("add-userpass").value;
  let name = JSON.parse(localStorage.getItem("users") || "[]");

  let user = { name: username, password: password };
  name.push(user);

  localStorage.setItem("users", JSON.stringify(name));
  console.log(JSON.parse(localStorage.getItem("users") || "[]"));
}
