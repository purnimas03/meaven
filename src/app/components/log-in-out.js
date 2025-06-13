

const api_url = process.env.NEXT_PUBLIC_API_URL_CALL
const WP_API_URL = api_url+'wp-json/custom/v2/login-detail/';
import Cookies from "js-cookie"; 

export async function userLogin(email, password){

    const submitData = { email, password };

    const res = await fetch(WP_API_URL, {
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');
    return data; // Contains token, user info

}

export function logoutUser(){
    // Clear local storage
    Cookies.remove('authToken');
    Cookies.remove('loggedUser');
    // Router.push('/login');
}