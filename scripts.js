function revealMenu(){
    document.getElementById("menu-visible").style.display="flex";
    document.getElementById("reveal-button").style.display="none";
    document.getElementById("close-button").style.display="block";
}
function hideMenu(){
    document.getElementById("menu-visible").style.display="none";
    document.getElementById("reveal-button").style.display="block";
    document.getElementById("close-button").style.display="none";
}

(function () {
    const el = document.getElementById('principal-page');
    el.style.minHeight = window.innerHeight + 'px';
  })();

window.onscroll = function (){
    const menu = document.getElementById("row2").classList;
    const items = document.getElementsByClassName("menu-link");
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200){
        menu.add("menu-style");
        for (i = 0; i < items.length; i++){
            items[i].style.color="rgba(209, 209, 209, 0.9)";
        }
    }
    else{
        menu.remove("menu-style");
        for (i = 0; i < items.length; i++){
            items[i].style.color="rgb(209, 209, 209)";
        }
    }
}

const arrows = document.getElementsByClassName("arrow-down");
setTimeout(moveArrow, 200);
function moveArrow(){
    let pos = 0;
    let condition = 1;
    setInterval(moveArrowDown, 40);
    function moveArrowDown(){
        if (condition == 1){
            pos = pos + 3;
            for (i = 0; i < arrows.length; i++){
                arrows[i].style.marginTop = pos + "px";
                if (pos > 30){
                    condition = 0;
                }
            }
            
        }
        else{
            pos = pos - 3;
            for (i = 0; i < arrows.length; i++){
                arrows[i].style.marginTop = pos + "px";
                if (pos == 0){
                    condition = 1;
                }
            }
        }
    }
}


// ********************************* Reveal *********************************
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
        }
        else{
            entry.target.classList.remove('visible');
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
