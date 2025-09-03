//Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев

interface ProductProps {
	price: number;
	discount: number;
	isInstallment: boolean;
	months: number;
}

export const totalPrice = ({ price, discount, isInstallment, months }: ProductProps): number => {
	const discountSize = (price * discount) / 100;
	return isInstallment ? (price - discountSize) / months : price - discountSize;
};
