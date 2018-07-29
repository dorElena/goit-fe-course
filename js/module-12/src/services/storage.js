export const set = value => {
    localStorage.setItem("url-app", JSON.stringify(value));
}

export const get = () => {
    const data = localStorage.getItem('url-app');
    return data ? JSON.parse(data) : null;
}