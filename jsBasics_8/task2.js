function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json());
}

const promiseAll = Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        console.log("Promise.all results:", results);
    })
    .catch(error => console.error("Error in Promise.all:", error));

const promiseRace = Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log("Promise.race result (fastest):", result);
    })
    .catch(error => console.error("Error in Promise.race:", error));