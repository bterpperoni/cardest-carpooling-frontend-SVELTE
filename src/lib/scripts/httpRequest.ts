import axios from "axios";
import type { SubDestination, User } from "./interface";

export const postUser = async (user: User) => {
    await axios.post(`http://localhost:8080/users`, user, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
        if (res.status !== 200) {
            throw new Error("No network response");
        }else{
            console.log("UserService :" + res);
        }})
        .then(data => console.log(data))
        .catch(err => {
            console.error("Error fetching data:", err);
        });
}

export async function getDestinations(): Promise<SubDestination[]>{
    const response = await fetch('http://localhost:8080/destinations');
    const data = await response.json();
    return data;
}