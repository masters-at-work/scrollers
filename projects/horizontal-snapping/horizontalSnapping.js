gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        // snap documentation on greensock.com
        // https://greensock.com/docs/v3/Plugins/ScrollTrigger#:~:text=smoothing%20things%20out.-,snap,-Number%20%7C%20Array%20%7C%20Function
        snap: {
          snapTo: 1 / (sections.length - 1),
            duration: 0.2, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
        // start: 500,
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=1000",
    },
});
