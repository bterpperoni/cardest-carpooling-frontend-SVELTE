import type { PageLoad } from './$types';

export const load = (async ({fetch, params}) => {

    const req = fetch(`http://localhost:8080/users/new-user?email=${params.register}`, {
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
    const isANewUser: Boolean = await req;
    return {isANewUser};

})satisfies PageLoad;

