import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Element } from "react-scroll";
import ProfileSidebar from "./ProfileSidebar";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import About from "./About";
import { InView } from "react-intersection-observer";

const MainLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <Container fluid>
      <Row>
        <Col sm={4} className="p-3 sidebar-bg center-content">
          <ProfileSidebar />
        </Col>
        <Col sm={8} className="p-3 main-content-bg">
          <div className="Tabs">
            <Row>
              <Col sm={2}>
                <Nav.Item className={activeTab === "about" ? "active" : ""}>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    onSetActive={() => setActiveTab("about")}
                  >
                    About
                  </Link>
                </Nav.Item>
              </Col>
              <Col sm={2}>
                <Nav.Item className={activeTab === "projects" ? "active" : ""}>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    onSetActive={() => setActiveTab("projects")}
                  >
                    Projects
                  </Link>
                </Nav.Item>
              </Col>

              <Col sm={2}>
                <Nav.Item
                  className={activeTab === "experience" ? "active" : ""}
                >
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    onSetActive={() => setActiveTab("experience")}
                  >
                    Experience
                  </Link>
                </Nav.Item>
              </Col>
            </Row>
          </div>
          <InView
            as="div"
            onChange={(inView, entry) =>
              entry.target.classList.toggle("in-view", inView)
            }
            className="fade-in-out"
          >
            <Element name="about">
              <About />
            </Element>
          </InView>
          <InView
            as="div"
            onChange={(inView, entry) =>
              entry.target.classList.toggle("in-view", inView)
            }
            className="fade-in-out"
          >
            <Element name="projects">
              <Projects />
            </Element>
          </InView>

          <InView
            as="div"
            onChange={(inView, entry) =>
              entry.target.classList.toggle("in-view", inView)
            }
            className="fade-in-out"
          >
            <Element name="experience">
              <WorkExperience />
            </Element>
          </InView>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
