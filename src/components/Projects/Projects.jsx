import './Projects.scss';
import Project from '../Project/Project';
import { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const projectsSort = projects.sort((a, b) => b.id - a.id);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://maksimgolovanovfrontend.ru/projects.json'
            );
            const data = await response.json();
            setProjects(data);
        };
        fetchData();
    }, []);
    return (
        <div className="projects">
            {projectsSort?.length > 0 &&
                projectsSort.map((project) => {
                    return (
                        <Project key={project.id} project={project}></Project>
                    );
                })}
        </div>
    );
};

export default Projects;
