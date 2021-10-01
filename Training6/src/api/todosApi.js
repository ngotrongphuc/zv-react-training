const baseURL = "http://localhost:9000/todos";

const todosApi = {
    getTodos: async () => {
        try {
            const response = await fetch(baseURL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    submitTodo: async (body) => {
        try {
            const response = await fetch(baseURL, {
                method: "POST",
                body: new URLSearchParams(body)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    updateTodo: async (id, body) => {
        try {
            const response = await fetch(`${baseURL}/${id}`, {
                method: "PUT",
                body: new URLSearchParams(body)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    deleteTodo: async (id) => {
        try {
            const response = await fetch(`${baseURL}/${id}`, {
                method: "DELETE"
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
};

export default todosApi;