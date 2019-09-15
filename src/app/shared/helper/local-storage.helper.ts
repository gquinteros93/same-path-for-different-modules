export function saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getData(key: string) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeData(key: string) {
    localStorage.removeItem(key);
}
