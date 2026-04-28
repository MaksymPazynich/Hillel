import axios from 'axios';

export const fetchDataWithError = async () => {
	return await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
};

export const fetchDataWithHeaders = async (params, headers) => {
	return await axios.get('https://jsonplaceholder.typicode.com/posts', { params, headers });
};

export const getUserData = async (id) => {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
	return response.data;
};
