import type { Skill } from "$lib/types/skill.type";
import type { Project } from "$lib/types/project.type";

export default function getSkillDistribution(projects: Project[]): Skill[] {
    let skillCounts: {title: string, count: number}[] = [];
    let totalSkillCount: number = 0;

    // Count skills.
    projects.forEach((project) => {
        if(!project.tags){
            return;
        }

        project.tags.split(",").forEach((tag) => {
            const skillIndex = skillCounts.findIndex((s) => { return s.title == tag });

            if(skillIndex != -1){
                skillCounts[skillIndex].count++;
            }
            else{
                const newSkill = { title: tag, count: 1 };
                skillCounts.push(newSkill);
            }

            totalSkillCount++;
        })
    })

    // Convert skill count to percentages.
    let skills: Skill[] = [];

    skillCounts.forEach((s) => {
        skills.push({title: s.title, percentage: (s.count/totalSkillCount * 100) });
    })

    skills.sort((a, b): number => { return a.percentage > b.percentage ? -1 : (a.percentage == b.percentage ? 0 : 1) });

    // const skillMultiplier: number = 100 / skills[0].percentage;

    // skills.forEach(s => {
    //     s.percentage *= skillMultiplier;
    // })

    return skills;
}