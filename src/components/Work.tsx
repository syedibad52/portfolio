import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "Smart parking system",
              category: "IoT / Embedded",
              description: "Developed an automated parking system using Arduino Uno, IR sensors, and a servo motor to detect vehicle entry and control gate operations, reducing manual effort and improving efficiency while gaining hands-on experience in IoT, embedded systems, and programming logic.",
              tools: "Arduino Uno, C, IoT",
              image: "/images/placeholder.webp"
            },
            {
              title: "Jarvis Voice Assistant",
              category: "Python Project",
              description: "Developed a Python-based voice assistant with wake-word detection (\"Jarvis\") that recognizes voice commands to perform tasks such as opening applications and websites (YouTube, Instagram), demonstrating skills in speech recognition, automation, and Python scripting.",
              tools: "Python, Speech Recognition",
              image: "/images/placeholder.webp"
            },
            {
              title: "Employee Management System (EMS)",
              category: "Full-stack Web App",
              description: "Developed a full-stack Employee Management System with role-based access control (RBAC) to manage employee data, attendance, and leave records. Implemented secure authentication, backend APIs, and a responsive UI for efficient HR operations.",
              tools: "React, Node.js, RBAC",
              image: "/images/placeholder.webp"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Description</h4>
                <p>{project.description}</p>
                <h4 style={{marginTop: "15px"}}>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
