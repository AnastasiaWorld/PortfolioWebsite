function revealMenu(){
    document.getElementById("megamenu1").style.display="inline-grid";
}
function hideMenu(){
    document.getElementById("megamenu1").style.display="none";
}
function fleche(){
    item1 = document.getElementById("part1").style.display;
    item2 = document.getElementById("part2").style.display;
    if (item1 == "none"){
        document.getElementById("part1").style.display = "block";
        document.getElementById("part2").style.display = "none";
    }
    else{
        document.getElementById("part2").style.display = "block";
        document.getElementById("part1").style.display = "none";
    }
}
function revealMobileMenu(){
    disp = document.getElementById("menu-mobile").style.display;
    if (disp == "none" || disp === ""){
        document.getElementById("menu-mobile").style.display = "block";
    }
    else{
        document.getElementById("menu-mobile").style.display = "none";
    }
}
/*if (window.innerWidth < 960) {
    document.getElementById("search-menu-mobile").style.display = "none";
    document.getElementById("menu-mobile").style.display = "none";
}*/
    

window.onscroll = function (){
    const list = document.getElementById("item2").classList;
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200){
        list.add("myStyle");
    }
    else{
        list.remove("myStyle");
    }
}
// ********************* Intersection Scroll *********************
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio){
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    });
  };

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})