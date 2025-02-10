import getAllPublishedProjects from '$lib/scripts/getAllPublishedProjects';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (event) => {
	const subdomainProjects = getAllPublishedProjects().filter(p => {
		const lowerCaseSubdomains = p.subdomains.map((subdomain) => subdomain.toLowerCase());
		return lowerCaseSubdomains.includes(event.url.hostname.split('.')[0]);
	});

	return {
		projects: subdomainProjects
	}
};