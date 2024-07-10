/* eslint-disable react/prop-types */

import "../styles/Project.css";

function Project() {
  return (
    <section id="projects" className="projects">
      <ReusableBox
        title="bakeWorld"
        description="a site where client view and order the available bakes at their own convinient time"
        link="https://github.com/abdoullahi42/stunning-cakes"
        source="../src/assets/images/bakerySite.png"
        liveDemo="https://abdoullahi42.github.io/stunning-cakes/"
        stack="Html, CSS,  JavaScript"
      />
    </section>
  );
}

function ReusableBox({ title, description, link, source, liveDemo, stack }) {
  return (
    <div className="project__content">
      <div className="projects__source">
        <div className="project-img">
          <img src={source} className="img__demos" />
        </div>
      </div>
      <div className="project__description_content">
        <h5 className="Project_title">{title}</h5>
        <p className="project__description">{description}</p>
        <p className="Project_stack">
          <h5>Tech stack: </h5>
          <span className="stack">{stack}</span>
        </p>
        <div className="icons__box">
          <a href={link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
          </a>

          <a href={liveDemo} target="blank" className="demo-content">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon liveIcon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

.projects {
  width: 95%;
  margin: 0 auto;
  padding: 0 12px;
}

.project__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.projects__source {
  display: flex;
  text-align: center;
  flex-direction: column;
}

.project__description_content {
  text-align: center;
}
.Project_title {
  font-size: 24px;
  margin-bottom: 12px;
  color: blue;
}

.project-img {
  text-align: center;
}
.Project_stack,
.project__description {
  font-size: 18px;
  margin-bottom: 12px;
}

.stack {
  color: blue;
}

.project-img img {
  border-radius: 2px;
  min-width: 70%;
  max-width: 80%;
  height: auto;
  margin-bottom: 24px;
}

.icons__box {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-bottom: 32px;
}
.liveIcon {
  width: 20px;
  height: 20px;
}
.demo-content {
  display: flex;
  gap: 5px;
  margin-top: 5px;
  color: black;
}

@media (min-width: 925px) {
  .project__content {
    flex-direction: row;
    gap: 48px;
    padding: 0 32px;
  }
  .liveIcon {
    width: 25px;
    height: 25px;
  }
  .project__description_content,
  .projects__source {
    flex: 1;
  }
  .project__description_content {
    text-align: initial;
  }
  .project-img img {
    min-width: 85%;
    max-width: 90%;
    margin-bottom: 12px;
  }
  .projects__source {
  }
  .icons__box {
    justify-content: initial;
  }
}

@media (min-width: 1210px) {
  .project-img img {
    width: 580px;
    min-width: initial;
    max-width: initial;
  }
  .project__content {
    gap: 102px;
  }
  .project__description_content {
    margin-top: px;
  }
  .Project_stack,
  .project__description,
  .Project_title {
    margin-bottom: 24px;
    font-size: 19px;
  }
  .Project_title {
    font-size: 30px;
  }
}