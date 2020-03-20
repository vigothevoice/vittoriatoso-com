import { gsap } from "gsap";

const cursorScript = () => {
  var follow = document.getElementById("circle-follow");

  const moveCircle = e => {
    gsap.to(follow, 0.1, {
      x: e.clientX,
      y: e.clientY
    });
  };

  window.addEventListener("mousemove", e => {
    moveCircle(e);
  });

  const checkLinks = e => {
    let menuLinks = [...document.querySelectorAll(".nav-link")];
    menuLinks.map(singleLink => {
        singleLink.addEventListener("mouseover", e => {
          gsap.to(follow, 0.4, {
            ease: "ease.out",
            width: "5px",
            height: "5px"
          });
        });
        singleLink.addEventListener("mouseout", e => {
          gsap.to(follow, 0.4, {
            ease: "ease.out",
            width: "10px",
            height: "10px"
          });
        });
        singleLink.addEventListener("mousedown", e => {
          gsap.to(follow, 0.3, {
            ease: "ease.out",
            width: "35px",
            height: "35px",
            backgroundColor: "transparent",
            border: "2px solid #fff",
            top: "-20px",
            left: "-20px"
          });
        });
        singleLink.addEventListener("mouseup", e => {
          gsap.to(follow, 0.4, {
            ease: "ease.in",
            width: "10px",
            height: "10px",
            backgroundColor: "white",
            border: "none",
            top: "-10px",
            left: "-10px"
          });
        });
    });
  };

  checkLinks();
};


/* animation portrait  --hover*/

const portraitAnimate = () => {

    const portrait = document.getElementsByClassName("img__portrait");
    const bgImage =document.getElementsByClassName("img__bg2");

    portrait[0].addEventListener("mouseover", e => {
        bgImage[0].classList.add("--hover");
      });
      portrait[0].addEventListener("mouseout", e => {
        bgImage[0].classList.remove("--hover");        
      });

}

export { cursorScript, portraitAnimate };
