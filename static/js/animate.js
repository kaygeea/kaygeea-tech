import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
import { TextPlugin } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js";   

// import { ScrollTrigger } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
// import { MotionPathPlugin } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js";



gsap.registerPlugin(TextPlugin);

const path = `m 23.923379,100.36149 h 34.426326 l -26.103075,6.9943 h 97.87321
            m 23.923828,100.22852 v 0.26562 h 33.421875 l -25.132812,6.73438 0.0332,0.25976
            h 97.873049 v -0.26562 H 33.257812 l 25.126954,-6.73243 -0.03516,-0.26171 z`

gsap.to("#light_mode_logo", {
    duration: 2.5,
    ease: "none",
    motionPath: path
})