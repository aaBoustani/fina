
const BASE_URL = process.env.BACKEND_API_URL || 'http://localhost:4000';

async function request(method: string, url: string, data?: any) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: data instanceof FormData ? data : JSON.stringify(data),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Request failed: ${method} ${url} ${response.status} ${response.statusText}`);
    }
}


export {
    BASE_URL,
    request,
};