let para = document.createElement("p");
para.innerText = "Hey I'm red";
document.querySelector("body").append(para);

para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "Hey I'm blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "me too";

div.append(h1);
div.append(para2);

document.querySelector("body").append(div);

div.classList.add("mstyle");
