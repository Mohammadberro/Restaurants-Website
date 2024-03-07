// let users = [];
// localStorage.setItem("users", JSON.stringify(users));


function signUp(){
let name = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
// let userList = JSON.parse(localStorage.getItem("users") || "[]");
let userList = [];
if(password.value == confirmPassword.value){
  let user={
    name: name.value,
    password: password.value,
  }
  userList.push(user);
  localStorage.setItem("users", JSON.stringify(userList));
  let url = "../pages/userpage.html?u=" + name.value;
  window.location.href = url;
  }
}


function login(){
  let name = document.getElementById("loginusername");
  let password = document.getElementById("loginpassword");
  let userList = JSON.parse(localStorage.getItem("users") || "[]");
  let checkUser = false; 
  let adminName = "admin";
  let adminPass = "admin";

  if (name.value == adminName && password.value == adminPass){
    
    let url = "../pages/adminpage.html?a=" + name.value;
    window.location.href = url;
  }

  else{
    for(let i=0; i < userList.length; i++){
      if(name.value == userList[i].name 
        && password.value == userList[i].password){
          checkUser = true;
          break
      }
    }
    if (checkUser){
      let url = "../pages/userpage.html?u=" + name.value;
      window.location.href = url;
    }
    else{
      // console.log(alert);
      window.alert("wrong username or password")
    }
  }
}
