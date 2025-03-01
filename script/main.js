
const body = document.body;

const colors=['rgb(244, 247, 255)','rgb(204, 255, 219)','rgb(204,255, 255)', 'rgb(255,204, 255)','rgb(255,204, 204)','rgb(255,204, 229)']

body.style.backgroundColor='rgb(244, 247, 255)';

document.getElementById("colorBtn").addEventListener("click",function(){

    const colorIndex=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorIndex];
})

document.getElementById("blog-btn").addEventListener("click",function(){
    window.location.href="./Blog.html"
})

const current=document.getElementById("current-date");
let d = new Date();

let date = d.getDate();
let monthIndex = d.getMonth(); 
let year = d.getFullYear();
let day=d.getDay();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayName = days[day];

let monthName = months[monthIndex];


const p=document.createElement("p");
p.innerHTML = `<h1 class="text-2xl">${dayName},</h1>
 <span class="text-2xl font-bold">${monthName} ${date} ${year}</span>`;
current.appendChild(p);



