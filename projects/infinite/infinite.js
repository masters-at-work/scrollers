const sections = gsap.utils.toArray(".section");

let maxWidth = 0;

const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
        maxWidth += section.offsetWidth;
    });
};
getMaxWidth();

ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

let scrollTween = gsap.to(sections, {
    x: () => -(maxWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: true,
        end: "+=5000",
        invalidateOnRefresh: true,
    },
});

ScrollTrigger.create({
    start: 0.1,
    end: () => ScrollTrigger.maxScroll(window) - 1,
    refreshPriority: -100, // always update last
    onLeave: (self) => {
        self.scroll(self.start + 1);
        ScrollTrigger.update();
    },
    onLeaveBack: (self) => {
        self.scroll(self.end - 1);
        ScrollTrigger.update();
    },
});
