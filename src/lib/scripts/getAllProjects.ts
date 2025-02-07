import * as fs from 'fs';
import matter from "gray-matter"
import type { Project } from '$lib/types/project.type';

const projectsFolderDirectory: fs.PathLike = "./src/projects/";

export default async function getAllProjects() {
    fs.readdir(projectsFolderDirectory, (err, files) => {
        files.forEach((file) => {
            fs.readFile(projectsFolderDirectory + file, "utf8", (err, fileContent) => {
                console.log(matter(fileContent));
            })
        })
    })

}