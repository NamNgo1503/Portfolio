import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import backgroundImage from "../assets/light.jpg";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="experience" style={{ marginTop: '160px' }}>
      <VerticalTimeline lineColor="#131313">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#131313', color: '#BCB4A7' }}
          contentArrowStyle={{
            borderRight: "7px solid #131313",
          }}
          date="2019 - 2023"
          iconStyle={{ background: "#131313", color: "#BCB4A7", borderColor: "#BCB4A7"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" >
            Northern Kentucky University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#131313', color: '#BCB4A7'}}
          contentArrowStyle={{
            borderRight: "7px solid #131313",
          }}
          date="2023 - Now"
          iconStyle={{ background: "#131313", color: "#BCB4A7" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern Web Developer - Saolasoft Inc.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Denver, CO
          </h4>

          <p> Developed and enhanced websites</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </div>
  );
}

export default Experience;
