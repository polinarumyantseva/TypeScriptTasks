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
	const res = await fetch(url, {
		headers: {
			'content-type': 'application/json',
		},
		method: 'GET',
	});
	const data: CommentProps[] = await res.json();
	const result = data.map((item: CommentProps) => `ID: ${item.id}, Email: ${item.email}`);
	return result.join('\n');
};
