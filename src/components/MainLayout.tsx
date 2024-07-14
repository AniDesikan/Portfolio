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
        <Col sm={4} className="p-3">
          <ProfileSidebar />
        </Col>
        <Col sm={8} className="p-3">
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
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
