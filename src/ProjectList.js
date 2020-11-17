import React from "react";
import Project from "./Project";

const ProjectList = (props) => (
  <>
    <Project
      title="restaurant"
      tech="HTML, CSS, JavaScript, ReactJS, Bootstrap"
      live="https://milosrancic.github.io/restaurant-website/"
      github="https://github.com/milosrancic/restaurant-website"
    />

    <Project
      title="charity"
      tech="HTML, CSS, JavaScript, ReactJS, Bootstrap"
      live="https://milosrancic.github.io/charity-website/"
      github="https://github.com/milosrancic/charity-website"
    />

    <Project
      title="beverage"
      tech="HTML, CSS, JavaScript, Bootstrap"
      live="https://milosrancic.github.io/beverage-website/"
      github="https://github.com/milosrancic/beverage-website"
    />

    <Project
      title="bookstore"
      tech="HTML, CSS, Sass/SCSS, Bootstrap, JavaScript, ReactJS"
      live="https://milosrancic.github.io/reactjs-bookstore/"
      github="https://github.com/milosrancic/reactjs-bookstore"
    />

    <Project
      title="weather app"
      tech="HTML, CSS, JavaScript, ReactJS"
      live="https://milosrancic.github.io/reactjs-weather-app/"
      github="https://github.com/milosrancic/reactjs-weather-app"
    />

    <Project
      title="quote machine"
      tech="HTML, CSS, JavaScript, ReactJS"
      live="https://milosrancic.github.io/reactjs-quote-machine"
      github="https://github.com/milosrancic/reactjs-quote-machine"
    />
  </>
);

export default ProjectList;
