class TodoService {
    async getTodo(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return await response.json();
    }
}

class UserService {
    async getUser(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

(async () => {
    const todo = await todoService.getTodo(1);
    const user = await userService.getUser(1);
    console.log("Results from classes:", { todo, user });
})();