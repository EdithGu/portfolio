import React, {useContext} from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) {
    return null;
  }
  return (
    <div id="experience">
      <div className="experience-container" id="workExperience">
        <h1
          className={
            isDark ? "dark-mode experience-heading" : "experience-heading"
          }
        >
          Experience
        </h1>
        <div className={isDark ? "dark-mode timeline" : "timeline"}>
          {workExperiences.experience.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h5 className="timeline-role">
                  {item.role} <span className="timeline-at">@</span>{" "}
                  {item.company}
                </h5>
                <p className="timeline-desc">{item.desc}</p>
                {item.techStack && (
                  <div className="timeline-stack">
                    {item.techStack.map((tech, j) => (
                      <span className="timeline-chip" key={j}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
