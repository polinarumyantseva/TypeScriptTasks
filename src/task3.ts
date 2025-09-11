// Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: id, Email: email".

export const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface CommentProps {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export const getData = async (url: string) => {
	try {
		const res = await fetch(url, {
			headers: {
				'content-type': 'application/json',
			},
			method: 'GET',
		});

		if (!res.ok) {
			throw new Error(`Error! ${res.statusText}`);
		}

		const data: CommentProps[] = await res.json();

		if (!Array.isArray(data)) {
			throw new Error('Error! Data is not an array!');
		}

		const result = data.map((item) => `ID: ${item.id}, Email: ${item.email}`);
		return result.join('\n');
	} catch (error) {
		console.error(error);
	}
};
