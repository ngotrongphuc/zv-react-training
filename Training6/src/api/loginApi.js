const baseURL = "http://localhost:9000";

const loginApi = {
    getToken: async (body) => {
        try {
            const response = await fetch(`${baseURL}/login`, {
                method: "POST",
                body: new URLSearchParams(body)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    getMyInfo: async (token) => {
        try {
            const response = await fetch(`${baseURL}/api/users/my`, {
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    getUsers: async (token) => {
        try {
            const response = await fetch(`${baseURL}/api/users`, {
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                }),
            });
            const data = await response.json();
            const errorCode = response.status;
            if (errorCode === 403) {
                throw data.error;
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    },
};

export default loginApi;