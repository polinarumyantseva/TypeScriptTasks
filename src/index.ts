import { totalPrice } from './task1.js';
import { normalizeData, posts } from './task2.js';

// Задание 1
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(`Стоимость с учетом скидки и рассрочки: ${price}`); // 6250

// Задание 2

console.log(normalizeData(posts));
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */
