async function fetchTodoAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

async function fetchUserAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await response.json();
}

async function getFullData() {
    try {
        const [todo, user] = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
        console.log("Async/Await results:", { todo, user });
    } catch (error) {
        console.error("Async Error:", error);
    }
}

getFullData();