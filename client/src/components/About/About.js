import React from "react";
import abt1 from "../../assets/abt1.jpeg";
import abt2 from "../../assets/abt2.jpeg";
import abt3 from "../../assets/abt3.jpeg";
import "../../styles/about.css";

const About = () => {
  return (
    <section className="about-us">
      <div className="container2">
        <h1>About HackBrainn</h1>
        <p>
          HackBrainn is a hackathon in association with MIT-WPU , that will
          allow students to grow, innovate and collaborate to design solution to
          various real-world problems. Various experts will be enlightening the
          students and along with it , there will be fun zone for recreation.
        </p>
        <div className="events">
          <div className="eve-1">
            <img src={abt1} />
            <h2>Experts Talk</h2>
            <p>
              Experts from variuos domains share few <br />
              insights to the students.
            </p>
            <button>Know More</button>
          </div>
          <div className="eve-1">
            <img src={abt2} />
            <h2>Coding Quest</h2>
            <p>
              Experts from variuos domains share few <br />
              insights to the students.
            </p>
            <button>Know More</button>
          </div>
          <div className="eve-1">
            <img src={abt3} />
            <h2>Fun Zone</h2>
            <p>
              Experts from variuos domains share few <br />
              insights to the students.
            </p>
            <button>Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
