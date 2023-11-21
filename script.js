var scroll = 0

let gridlayout = document.getElementById("gridDiv");
let gridlayout2 = document.getElementById("gridDiv2");
let gridlayout3 = document.getElementById("gridDiv3");
let gridlayout4 = document.getElementById("gridDiv4");
let gridlayout5= document.getElementById("gridDiv5");

let scrollStart = 0;
var nameFont = 0;
var nameFont2 = 0;


function changeScrollStart() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    if(windowHeight > 900) {
        scrollStart = 1200;
    } else if(windowHeight > 700 && windowHeight < 900) {
        scrollStart = 1125;
    } else if (windowHeight > 500 && windowHeight < 700) {
        scrollStart = 1050;
    } else if (windowHeight > 200 && windowHeight < 500) {
        scrollStart = 975;
    } else {
        scrollStart = 900;
    }

    console.log(windowHeight);

    if(windowWidth > 1600) {
        nameFont = 200;
        nameFont2 = 100;
    } else if(windowWidth > 1300 && windowWidth <= 1600) {
        nameFont = 160;
        nameFont2 = 60;
    } else {
        nameFont = 140;
        nameFont2 = 40;
    }
}

changeScrollStart();

window.addEventListener('resize', function() {
    changeScrollStart();
});


// Function to check if an element is starting to come into view from the bottom
function isElementStartingToEnterFromBottom(el, threshold = 0) {
    var rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - threshold &&
           rect.bottom >= threshold;
}

// Function to get the scroll position of an element when it starts to come into view from the bottom
function getScrollPositionWhenStartingToEnterFromBottom(elementId, threshold) {
    var element = document.getElementById(elementId);

    if (element && isElementStartingToEnterFromBottom(element, threshold)) {
        var scrollPosition = element.getBoundingClientRect().top;
        return scrollPosition
    } else {
        return 0;
    }
}

document.addEventListener('scroll', function() {
    let name = document.getElementById("name");
    let hi = document.getElementById("hi");
    let name2 = document.getElementById("name2");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    name.style.opacity = 1 - scrollTop/ 400;
    hi.style.opacity = 1 - scrollTop / 400;
    if(scroll < scrollTop) {
        setTimeout(function() {
            name2.style.opacity = scrollTop/1000;
        }, 100)
    } else {
        name2.style.opacity = scrollTop/1000;
    } 

    name2.style.fontSize = nameFont2 + scrollTop / 20 + "px";

    if(name.style.opacity > 0) {
        name.style.fontSize = nameFont + scrollTop / 20 + "px";
    }
    scroll = scrollTop;

    if(scrollTop > scrollStart) {
        let p1 = document.getElementById("p1");
        let p2 = document.getElementById("p2");
        let p3 = document.getElementById("p3");
        let p4 = document.getElementById("p4");
        let p5 = document.getElementById("p5");
        let mainDiv = document.getElementById("mainDiv");

        if(scrollTop < scrollStart + 300) {
            p1.style.opacity = 1;

        } else if (scrollTop > scrollStart + 300) {
            p1.style.opacity = 0.17
            ;
        }

        if(scrollTop < scrollStart + 550 && scrollTop > scrollStart + 300) {
            p2.style.opacity = 1;

        } else {
            p2.style.opacity = 0.17
            ;
        }

        if(scrollTop < scrollStart + 700 && scrollTop > scrollStart + 550) {
            p3.style.opacity = 1;
        } else {
            p3.style.opacity = 0.17
            ;
        }

        if(scrollTop < scrollStart + 900 && scrollTop > scrollStart + 700) {
            p4.style.opacity = 1;
        } else {
            p4.style.opacity = 0.17
            ;
        }

        if(scrollTop > scrollStart + 900) {
            p5.style.opacity = 1;
        } else {
            p5.style.opacity = 0.17
            ;
        }

        if(scrollTop > scrollStart + 600) {
            mainDiv.style.visibility = "hidden";
        } else if (scrollTop < scrollStart + 400){
            mainDiv.style.visibility = "visible";
        }

        let techSkil1 = document.getElementById("techSkil1");
        let techSkil2 = document.getElementById("techSkil2");
        let techSkil3 = document.getElementById("techSkil3");
        let techSkil4 = document.getElementById("techSkil4");
        let techSkil5 = document.getElementById("techSkil5");


        if(scrollTop > scrollStart + 1500) {
            techSkil1.style.opacity = 1;
            techSkil1.style.transform = "translateY(0px)";
        } else {
            techSkil1.style.opacity = 0;
            techSkil1.style.transform = "translateY(50px)";
        }

        if(scrollTop > scrollStart + 1850) {
            techSkil2.style.opacity = 1;
            techSkil2.style.transform = "translateY(0px)";
        } else {
            techSkil2.style.opacity = 0;
            techSkil2.style.transform = "translateY(50px)";
        }

        if(scrollTop > scrollStart + 2250) {
            techSkil3.style.opacity = 1;
            techSkil3.style.transform = "translateY(0px)";
        } else {
            techSkil3.style.opacity = 0;
            techSkil3.style.transform = "translateY(50px)";
        }

        if(scrollTop > scrollStart + 2550) {
            techSkil4.style.opacity = 1;
            techSkil4.style.transform = "translateY(0px)";
        } else {
            techSkil4.style.opacity = 0;
            techSkil4.style.transform = "translateY(50px)";
        }

        if(scrollTop > scrollStart + 3150) {
            techSkil5.style.opacity = 1;
            techSkil5.style.transform = "translateY(0px)";
        } else {
            techSkil5.style.opacity = 0;
            techSkil5.style.transform = "translateY(50px)";
        }


    } else {
        let p1 = document.getElementById("p1");
        p1.style.opacity = 0.17
        ;
    }
})

