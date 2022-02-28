console.log("JS file ran")
var logo=document.getElementById('logo');
var head=document.getElementById('head');
var cross=document.getElementById('cross');
var poster=document.getElementById('poster-img');
var container=document.getElementById('mega-container');
console.log(container);

logo.addEventListener('click',()=>{

    container.style.display="block";
    logo.innerHTML="";
     head.innerHTML="The King is here";
    poster.src="img/thumbnail.jpg";
    console.log("logo is clicked");
    logo.style.display="none";
    
})
cross.addEventListener('click',()=>{
    container.style.display="none";
    logo.style.display="block";

})