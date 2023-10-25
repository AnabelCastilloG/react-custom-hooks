export const getByName = (url,name) => {
    if (name) {
        return fetch(`${url}${name}`)
        .then((res) => res.json())
        .catch((e) => console.log(e));
    }
}