let icons  = ["./icons/react.svg","./icons/flutter.svg","./icons/react.svg","./icons/html.svg","./icons/css.svg","./icons/js.svg","./icons/angular.svg","./icons/android.svg"];
let titles  = ["React","Flutter","React Native","HTML","CSS","JavaScript","Angular","Android XML"];

let icons2  = ["./icons/java.svg","./icons/swift.svg","./icons/dart.svg","./icons/spring2.svg","./icons/python.svg","./icons/kotlin.svg"];
let titles2  = ["Java","Swift","Dart","Spring Boot","Python","Kotlin"];

let icons3  = ["./icons/firebase.svg","./icons/monodb.svg","./icons/mysql.svg"];
let titles3  = ["Firebase","MongoDB","MySQL"];

let icons4  = ["./icons/photoshop.svg","./icons/illustrator.svg","./icons/premiererpro.svg","./icons/aftereffects.svg","./icons/figma.svg","./icons/xd.svg"];
let titles4  = ["Photoshop","Illustrator","Premiere Pro", "After Effects", "Figma", "XD"];

let icons5  = ["./icons/team2.png","./icons/leader2.png","./icons/communication.png","./icons/problem.png","./icons/critical.png"]; 
let titles5  = ["Team Player","Leadership","Communication", "Problem Solving", "Critical Thinking"];

for(i = 0; i < icons.length; i++ ){
    var div = document.createElement("div");

    div.innerHTML = `<div class="gridElement">
    <img id= "icon" src = "${icons[i]}"> 
    <h3 style= "margin-top: 10px;  font-weight: 300;">${titles[i]}</h3>
    </div>`
    gridlayout.appendChild(div);
}

for(i = 0; i < icons2.length; i++ ){
    var div = document.createElement("div");

    div.innerHTML = `<div class="gridElement">
    <img id= "icon" src = "${icons2[i]}"> 
    <h3 style= "margin-top: 10px;  font-weight: 300;">${titles2[i]}</h3>
    </div>`
    gridlayout2.appendChild(div);
}

for(i = 0; i < icons3.length; i++ ){
    var div = document.createElement("div");

    div.innerHTML = `<div class="gridElement">
    <img id= "icon" src = "${icons3[i]}"> 
    <h3 style= "margin-top: 10px; font-weight: 300;">${titles3[i]}</h3>
    </div>`
    gridlayout3.appendChild(div);
}

for(i = 0; i < icons4.length; i++ ){
    var div = document.createElement("div");

    div.innerHTML = `<div class="gridElement">
    <img id= "icon" src = "${icons4[i]}"> 
    <h3 style= "margin-top: 10px;  font-weight: 300;">${titles4[i]}</h3>
    </div>`
    gridlayout4.appendChild(div);
}

for(i = 0; i < icons5.length; i++ ){
    var div = document.createElement("div");

    div.innerHTML = `<div class="gridElement">
    <img id= "icon" src = "${icons5[i]}"> 
    <h3 style= "margin-top: 10px;  font-weight: 300;">${titles5[i]}</h3>
    </div>`
    gridlayout5.appendChild(div);
}


