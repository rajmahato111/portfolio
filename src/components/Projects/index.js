import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("web app");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Projects showcasing my work in AI systems, RAG pipelines, and production-ready applications with focus on scalability and performance.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active
            value="web app"
            onClick={() => setToggle("web app")}
          >
            Latest Project
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
