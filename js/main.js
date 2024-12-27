document.addEventListener("DOMContentLoaded", () => {
    const createSeamlessMarquee = (selector, speed, direction) => {
        const container = document.querySelector(selector);
        const content = container.innerHTML;
        container.innerHTML += content + content;

        const clones = container.querySelectorAll("img");
        clones[1].style.position = "relative";
        clones[1].style[direction === "left" ? "left" : "right"] = direction === "left" ? "-1px" : "1px";

        gsap.set(container, { willChange: "transform" });

        gsap.to(container, {
            xPercent: direction === "left" ? -100 : 100,
            duration: speed,
            repeat: -1,
            ease: "none",
            force3D: true,
            modifiers: {
                xPercent: gsap.utils.wrap(-100, 0),
            },
        });
    };

    createSeamlessMarquee(".marquee-1", 10, "right");
    createSeamlessMarquee(".marquee-2", 8, "left");
    createSeamlessMarquee(".marquee-3", 12, "right");
    createSeamlessMarquee(".marquee-4", 15, "left");

});