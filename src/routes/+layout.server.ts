import getAllPublishedProjects from '$lib/scripts/getAllPublishedProjects';
import type { LayoutServerLoad } from './$types';
import type { Project } from '$lib/types/project.type';

export const load: LayoutServerLoad = async (event) => {
	const publishedProjects: Project[] = await getAllPublishedProjects();
	
	console.log(publishedProjects);

	const projectsInSubdomainCategory: Project[] = publishedProjects.filter(pp => { pp.tags.includes(event.url.hostname.split('.')[0]) });
	return { projectsInSubdomainCategory };
};