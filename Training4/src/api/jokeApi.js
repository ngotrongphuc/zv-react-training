import axiosClient from './axiosClient';

const jokeApi = {
    getRandomJoke: async () => {
        try {
            const url="https://karljoke.herokuapp.com/jokes/random";
            const response = await axiosClient.post(url);//this api use post method,i don't know why
            return response;
        } catch (error) {
            console.log(`fetch failed\n`, error);
        }
    }
};

export default jokeApi;