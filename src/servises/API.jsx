export async function getData(links) {
    const promises = [];

    links.forEach(url => {
        promises.push(
            new Promise((res) => {res(fetch(url)
                .then(response => response.json()
                ))})
        )
    });

    return await Promise.all(promises)
}
