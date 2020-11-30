import React, { useEffect, useRef } from 'react';
import FrontScreen from './front-screen';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = fun => useEffect(fun, []);

export default function FrontPageScrollable() {
  const about = useRef(null);
  const home = useRef(null);

  // useMountEffect(() => scrollToRef(about)); // Scroll on mount

  return (
    <div className="front-page-base">
      <FrontScreen />

      <div className="menu">
        <div ref={home} className="menu-item" onClick={() => scrollToRef(home)}>
          HOME
        </div>
        <div className="menu-item pl-2 pr-2"> |</div>
        <div ref={home} className="menu-item" onClick={() => scrollToRef(about)}>
          ABOUT
        </div>
        <div className="menu-item pl-2 pr-2"> |</div>
        <div ref={home} className="menu-item" onClick={() => scrollToRef(about)}>
          PROJECTS
        </div>
      </div>

      <div className="buffer-element" />

      <div ref={about} className="front-page-element">
        <h5>ABOUT</h5>
        <p className="text-justify w-50 d-inline-block">
          Currently developing a system to manage data on traffic accidents for the Norwegian Directorate of Public Roads. The system is developed using Java and React
          with Redux. In this project, my focus is to hone and expand my skills in Java and JavaScript, while also begin to get a better understanding of Spring and
          Hibernate. Previous work experience includes several years at a University where I lectured both master and bachelor students in several different courses. I
          was involved in a large research project which resulted in several publications. Education: B.Eng. - Mechatronics, specialization in Robotics M.Sc. - Industrial
          and Technology Management (IndØk), specialization in Engineering Management
        </p>
      </div>

      <button onClick={() => scrollToRef(about)}>Click to scroll</button>
    </div>
  );
}
