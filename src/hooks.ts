import { env } from '$env/dynamic/public';
import type { Reroute } from "@sveltejs/kit";

export const reroute: Reroute = ({ url }) => {
	if (url.host == env.PUBLIC_DOMAIN) {
		return url.pathname;
	}

    if(url.host == `game.${env.PUBLIC_DOMAIN}`){
        return `/game${url.pathname}`;
    }
    
    if (url.host == `swe.${env.PUBLIC_DOMAIN}`) {
        return `/swe${url.pathname}`;
    }

    return `/404`;
};