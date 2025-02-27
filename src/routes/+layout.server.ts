import { env } from '$env/dynamic/public';
import getAllPublishedProjects from '$lib/scripts/getAllPublishedProjects';
import getSkillDistribution from '$lib/scripts/getSkillDistribution';
import type { LayoutServerLoad } from './$types';
import Careers from "$lib/data/kadirlofca-careers.json";
import type { Career } from '$lib/types/career.type';
import type { Skill } from '$lib/types/skill.type';

export const load: LayoutServerLoad = (event) => {
	const subdomain = event.url.hostname.split('.')[0];

	const subdomainProjects = getAllPublishedProjects().filter(p => {
		const lowerCaseSubdomains = p.subdomains.split(", ").map((subdomain) => subdomain.toLowerCase());
		return subdomain == "www" || subdomain == env.PUBLIC_DOMAIN || lowerCaseSubdomains.includes(subdomain);
	});

	const skills: Skill[] = getSkillDistribution(subdomainProjects);

	let subdomainCareer: Career = {
		fullName: Careers.fullName,
		location: Careers.location,
		title: "",
		description: ""
	};
	
	switch(subdomain){
		case "game":
			subdomainCareer.title = Careers.professions.gameDevelopment.title
			subdomainCareer.description = Careers.professions.gameDevelopment.description
			break;
		case "swe":
			subdomainCareer.title = Careers.professions.softwareEngineering.title
			subdomainCareer.description = Careers.professions.softwareEngineering.description
			break;
		case "cyber":
			subdomainCareer.title = Careers.professions.cybersecurity.title
			subdomainCareer.description = Careers.professions.cybersecurity.description
			break;
		default:
			subdomainCareer.title = Careers.professions.general.title
			subdomainCareer.description = Careers.professions.general.description
			break;
	}

	return {
		projects: subdomainProjects,
		career: subdomainCareer,
		skills,
	}
};