import * as fs from 'fs';
import matter from "gray-matter"
import type { Project } from '$lib/types/project.type';

const projectsFolderDirectory: fs.PathLike = "./src/projects/";

export default async function getAllPublishedProjects(): Promise<Project[]> {
    let projects: Project[] = [];

    fs.readdir(projectsFolderDirectory, (err, files) => {
        files.forEach((file) => {
            fs.readFile(projectsFolderDirectory + file, "utf8", (err, fileContent) => {
                const matterOutput: matter.GrayMatterFile<string> = matter(fileContent);

                if(matterOutput.data.published){
                    projects.push({
                        title: matterOutput.data.title,
                        description: matterOutput.data.description,
                        tags: matterOutput.data.tags,
                        projectDate: matterOutput.data.projectDate,
                        markdownContent: matterOutput.content 
                    });   
                }
            })
        })
    })

    return projects;
}