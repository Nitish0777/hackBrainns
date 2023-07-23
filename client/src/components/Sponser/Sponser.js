import React from "react";
import "../../styles/sponser.css";

const Sponser = () => {
  return (
    <section className="sponsors">
      <h2>Our Sponsors</h2>
      {/* <div class="sponsor-list"> */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={2000}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="sponsor-list">
              <div className="sponsor">
                <a href="#">
                  <img src="discord.png" alt="Sponsor 1" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Ratione, accusamus laudantium ea quod asperiores totam natus
                  <br />
                  aliquam reiciendis praesentium dicta repellendus aut dolorem
                  <br />
                  dolorum accusantium cumque voluptates. Ullam, voluptate
                  laboriosam?
                </p>
              </div>
              <div className="sponsor">
                <a href="#">
                  <img src="twitter.png" alt="Sponsor 2" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Ratione, accusamus laudantium ea quod asperiores totam natus
                  <br />
                  aliquam reiciendis praesentium dicta repellendus aut dolorem
                  <br />
                  dolorum accusantium cumque voluptates. Ullam, voluptate
                  laboriosam?
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="sponsor-list">
              <div className="sponsor">
                <a href="#">
                  <img src="dropbox.png" alt="Sponsor 1" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Ratione, accusamus laudantium ea quod asperiores totam natus
                  <br />
                  aliquam reiciendis praesentium dicta repellendus aut dolorem
                  <br />
                  dolorum accusantium cumque voluptates. Ullam, voluptate
                  laboriosam?
                </p>
              </div>
              <div className="sponsor">
                <a href="#">
                  <img src="discord.png" alt="Sponsor 2" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Ratione, accusamus laudantium ea quod asperiores totam natus
                  <br />
                  aliquam reiciendis praesentium dicta repellendus aut dolorem
                  <br />
                  dolorum accusantium cumque voluptates. Ullam, voluptate
                  laboriosam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponser;
