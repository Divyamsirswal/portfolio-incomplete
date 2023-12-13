import React from "react";
import "./Projects.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack : {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,.7" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            url="https://github.com/Divyamsirswal"
            projectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujesLWftdxM6DVObQ9rW8BOdW8bZAvKUzA&usqp=CAU"
            projectTitle="Sample Project"
            description="This is a sample project adfsfsd fsdfsad fassdfs adfs"
            technologies="MonogoDB, React, Nodejs, Express"
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All the projects shown above are made by me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
