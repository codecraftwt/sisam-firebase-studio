import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);

  // Dynamic content arrays
  const textContent = [
    {
      text: "Managed by a unified platform with",
      highlight: "AI computer vision",
      highlightColor: "text-lime-500",
    },
    {
      text: "Highly configurable to all yards in your network",
      highlight: "",
      highlightColor: "",
    },
    {
      text: "Unlocked value of your existing",
      highlight: "WMS/TMS",
      highlightColor: "text-blue-500",
    },
  ];

  const visualizations = [
    {
      type: "network",
      color: "from-purple-500 to-pink-500",
      elements: 8,
    },
    {
      type: "nodes",
      color: "from-green-500 to-teal-500",
      elements: 12,
    },
    {
      type: "grid",
      color: "from-blue-500 to-cyan-500",
      elements: 16,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate total scroll distance based on number of text blocks
      const textBlocks = gsap.utils.toArray(".text-block");
      const endValue = `${(textBlocks.length - 1) * 100}%`;

      // Pin the right panel with proper end position
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: endValue,
        pin: rightPanelRef.current,
        pinSpacing: false,
        scrub: 1.5,
        markers: false,
      });

      // Text gradient animation (like the GSAP example)
      textBlocks.forEach((element) => {
        gsap.to(element, {
          backgroundImage: "linear-gradient(45deg, #000 100%, #fff 200%, #000 300%)",
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
            markers: false,
          },
        });
      });

      // Animate text + visualization change
      textBlocks.forEach((block, i) => {
        const visualizations = gsap.utils.toArray(".visualization");
        const elements = gsap.utils.toArray(`.viz-${i} .viz-element`);

        // Text animation - slow entrance
        gsap.fromTo(
          block,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              end: "top 40%",
              scrub: 1.2,
            },
          }
        );

        // Visualization animation
        if (visualizations[i]) {
          // First visualization starts visible
          if (i === 0) {
            gsap.set(visualizations[i], { autoAlpha: 1 });
          }

          // Animate other visualizations with slow crossfade
          if (i > 0) {
            gsap.to(visualizations[i], {
              autoAlpha: 1,
              duration: 1.8,
              ease: "sine.inOut",
              scrollTrigger: {
                trigger: block,
                start: "top center",
                end: "bottom center",
                scrub: 1.5,
              },
            });
          }
        }

        // Animate individual elements in the visualization
        if (elements.length) {
          gsap.fromTo(
            elements,
            {
              opacity: 0,
              scale: 0.5,
              y: () => gsap.utils.random(-50, 50),
              x: () => gsap.utils.random(-50, 50),
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              duration: 2.5,
              stagger: 0.1,
              ease: "elastic.out(1, 0.8)",
              scrollTrigger: {
                trigger: block,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Function to render visualization based on type
  const renderVisualization = (vizConfig, index) => {
    const { type, color, elements } = vizConfig;

    switch (type) {
      case "network":
        return (
          <div className={`viz-${index} absolute inset-0 flex items-center justify-center`}>
            <div className="relative w-64 h-64">
              {/* Central node */}
              <div className="viz-element absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-white rounded-full shadow-lg"></div>

              {/* Connecting nodes */}
              {Array.from({ length: elements }).map((_, i) => {
                const angle = (i / elements) * Math.PI * 2;
                const radius = 100;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div key={i}>
                    {/* Connection line */}
                    <div
                      className="absolute top-1/2 left-1/2 w-24 h-px bg-white/30 origin-left"
                      style={{
                        transform: `rotate(${angle}rad)`,
                        width: `${radius}px`,
                      }}
                    ></div>

                    {/* Outer node */}
                    <div
                      className="viz-element absolute w-8 h-8 -ml-4 -mt-4 bg-white rounded-full shadow-lg"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "nodes":
        return (
          <div className={`viz-${index} absolute inset-0 flex items-center justify-center`}>
            <div className="relative w-72 h-72">
              {Array.from({ length: elements }).map((_, i) => {
                const angle = (i / elements) * Math.PI * 2;
                const radius = i % 2 === 0 ? 80 : 120;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const size = 6 + (i % 4);

                return (
                  <div
                    key={i}
                    className="viz-element absolute rounded-full bg-white shadow-lg"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      marginLeft: `-${size / 2}px`,
                      marginTop: `-${size / 2}px`,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        );

      case "grid":
      default:
        return (
          <div className={`viz-${index} absolute inset-0 flex items-center justify-center`}>
            <div className="grid grid-cols-4 gap-6 w-80 h-80">
              {Array.from({ length: elements }).map((_, i) => (
                <div
                  key={i}
                  className="viz-element bg-white rounded-lg shadow-lg opacity-0"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    height: "40px",
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div ref={containerRef} className="scroll-wrapper flex relative h-[300vh] bg-gray-900">
      {/* Left Column */}
      <div className="left-panel w-1/2 p-10">
        {/* Text Content Sections */}
        {textContent.map((content, index) => (
          <div key={index} className="h-screen flex items-center justify-center">
            <div className="text-block text-5xl font-bold max-w-md bg-gradient-to-r from-gray-800 via-white to-gray-800 bg-clip-text text-transparent">
              {content.text}{" "}
              {content.highlight && (
                <span className={content.highlightColor}>{content.highlight}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column (Pinned) */}
      <div ref={rightPanelRef} className="right-panel w-1/2 h-screen sticky top-0 overflow-hidden">
        {/* Visualizations that fade in/out */}
        {visualizations.map((viz, index) => (
          <div
            key={index}
            className={`visualization absolute inset-0 opacity-0 bg-gradient-to-br ${viz.color}`}
          >
            {renderVisualization(viz, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
