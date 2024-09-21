let card = document.querySelector(".trend");
let card2=document.getElementById("trendsec");
let about=document.querySelector(".about");
console.log(card);
let blog=document.querySelector(".trend2");
let mainPage=document.querySelector(".main");
let footertext=document.querySelector(".footertext");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="block";
    footertext.style.display="block"

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="rgb(2,173,173)";
    document.getElementById("shops").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("contact").style.color="black";
   
}
function shops(){
    mainPage.style.display="none";
    blog.style.display="none";
    about.style.display="none"

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shops").style.color="rgb(2,173,173)";
    document.getElementById("footertext").style.color="black";
}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";
      
    
      
    document.getElementById("blog").style.color="rgb(2,173,173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shops").style.color="black";
    document.getElementById("footertext").style.color="black";
   
}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="block";
      
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shops").style.color="black";
    document.getElementById("footertext").style.color="black";
    document.getElementById("about").style.display="rgb(2,173,173)"
}
function contacts(){
    mainPage.style.dispaly="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    footertext.style.display="block";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shops").style.color="black";
    document.getElementById("footertext").style.display="rgb(2,178,178)";
    document.getElementById("about").style.color="black";
}