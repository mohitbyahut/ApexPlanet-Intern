// Gsap.......................

gsap.from("#navbar1 .box1", {
  y: -10,
  opacity: 0,
  duration: 2,
  delay: 1,
  scale: 0.3,
});
let tl = gsap.timeline();

tl.from("#navbar2 ul li", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.5,
});
tl.from("#navbar2 .box3", {
  x: 50,
  opacity: 0,
  duration: 1,
});

Shery.imageEffect("#main-container .slide", {
  style: 3,
  // debug:true,
  config: {
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 12, range: [0, 100] },
    uFrequencyZ: { value: 10, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: "-1", range: [-9999999, 9999999] },
    aspect: { value: 2.057142857142857 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.06, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

tl.from("#container1 p", {
  opacity: 0,
  // y:20,
  duration: 1,
  delay: 0.5,
  scale: 0.5,
  scrollTrigger: {
    trigger: "#container1 h1",
    scroller: "body",
    //  markers:true,
    start: "top 65%",
    end: "top 40%",
    scrub: 1,
  },
});
tl.from("#container2 ", {
  opacity: 0,
  y: 100,
  duration: 2,
  delay: 1,
  // scale:0.5,
  scrollTrigger: {
    trigger: "#container1 ",
    scroller: "body",
    //  markers:true,
    start: "top 40%",
    end: "top 10%",
    scrub: 1,
  },
});
tl.from("#container3 ", {
  opacity: 0,
  y: 100,
  duration: 2,
  delay: 1,
  // scale:0.5,
  scrollTrigger: {
    trigger: "#container2 ",
    scroller: "body",
    //  markers:true,
    start: "top 55%",
    end: "top 25%",
    scrub: 1,
  },
});
tl.from("#container4 h1 ", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 1,
  // scale:0.5,
  scrollTrigger: {
    trigger: "#container4 h1 ",
    scroller: "body",
    //  markers:true,
    start: "top 75%",
    end: "top 50%",
    scrub: 1,
  },
});
tl.from("#container4 p ", {
  opacity: 0,
  y: 40,
  duration: 2,
  delay: 2,
  // scale:0.5,
  scrollTrigger: {
    trigger: "#container4 p ",
    scroller: "body",
    //  markers:true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
tl.from("#container4 h2 ", {
  opacity: 0,
  x: 50,
  duration: 2,
  delay: 2,
  // scale:0.5,
  scrollTrigger: {
    trigger: "#container4 h2 ",
    scroller: "body",
    //  markers:true,
    start: "top 85%",
    end: "top 65%",
    scrub: 1,
  },
});
tl.from("#container4 h3 ", {
  opacity: 0,
  x: -50,
  duration: 2,
  delay: 2,
  // scale:0.5,
  scrollTrigger: {
    trigger: "#container4 h3 ",
    scroller: "body",
    //  markers:true,
    start: "top 85%",
    end: "top 65%",
    scrub: 1,
  },
});
tl.from("#container4 .btn3 ", {
  opacity: 0,
  // x:-40,
  duration: 2,
  delay: 2,
  scale: 0.5,
  scrollTrigger: {
    trigger: "#container4 .btn3 ",
    scroller: "body",
    //  markers:true,
    start: "top 85%",
    end: "top 65%",
    scrub: 1,
  },
});
tl.from("#container4 .box2a ", {
  opacity: 0,
  // x:-40,
  duration: 3,
  delay: 2,
  scale: 0.5,
  scrollTrigger: {
    trigger: "#container4 .box2 ",
    scroller: "body",
    //  markers:true,
    start: "top 55%",
    end: "top 30%",
    scrub: 1,
  },
});
tl.from("#container6 ", {
  opacity: 0,
  y: -100,
  duration: 1,
  delay: 1,
  // scale:0.5,
  scrollTrigger: {
    trigger: "#container6 ",
    scroller: "body",
    //  markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
  },
});

Shery.imageEffect("#container4 .box2a2 img", {
  style: 2,
  //   debug:true,
  config: {
    resolutionXY: { value: 100 },
    distortion: { value: true },
    mode: { value: -3 },
    mousemove: { value: 0 },
    modeA: { value: 1 },
    modeN: { value: 0 },
    speed: { value: 1, range: [-500, 500], rangep: [-10, 10] },
    frequency: { value: 50, range: [-800, 800], rangep: [-50, 50] },
    angle: { value: 0.5, range: [0, 3.141592653589793] },
    waveFactor: { value: 1.4, range: [-3, 3] },
    color: { value: 10212607 },
    pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
    quality: { value: 5, range: [0, 10] },
    contrast: { value: 1, range: [-25, 25] },
    brightness: { value: 1, range: [-1, 25] },
    colorExposer: { value: 0.18, range: [-5, 5] },
    strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
    exposer: { value: 8, range: [-100, 100] },
    zindex: { value: "1", range: [-9999999, 9999999] },
    aspect: { value: 1.2061666870117187 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.21, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.to(
  "#container8 .box1b,#container8 .box2b, #container8 .box3b, #container8 .box4b, #container8 .box5b, #container8 .box6b",
  {
    duration: 7,
    delay: 1,
    repeat: -1,
    yoyo: true,
    rotate: 360,
  }
);

tl.from("#container8 .box1", {
  y: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#container8 .box1",
    scroller: "body",
    //  markers:true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});
tl.from("#container9 .main-box1", {
  y: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#container9 .main-box1",
    scroller: "body",
    //  markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});

tl.from("#container11 .main-box", {
  y: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#container11 .main-box",
    scroller: "body",
    //  markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
tl.from("#container12", {
  y: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#container12",
    scroller: "body",
    //  markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});

// main-container......................

let slide = document.querySelectorAll(".slide");

let count = 0;
slide.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
function next() {
  count++;
  if (count == slide.length) {
    count = 0;
  }
  myFun();
}
function pre() {
  count--;
  if (count == -1) {
    count = slide.length - 1;
  }
  myFun();
}
function myFun() {
  slide.forEach((image) => {
    image.style.transform = `translateX(-${count * 100}%)`;
  });
}

// container 8...............

let boxx1 = document.querySelector("#container8 .box1a");
let bis1 = document.querySelector("#container8 .box1b");

bis1.addEventListener("mouseenter", () => {
  boxx1.style.transform = `translate(-${0}%)`;
  boxx1.style.opacity = 1;
});
bis1.addEventListener("mouseleave", () => {
  boxx1.style.transform = `translate(-${100}%)`;
});

let boxx2 = document.querySelector("#container8 .box2a");
let bis2 = document.querySelector("#container8 .box2b");

bis2.addEventListener("mouseenter", () => {
  boxx2.style.transform = `translate(-${0}%)`;
  boxx2.style.opacity = 1;
});
bis2.addEventListener("mouseleave", () => {
  boxx2.style.transform = `translate(-${100}%)`;
});

let boxx3 = document.querySelector("#container8 .box3a");
let bis3 = document.querySelector("#container8 .box3b");

bis3.addEventListener("mouseenter", () => {
  boxx3.style.transform = `translate(-${0}%)`;
  boxx3.style.opacity = 1;
});
bis3.addEventListener("mouseleave", () => {
  boxx3.style.transform = `translate(-${100}%)`;
});

let boxx4 = document.querySelector("#container8 .box4a");
let bis4 = document.querySelector("#container8 .box4b");

bis4.addEventListener("mouseenter", () => {
  boxx4.style.transform = `translate(-${0}%)`;
  boxx4.style.opacity = 1;
});
bis4.addEventListener("mouseleave", () => {
  boxx4.style.transform = `translate(-${100}%)`;
});

let boxx5 = document.querySelector("#container8 .box5a");
let bis5 = document.querySelector("#container8 .box5b");

bis5.addEventListener("mouseenter", () => {
  boxx5.style.transform = `translate(-${0}%)`;
  boxx5.style.opacity = 1;
});
bis5.addEventListener("mouseleave", () => {
  boxx5.style.transform = `translate(-${100}%)`;
});

let boxx6 = document.querySelector("#container8 .box6a");
let bis6 = document.querySelector("#container8 .box6b");

bis6.addEventListener("mouseenter", () => {
  boxx6.style.transform = `translate(-${0}%)`;
  boxx6.style.opacity = 1;
});
bis6.addEventListener("mouseleave", () => {
  boxx6.style.transform = `translate(-${100}%)`;
});

// container 4...............

let round = document.querySelector(".box2a1");
let i = 0,
  j = 1,
  intervalId;
let myFun1 = () => {
  intervalId = setInterval(() => {
    round.style.rotate = `-${++i * 360}deg`;
  }, 5000);
};
myFun1();

// container 6................

let box1 = document.querySelector("container6 .box1");
let a = document.querySelector("#container6 .main-box");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

a.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  a.scrollLeft += evt.deltaY;
  a.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
  a.style.scrollBehavior = "smooth";
  a.scrollLeft += 225;
});
backbtn.addEventListener("click", () => {
  a.style.scrollBehavior = "smooth";
  a.scrollLeft -= 235;
});

// container 9.....................

let sigma = document.querySelectorAll("#container9 .box1");
let count1 = 0;
sigma.forEach((change, index) => {
  change.style.left = `${index * 100}%`;
});

function myFun3() {
  sigma.forEach((image11) => {
    image11.style.transform = `translateX(-${count1 * 100}%)`;
  });
}
setInterval(() => {
  count1++;
  if (count1 == sigma.length) {
    count1 = 0;
  }
  myFun3();
}, 2000);

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown if user clicks outside
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
