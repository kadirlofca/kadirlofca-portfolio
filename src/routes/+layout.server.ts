import getAllPublishedProjects from '$lib/scripts/getAllPublishedProjects';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (event) => {
	const subdomainProjects = getAllPublishedProjects().filter(pp => { pp.tags.includes(event.url.hostname.split('.')[0]) });
	
	return {
		projects: subdomainProjects
	}
};