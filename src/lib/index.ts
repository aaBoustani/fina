
const BASE_URL = process.env.BACKEND_API_URL || 'http://localhost:4000';

async function request(method: string, url: string, data?: any) {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        throw error;
    }
}

export { BASE_URL, request };