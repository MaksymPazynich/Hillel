import { jest } from '@jest/globals';
import axios from 'axios';
import { fetchDataWithError, fetchDataWithHeaders, getUserData } from './apiService';

describe('API Service Tests', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	test('Завдання 1: Повинна повертатись помилка 404 для неправильного URL', async () => {
		const spy = jest.spyOn(axios, 'get').mockRejectedValue({ response: { status: 404 } });

		try {
			await fetchDataWithError();
		} catch (error) {
			expect(error.response.status).toBe(404);
		}

		spy.mockRestore();
	});

	test('Завдання 2: Запит має містити кастомні хедери та параметри', async () => {
		const params = { userId: 1 };
		const headers = { Authorization: 'Bearer my-token' };

		const spy = jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: [] });

		await fetchDataWithHeaders(params, headers);

		expect(spy).toHaveBeenCalledWith(
			'https://jsonplaceholder.typicode.com/posts',
			expect.objectContaining({ params, headers }),
		);

		spy.mockRestore();
	});

	describe('Завдання 3: Mocking Axios (Success/Failure)', () => {
		test('Повертає замокані дані користувача при успіху', async () => {
			const mockUser = { id: 1, name: 'Max QA' };
			const spy = jest.spyOn(axios, 'get').mockResolvedValue({ data: mockUser });

			const result = await getUserData(1);
			expect(result).toEqual(mockUser);
			expect(spy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');

			spy.mockRestore();
		});

		test('Викидає помилку, якщо запит не вдався', async () => {
			const spy = jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network Error'));

			await expect(getUserData(1)).rejects.toThrow('Network Error');

			spy.mockRestore();
		});
	});
});
