import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Description.css';

gsap.registerPlugin(ScrollTrigger);

const StickyScrollSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".word"); // Select all words

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%", // Controls how long it stays
        scrub: true,
        pin: true, // Keeps section fixed
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      words,
      { opacity: 0.2, },
      { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const text = `🚀 I help businesses turn ideas into reliable, scalable software by building apps from the ground up, improving existing systems, and solving the messy problems that slow teams down. Alongside that, I mentor the next generation of developers at Metana. I love tackling real-world problems with code, exploring cutting-edge tech, and (occasionally) questioning my life choices at 2 AM. Let’s connect and build something amazing 🙌`;

  return (
    <section ref={sectionRef} className="max-h-screen max-w-screen h-screen w-screen flex items-center justify-center bg-black text-white">
      <div ref={textRef} className="font-bold w-[80%] m-auto leading-loose">
      {text.split(" ").map((word, i) => (
          <span key={i} className="word inline-block opacity-0 textContainer">
            {word.includes("Metana") ? <a href="https://metana.io" className="text-[#c6ff00]">{word}&nbsp;</a> : <p>{word}&nbsp;</p>}
          </span>
        ))}
      </div>
    </section>
  );
};

export default StickyScrollSection;
