import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

apiClient.interceptors.request.use((config) => {
	console.log(`[REQUEST] ${config.method.toUpperCase()} ${config.url}`);
	return config;
});

apiClient.interceptors.response.use(
	(response) => {
		console.log(`[RESPONSE] Status: ${response.status}`);
		return response;
	},
	(error) => {
		console.log(`[ERROR] Status: ${error.response?.status}`);
		return Promise.reject(error);
	},
);

async function runTests() {
	try {
		console.log('--- СТАРТ ТЕСТІВ ---\n');

		const getPosts = await apiClient.get('/posts');
		console.log(
			'Тест 1 (GET /posts):',
			getPosts.status === 200 && Array.isArray(getPosts.data) ? 'PASSED ✅' : 'FAILED ❌',
		);

		const getSinglePost = await apiClient.get('/posts/1');
		console.log(
			'Тест 2 (GET /posts/1):',
			getSinglePost.status === 200 && getSinglePost.data.id === 1 ? 'PASSED ✅' : 'FAILED ❌',
		);

		const newPost = { title: 'Hillel Test', body: 'Axios is great', userId: 1 };
		const createPost = await apiClient.post('/posts', newPost);
		console.log(
			'Тест 3 (POST /posts):',
			createPost.status === 201 && createPost.data.title === 'Hillel Test' ? 'PASSED ✅' : 'FAILED ❌',
		);

		const getComments = await apiClient.get('/comments', { params: { postId: 1 } });
		console.log(
			'Тест 4 (GET /comments?postId=1):',
			getComments.status === 200 && getComments.data[0].postId === 1 ? 'PASSED ✅' : 'FAILED ❌',
		);

		try {
			await apiClient.get('/invalid-endpoint');
		} catch (error) {
			console.log('Тест 5 (GET 404 check):', error.response.status === 404 ? 'PASSED ✅' : 'FAILED ❌');
		}

		console.log('\n--- ВСІ ТЕСТИ ЗАВЕРШЕНО ---');
	} catch (error) {
		console.error('Критична помилка під час виконання тестів:', error.message);
	}
}

runTests();
