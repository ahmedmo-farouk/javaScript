

let mainColors = localStorage.getItem("color_option");
if (mainColors !== null){
    //console.log(localStorage.getItem("color_option"));
    document.documentElement.style.setProperty('--main--color',mainColors)
    document.querySelectorAll(".c li").forEach(a => {
        a.classList.remove("active");
    if (a.dataset.color === mainColors){
        a.classList.add("active");
    }
})};

//click on toggle setting
document.querySelector(".toggle i").onclick = function (){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};

//click on toggle setting
//switch colors
let colorsli = document.querySelectorAll(".c li");
colorsli.forEach(li =>{
    li.addEventListener("click",(e) =>{
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color)
        localStorage.setItem("color_option",e.target.dataset.color);
        handleActive(e);
    })
});

        /*
        function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}

         */

//select landing page 
let landingpage = document.querySelector(".landing-page") 
let imgsArray = ["01.jpg" ,"02.jpg","03.jpg","4.jpg"];
//switch backbround
let backgroundOption = true;
let backgroundinterval;
let background = localStorage.getItem("backgroud_option");
if(background !== null){
    //console.log(background)
    //console.log(typeof(background))
    if(background === null){
        backgroundOption = true;
    }else{
        backgroundOption = false;
    }
    document.querySelectorAll(".random span").forEach(el => {
        el.classList.remove("active");
    });
    if(background === 'true'){
        document.querySelector(".random .yes").classList.add("active");
    }else{
        document.querySelector(".random .no").classList.add("active");
    }
}
let randombackel = document.querySelectorAll(".random span");
randombackel.forEach(sp =>{
    sp.addEventListener("click",(e) =>{
        handleActive(e);
                /*
        function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}

         */
        if(e.target.dataset.back === 'yes'){
            backgroundOption = true;
            randomze ();
            localStorage.setItem("backgroud_option",true)
        }
        else{
            backgroundOption = false;
            clearInterval(backgroundinterval);
            localStorage.setItem("backgroud_option",false)
        }
    })
});
function randomze (){
    if (backgroundOption === true){
        backgroundinterval = setInterval(function(){
            let random = Math.floor(Math.random() *imgsArray.length )
            landingpage.style.backgroundImage = 'url("image/'+  imgsArray[random] +'")';
            console.log(random)
        },1000);
    }
}
randomze ();

// select skills 
let ourskills = document.querySelector(".skills")

window.onscroll = () =>{
    let skillsoffsettop = ourskills.offsetTop;
    let skillsouterheight = ourskills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;
    let z =  skillsoffsettop + skillsouterheight - windowheight;
    if ( windowscrolltop >=  z) {
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");
        allskills.forEach(s => {
            s.style.width = s.dataset.progress;
        });
    }else if( windowscrolltop <=  z){
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");
        allskills.forEach(s => {
        s.style.width = s.dataset.progress;
     })
    }   
};

// create popup the image

let ourgallery = document.querySelectorAll(".gallery img");
ourgallery.forEach( img => {
    img.addEventListener('click' , (e) => {
        let overlay = document.createElement("div")
        overlay.className = 'popup-opverlay';
        document.body.appendChild(overlay)

        let popupbox = document.createElement("div")
        popupbox.className = 'popup-box';

        if( img.alt !== null){
            let imgHeading = document.createElement("h3")
            let imgtext = document.createTextNode(img.alt);
            imgHeading.appendChild(imgtext);
            popupbox.appendChild(imgHeading);
        }

        let  popupimage = document.createElement("img")
        popupimage.src = img.src;
        popupbox.appendChild(popupimage)
        document.body.appendChild(popupbox);

        let closebutton = document.createElement("span");
        let close = document.createTextNode("x");
        closebutton.appendChild(close);
        closebutton.className = 'close-button' ;
        popupbox.appendChild(closebutton);
    })
})
//close 
document.addEventListener("click", function(e){
    if(e.target.classList == 'close-button'){
        e.target.parentNode.remove();
        document.querySelector(".popup-opverlay").remove();
    }
})
// select All Billets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".link a");
function scrollTosomewhere(element){
    element.forEach(ele =>{
        ele.addEventListener("click",(e) =>{
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            })
        })
    })
}
scrollTosomewhere(allBullets);
scrollTosomewhere(allLinks);

//hindle Active state
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletlocalItem = localStorage.getItem("bullets_option");

if (bulletlocalItem !== null){
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
        
    });
    if(bulletlocalItem === 'block'){
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-ption .yes").classList.add("active");
        
    }
    else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
        
    }
}
bulletsSpan.forEach(span =>{
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'show'){
            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_Option",'black')
        }
        else{
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_Option",'none')
        }
        handleActive(e);
    })
});
//rest button
document.querySelector(".reset-option").onclick = function(){
    //localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("backgroud_option");
    localStorage.removeItem("bullets_option");
    window.location.reload();
    
}
//toggle menu
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".link");
toggleBtn.onclick = function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active")
    tlinks.classList.toggle("open")
}
document.addEventListener("click",(e)=>{
    if (e.target !== toggleBtn && e.target !== tlinks){
        if(tlinks.classList.contains("open")){
            toggleBtn.classList.toggle("menu-active");
            tlinks.classList.toggle("open");
        }
    }
})
tlinks.onclick = function(e){
    e.stopPropagation();
}
