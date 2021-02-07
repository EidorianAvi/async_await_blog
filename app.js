// function fetchAPI() {
//     return "fetched";
// }

// const fetchAPI = async () => {
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    
//     console.log(data)
// }

const fetchAPI = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let data = await response.json();

        console.log(data);
    } catch(e) {
        console.log(e);
    }
}
fetchAPI();
