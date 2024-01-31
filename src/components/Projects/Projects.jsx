import './Projects.scss';
import Project from '../Project/Project';
import { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/projects')
            const data = await response.json()
            setProjects(data)
        };
        fetchData();
    }, []);
    return (
        <div className="projects">
            {projects?.length > 0 &&
                projects.map((project) => {
                    return <Project key={project.id} project={project}></Project>;
                })}
        </div>
    );
};

export default Projects;
