import { env } from '$env/dynamic/public';
import getAllPublishedProjects from '$lib/scripts/getAllPublishedProjects';
import type { LayoutServerLoad } from './$types';
import Career from "$lib/data/kadirlofca-career.json";

export const load: LayoutServerLoad = (event) => {
	const subdomain = event.url.hostname.split('.')[0];

	const subdomainProjects = getAllPublishedProjects().filter(p => {
		const lowerCaseSubdomains = p.subdomains.map((subdomain) => subdomain.toLowerCase());
		return subdomain == "www" || subdomain == env.PUBLIC_DOMAIN || lowerCaseSubdomains.includes(subdomain);
	});

	let subdomainCareerData = Career.professions.general;
	switch(subdomain){
		case "game":
			subdomainCareerData = Career.professions.gameDevelopment
			break;
		case "swe":
			subdomainCareerData = Career.professions.softwareEngineering
			break;
		case "cyber":
			subdomainCareerData = Career.professions.cybersecurity
			break;
		default:
			subdomainCareerData = Career.professions.general
			break;
	}

	return {
		projects: subdomainProjects,
		careerData: subdomainCareerData
	}
};