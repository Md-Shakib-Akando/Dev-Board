
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