window.onload = function() {
const search = document.getElementById("searchquora");
search.addEventListener("focus", searchfocus);
search.addEventListener("blur", searchblur);
function searchfocus(){
    document.getElementById("on-top").style.display="block";
    document.getElementById("box").style.width="550px";
    const collection = document.getElementsByClassName("noneDisplay");
    for (let i = 0; i < 3; i++){
        collection[i].style.display="none";
    }  
}
function searchblur(){
    document.getElementById("on-top").style.display="none";
    document.getElementById("box").style.width="330px";
    const collection = document.getElementsByClassName("noneDisplay");
    for (let i = 0; i < 3; i++){
        collection[i].style.display="inline-block";
    }  
}

const items = document.getElementsByClassName("read-more");
const hiddenitems = document.getElementsByClassName("hidden-text");
for (let i=0; i < 3; i++){
    items[i].addEventListener("click", function(){
        items[i].style.display="none";
        hiddenitems[i].style.display="inline-block";
    })
}


const likes = document.getElementsByClassName("upvote");
const dislikes = document.getElementsByClassName("downvote");
const upvotedtext = document.getElementsByClassName("upvoted-text");
const numbers = document.getElementsByClassName("number-likes");
for (let i=0; i < 3; i++){
    likes[i].addEventListener("click", function(){
        if ( upvotedtext[i].style.display == "none" || upvotedtext[i].style.display === ""){
            upvotedtext[i].style.display="block";
            likes[i].style.backgroundColor="rgb(59, 146, 228)";
            dislikes[i].style.backgroundColor="rgba(241, 241, 241, 0.774)";
            var x = 0;
            x = parseInt(numbers[i].innerHTML) + 1;
            numbers[i].innerHTML = x;
        }
        else{
            upvotedtext[i].style.display="none";
            likes[i].style.backgroundColor="rgba(241, 241, 241, 0.774)";
            dislikes[i].style.backgroundColor="rgba(241, 241, 241, 0.774)";
            var x = 0;
            x = parseInt(numbers[i].innerHTML) - 1;
            numbers[i].innerHTML = x;
        }
    })
    dislikes[i].addEventListener("click", function(){
        if ( upvotedtext[i].style.display == "block" ){
            upvotedtext[i].style.display="none";
            likes[i].style.backgroundColor="rgba(241, 241, 241, 0.774)";
            dislikes[i].style.backgroundColor="rgba(209, 78, 78, 0.911)";
            var x = 0;
            x = parseInt(numbers[i].innerHTML) - 1;
            numbers[i].innerHTML = x;
        }
        else{
            upvotedtext[i].style.display="none";
            likes[i].style.backgroundColor="rgba(241, 241, 241, 0.774)";
            dislikes[i].style.backgroundColor="rgba(209, 78, 78, 0.911)";
        }
    })
}

onresize = (event) => {
    if (innerWidth < 700){
        document.getElementById("follow-btn").innerHTML = '<i class="fas fa-wifi fa-color"></i>';
        document.getElementById("request-btn").innerHTML = '<i class="fas fa-share fa-color"></i>';
        document.getElementById("answer-btn").innerHTML = '<i class="fa-regular fa-pen-to-square fa-xl fa-color"></i>';
        document.getElementById("lorem-add").innerHTML = 'There might be multiple reasons for using Lorem, Nulla ut eleifend ipsum. Morbi eu lectus neque..';
    }
    else{
        document.getElementById("follow-btn").innerHTML = '<i class="fas fa-wifi fa-color"></i> Follow';
        document.getElementById("request-btn").innerHTML = '<i class="fas fa-share fa-color"></i> Request';
        document.getElementById("answer-btn").innerHTML = '<i class="fa-regular fa-pen-to-square fa-xl fa-color"></i> Answer';
        document.getElementById("lorem-add").innerHTML = 'There might be multiple reasons for using Lorem, Nulla ut eleifend ipsum. Morbi eu lectus neque. Nam fringilla mi tortor, vestibulum condimentum sapien rhoncus eu. Maecenas scelerisque vel nisl eget porttitor..'
    }
};
if (innerWidth < 700){
    document.getElementById("follow-btn").innerHTML = '<i class="fas fa-wifi fa-color"></i>';
    document.getElementById("request-btn").innerHTML = '<i class="fas fa-share fa-color"></i>';
    document.getElementById("answer-btn").innerHTML = '<i class="fa-regular fa-pen-to-square fa-xl fa-color"></i>';
    document.getElementById("lorem-add").innerHTML = 'There might be multiple reasons for using Lorem, Nulla ut eleifend ipsum. Morbi eu lectus neque..';
}
else{
    document.getElementById("follow-btn").innerHTML = '<i class="fas fa-wifi fa-color"></i> Follow';
    document.getElementById("request-btn").innerHTML = '<i class="fas fa-share fa-color"></i> Request';
    document.getElementById("answer-btn").innerHTML = '<i class="fa-regular fa-pen-to-square fa-xl fa-color"></i> Answer';
    document.getElementById("lorem-add").innerHTML = 'There might be multiple reasons for using Lorem, Nulla ut eleifend ipsum. Morbi eu lectus neque. Nam fringilla mi tortor, vestibulum condimentum sapien rhoncus eu. Maecenas scelerisque vel nisl eget porttitor..'
}


}



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });