import { projectFactory } from "./projectFactoryModule";

const createProjectFactory = () => {
    
    const createProject = (title) => {
        const project = projectFactory(title);
        return project
    }

    return { createProject }
}

export { createProjectFactory }