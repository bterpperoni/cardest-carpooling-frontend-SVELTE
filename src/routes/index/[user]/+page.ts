import type { User } from "$lib/typescript/interface";
import type { PageLoad } from "./$types";

export const load = (async ({fetch, params}) => {
    
        const req = fetch(`http://localhost:8080/users/user?email=${params.user}`, {
                        method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                        }
                    }).then(res => {
                        if (!res.ok) {
                            throw new Error("No network response");
                        }
                        return res.json();
                    }).then(data => {
                        return data;
                    }).catch(err => {
                        console.error("Error fetching data:", err);
                    });
        const actualUser: User = await req;
        return {actualUser};
    
}) satisfies PageLoad;