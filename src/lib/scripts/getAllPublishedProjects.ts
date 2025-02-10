import * as fs from 'fs';
import matter from "gray-matter"
import type { Project } from '$lib/types/project.type';

const projectsFolderDirectory: fs.PathLike = "./src/projects/";

export default function getAllPublishedProjects(): Project[] {
    let projects: Project[] = [];

    const files = fs.readdirSync(projectsFolderDirectory);

    files.forEach(fileName => {
        const fileContent = fs.readFileSync(projectsFolderDirectory + fileName, "utf8");
        
        const matterOutput: matter.GrayMatterFile<string> = matter(fileContent);

        if(matterOutput.data.published){
            projects.push({
                title: matterOutput.data.title,
                description: matterOutput.data.description,
                subdomains: matterOutput.data.subdomains,
                tags: matterOutput.data.tags,
                projectDate: matterOutput.data.projectDate,
                markdownContent: matterOutput.content 
            });   
        }
    })
    
    return projects;
}