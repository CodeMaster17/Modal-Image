console.log("JS file ran")
var logo=document.getElementById('logo');
var head=document.getElementById('head');
var cross=document.getElementById('cross');
var poster=document.getElementById('poster-img');
var container=document.getElementById('mega-container');
var logoc=document.getElementsByClassName('logo-container');
console.log(container);

logo.addEventListener('click',()=>{
    logo.style.display="none";
    // logoc.style.display="none";
    container.style.display="block";
            console.log("logo is clicked");
     head.innerHTML="The King is here";
    poster.src="img/thumbnail.jpg";
    logo.style.display="none";
    
});
cross.addEventListener('click',()=>{
    container.style.display="none";
    logo.style.display="block";

});