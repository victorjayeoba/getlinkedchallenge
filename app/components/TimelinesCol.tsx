"use client";
import React from "react";
import { Chrono } from "react-chrono";
import { FaLightbulb, FaWalking } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";
import { timeline } from "@/libs/timline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function TimelinesCol() {
  const items = [
    {
      title: "November 18, 2023",
      cardTitle: "Hackathon Announcement",

      cardDetailedText:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    },
    {
      title: "November 18, 2023",
      cardTitle: "Teams Registration begins",

      cardDetailedText:
        "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    },
    {
      title: "November 18, 2023",
      cardTitle: "Teams Registration ends",

      cardDetailedText:
        "Interested Participants are no longer Allowed to register",
    },
    {
      title: "November 18, 2023",
      cardTitle: "Announcement of the accepted teams and ideas",

      cardDetailedText:
        "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    },
    {
      title: "November 18, 2023",
      cardTitle: "Getlinked Hackathon 1.0 Offically Begins",

      cardDetailedText:
        "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    },
    {
      title: "November 18, 2023",
      cardTitle: "Demo Day",

      cardDetailedText:
        "Teams get the opportunity to pitch their  projects to judges. The winner of the hackathon will also be announced on this day",
    },
  ];

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Chrono
        theme={{
          primary: "#d434fe",
        }}
        items={items}
        useReadMore={false}
        mode="VERTICAL_ALTERNATING"
      >
        <div className="chrono-icons">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </Chrono>
    </div>
  );
}

export default TimelinesCol;
