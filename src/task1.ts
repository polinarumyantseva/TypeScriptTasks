//Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев

interface ProductProps {
	price: number;
	discount: number;
	isInstallment: boolean;
	months: number;
}

export const totalPrice = ({ price, discount, isInstallment, months }: ProductProps): number => {
	if (price < 0) {
		throw new Error('Цена должна быть положительным числом');
	}

	if (discount < 0 || discount > 100) {
		throw new Error('Скидка должна быть в диапазоне от 0 до 100');
	}

	if (months <= 0) {
		throw new Error('Количество месяцев должно быть положительным числом');
	}
	const discountSize = (price * discount) / 100;
	return isInstallment ? (price - discountSize) / months : price - discountSize;
};
