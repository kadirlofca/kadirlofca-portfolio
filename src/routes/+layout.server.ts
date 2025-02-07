import getAllPublishedProjects from '$lib/scripts/getAllPublishedProjects';
import { page } from '$app/state';
import type { LayoutServerLoad } from './$types';
import type { Project } from '$lib/types/project.type';

export const load: LayoutServerLoad = async () => {
	const publishedProjects: Project[] = await getAllPublishedProjects();
	return { publishedProjects };
};