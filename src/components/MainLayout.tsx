import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import ProfileSidebar from "./ProfileSidebar";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

const MainLayout: React.FC = () => {
  const [key, setKey] = useState<string>("projects");

  return (
    <Container fluid>
      <Row>
        <Col sm={4} className="p-3 sidebar-bg center-content">
          <ProfileSidebar />
        </Col>
        <Col sm={8} className="p-3 main-content-bg">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k as string)}
            className="mb-3 tabs"
          >
            <Tab eventKey="projects" title="Projects">
              <Projects />
            </Tab>
            <Tab eventKey="workExperience" title="Work Experience">
              <WorkExperience />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
