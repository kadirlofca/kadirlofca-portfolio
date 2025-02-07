import type { LayoutServerLoad } from './$types';
import getAllProjects from '$lib/scripts/getAllProjects';

export const load: LayoutServerLoad = async () => {
	getAllProjects();
	return {
		
	};
};


// ssh commit test