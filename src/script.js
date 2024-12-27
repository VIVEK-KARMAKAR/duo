let crsr = document.getElementById('cursor');
let container = document.querySelector("#container")
let textArea = document.querySelector(".text-area")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x-10+'px'
    crsr.style.top = dets.y-10+'px'
})


function init() {
    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#container", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

init()

var tl = gsap.timeline({

    scrollTrigger: {
        trigger: '#Hero h1',
        scroller: '#container',
        start: 'top 27%',
        end: 'top 0',
        scrub: 2
    }
})

tl.to('#Hero h1', {
    x:-100,
}, "same")
tl.to('#Hero h2', {
    x:100,
}, "same")
tl.to('#Hero #videoHead', {
    width: '90%',
}, 'same')
tl.to('#Hero video', {
    width: '90%',
}, 'same')


var tl2 = gsap.timeline({

    scrollTrigger: {
        trigger: '#Hero h2',
        scroller: '#container',
        start: 'top 100px',
        scrub: 2,
        // markers: true
    }
})

tl2.to('#container', {
    backgroundColor: '#fff',
},)

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#LandingPage h1",
        scroller: "#container",
        // markers:true,
        start: "top -170%",
        end: "top -230%",
        scrub: 1
    }
})

tl3.to('#container', {
    backgroundColor: '#0F0D0D',
},)

// fourth

var clients = document.querySelectorAll('.client')

clients.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-img");
        crsr.style.height = '300px';
        crsr.style.width = '450px';
        crsr.style.borderRadius = "0";
        crsr.style.zIndex = "100";
        crsr.style.mixBlendMode = "normal";
        crsr.style.backgroundImage = `url(${att})`;
        crsr.style.backgroundSize = "cover"; // Ensures the image covers the element
        crsr.style.backgroundPosition = "center"; // Centers the image
        crsr.style.backgroundRepeat = "no-repeat"; // Prevents tiling of the image
    });
    elem.addEventListener("mouseleave", function () {
        // Reset the crsr styles on mouse leave if needed
        crsr.style.height = '20px';
        crsr.style.width = '20px';
        crsr.style.borderRadius = '100%';
        crsr.style.backgroundImage = '';
        crsr.style.backgroundSize = '';
        crsr.style.backgroundPosition = '';
        crsr.style.backgroundRepeat = '';
        crsr.style.zIndex = "9";
    });
})

var a = document.querySelectorAll("nav a")
var box = document.querySelector('#nav')
// console.log(a);

a.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        box.style.display = "block"
        box.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function () {
        box.style.display = "none"
        box.style.opacity = "0"
    })
})