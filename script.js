if (window.innerWidth >= 768) {
  // Code for animations
  gsap.from(".leaf-section", {
      scrollTrigger: ".leaf-section",
      x: -1600,
      duration: 1,
      ease: "power2.in"
  });

  gsap.from(".twplus img", {
      y: 80,
      ease: "power2.inOut", // Use a smoother ease function
      scrollTrigger: {
          trigger: ".twplus img",
          scrub: 1, // Adjust the scrub value for smoother animation (1 is the default)
          y: -150
      }
  });

  gsap.from(".leaf", {
      y: 80,
      ease: "power2.inOut", // Use a smoother ease function
      scrollTrigger: {
          trigger: ".leaf",
          scrub: 1, // Adjust the scrub value for smoother animation (1 is the default)
          y: -150
      }
  });

  gsap.to(".horizontal .box1", {
      transform: "translateX(-600%)",
      scrollTrigger: {
          trigger: ".horizontal",
          scroller: "body",
          start: "top 0%",
          end: "top -450%",
          scrub: 1,
          pin: true
      }
  });
}
