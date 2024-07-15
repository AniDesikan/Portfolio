import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

interface MainTabsProps {
  key: string;
  setKey: (k: string) => void;
}

const MainTabs: React.FC<MainTabsProps> = ({ key, setKey }) => {
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k as string)}
      className="mb-3"
    >
      <Tab eventKey="projects" title="Projects">
        <Projects />
      </Tab>
      <Tab eventKey="workExperience" title="Work Experience">
        <WorkExperience />
      </Tab>
    </Tabs>
  );
};

export default MainTabs;
