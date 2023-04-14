import { hydrateAuth } from 'svelte-google-auth/server';
import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { getDestinations } from '$lib/scripts/httpRequest';

export const load: LayoutServerLoad = async ({ locals }) => {
	const API_KEY = env.GOOGLE_MAPS_API_KEY;
	const DESTINATIONS = await getDestinations();
	// By calling hydrateAuth, certain variables from locals are parsed to the client
	// allowing the client to access the user information and the client_id for login	
	return { ...hydrateAuth(locals), API_KEY, DESTINATIONS };
}; 