import { totalPrice } from './task1.js';

// Задание 1
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(`Стоимость с учетом скидки и рассрочки: ${price}`); // 6250
