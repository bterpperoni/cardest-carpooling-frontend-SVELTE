import type { PageLoad } from './$types';

export const load = (async ({fetch, params}) => {

    const req = fetch(`http://localhost:8080/users/me?ace=${params.register}`, {
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
                    console.log(data);
                    return data;
                }).catch(err => {
                    console.error("Error fetching data:", err);
                    window.location.href = '/';
                });
    const isAnExistingUser: Boolean = await req;
    return {isAnExistingUser};

})satisfies PageLoad;