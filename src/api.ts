export const  getApi = async () => {
    try {
        const response = await fetch('/api/people/');
        return response.json();
    } catch (error) {
        console.error(error)
    }
}