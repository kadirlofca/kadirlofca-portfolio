import * as fs from 'fs';
import * as matter from "gray-matter"

const projectsFolderDirectory: fs.PathLike = "./src/projects";

export default async function getProjects(keyword: string) {
    fs.readdir(projectsFolderDirectory, (err, files) => {
        files.forEach((file) => {
            fs.readFile(projectsFolderDirectory + file, "utf8", (err, fileContent) => {
                // console.log(matter(fileContent));
            })
        })
    })

}