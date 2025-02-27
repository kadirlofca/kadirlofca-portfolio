import * as fs from 'fs';
import matter from "gray-matter"
import type { Project } from '$lib/types/project.type';
import Showdown from 'showdown';

const projectsFolderDirectory: fs.PathLike = "./src/projects/markdowns/";

export default function getAllPublishedProjects(): Project[] {
    let projects: Project[] = [];

    const files = fs.readdirSync(projectsFolderDirectory);

    files.forEach(fileName => {
        const fileContent = fs.readFileSync(projectsFolderDirectory + fileName, "utf8");
        
        const matterOutput: matter.GrayMatterFile<string> = matter(fileContent);
        
        const showdownConverter = new Showdown.Converter;
        matterOutput.content = showdownConverter.makeHtml(matterOutput.content);

        if(matterOutput.data.published){
            projects.push({
                title: matterOutput.data.title,
                description: matterOutput.data.description,
                subdomains: matterOutput.data.subdomains as string,
                tags: matterOutput.data.tags as string,
                date: matterOutput.data.date,
                slug: matterOutput.data.slug,
                renderedMarkdownContent: matterOutput.content 
            });   
        }
    })
    
    return projects;
}