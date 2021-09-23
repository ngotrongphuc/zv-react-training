import axiosClient from './axiosClient';

const countriesApi = {
    getCountry: async (name) => {
        try {
            const url = `https://restcountries.com/v3/name/${name}`;
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            console.log(`fetch failed\n`, error);
        }
    }
};

export default countriesApi;