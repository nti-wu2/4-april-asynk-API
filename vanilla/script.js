async function getData(){

    const url = 'https://swapi.dev/api/people/1';
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);

    let el = `
    <article>
    <h1>${data.name}</h1>
    <p>${data.mass} pannor tung</p>
    </article>
    `;

    document.querySelector('body').insertAdjacentHTML('beforeend', el);

}

getData();