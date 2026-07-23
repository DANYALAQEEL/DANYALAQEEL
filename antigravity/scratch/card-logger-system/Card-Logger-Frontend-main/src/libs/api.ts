export const getAPIURL = () => {
    const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiURL) {
        throw new Error("Missing API_URL env var");
    }
    return apiURL;
};

export const getWSURL = () => {
    const wsURL = process.env.NEXT_PUBLIC_WS_BASE_URL;
    if (!wsURL) {
        throw new Error("Missing WS_URL env var");
    }
    return wsURL;
};