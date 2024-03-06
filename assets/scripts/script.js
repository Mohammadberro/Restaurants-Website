let img_src = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
let res_name = [
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
  "Restaurant-Name",
];
let menu_item = {
  platte_name: "Burgur",
  price: "10$",
};
let res_menue = {
  menu_item,
  menu_item,
  menu_item,
  menu_item,
  menu_item,
  menu_item,
  menu_item,
  menu_item,
  menu_item,
  menu_item,
  menu_item,
};
let res_menus = {
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
  res_menue,
};
localStorage.setItem("img_src", JSON.stringify(img_src));
localStorage.setItem("res_name",JSON.stringify(res_name));
localStorage.setItem("res_menus",JSON.stringify(res_menus));
localStorage.setItem("login","true")

window.onload = () => {
  let url = window.location.href;
  if (checkSearchURL(url) && !checkDisplayURL(url)) {
    let search = SearchURL(url);
    loadSearch(search)
  }
  if (checkDisplayURL(url)) {
    let rest = SearchURL(url);
    DisplayRest(rest)
  }  
  if(window.location.href.includes("Rest")){
  loadAllRest();
  }
};
function checkSearchURL(url) {
  if (url.includes("?s")) {
    return true;
  } else {
    return false;
  }
}
function checkDisplayURL(url) {
  if (url.includes("?r")) {
    return true;
  } else {
    return false;
  }
}
function checkLogin(url){
    if (url.includes("?u=")) {
        return true;
      } else {
        return false;
      }
}
function Search(input) {
  let link = window.location.href;
  if (!checkSearchURL(link)) {
    window.location.href += "?s=" + input.value;
  } else {
    let new_link = "";
    for (let i = 0; i < link.length; i++) {
      if (link[i] == "?") {
        new_link += "?s=" + input.value;
        break;
      } else {
        new_link += link[i];
      }
    }
    window.location.href = new_link;
  }
}
function SearchURL(input) {
  let result = "";
  let index = 0;
  for (let i = 0; i < input; i++) {
    if (input[i] == "=") {
      index = i + 1;
      break;
    }
  }
  for (let i = index; i < input; i++) {
    result += input[i];
  }
  return (result)
}


function favorite() {
  let rest = document.getElementById("favorite");
  if (rest.style.filter != "grayscale(1)") {
    rest.style.filter = "grayscale(1)";
  } else {
    rest.style.filter = "grayscale(0)";
  }
}

function loadAllRest() {
  let max = 101;
  let name = JSON.parse(localStorage.getItem("res_name")|| "[]");
  let src = JSON.parse(localStorage.getItem("img_src")|| "[]");
  let div = document.getElementById("Display-Rest");
  for (let i = 0; i < 3; i++) {
    let section = document.createElement("div");
    for (let i = 0; i < max; i++) {
      let card = document.createElement("div");
      let img_card = document.createElement("div");
      let img = document.createElement("img");
      let card_body = document.createElement("div");
      let btn = document.createElement("button");

      card.classList.add("card");
      img_card.classList.add("card-header");
      card_body.classList.add("card-body");
      img.classList.add("card-img");
      btn.classList.add("main-light-bg");

      img.src = src[i];     
      btn.id = name[i];
      btn.innerText = "Open";
      btn.href = "/assets/pages/DisplayRest.html/";
      btn.onclick = () => {
        window.location.href = "/assets/pages/DisplayRest.html?r=" + btn.id;
      };
 

      img_card.appendChild(img);
      card_body.appendChild(btn);
      card.appendChild(img_card);
      card.appendChild(card_body);
      section.appendChild(card);
    }
    let br = document.createElement("br");
    section.appendChild(br);
    div.appendChild(section);
  }
}
function loadSearch(res) {
  let max = 101;
  let name = Jason.parse(localStorage.getItem("res_name")|| "[]");
  name = name.split(" ");
  let src = Jason.parse(localStorage.getItem("img_src")|| "[]");
  let div = document.getElementById("Display-Rest");
  for (let i = 0; i < 3; i++) {
    let section = document.createElement("div");
    for (let i = 0; i < max; i++) {
      if (res_name[i].includes(res)) {
        let card = document.createElement("div");
        let img_card = document.createElement("div");
        let img = document.createElement("img");
        let card_body = document.createElement("div");
        let btn = document.createElement("button");

        card.classList.add("card");
        img_card.classList.add("card-header");
        card_body.classList.add("card-body");
        img.classList.add("card-img");
        btn.classList.add("main-light-bg");

        img.src = src[i];
        btn.id = name[i];
        btn.innerText = "Open";
        btn.onclick = () => {
          window.location.href = "/assets/pages/DisplayRest.html?r=" + btn.id;
        };

        img_card.appendChild(img);
        card_body.appendChild(btn);
        card.appendChild(img_card);
        card.appendChild(card_body);
        section.appendChild(card);
      }
    }
    let br = document.createElement("br");
    section.appendChild(br);
    div.appendChild(section);
  }
}
function DisplayRest(url){

}

if( localStorage.getItem("login")== "true"){
    setTimeout(()=>{
        console.log(
        document.getElementById("profile"));
    },2000)
    
  }