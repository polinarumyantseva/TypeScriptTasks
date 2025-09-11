import { totalPrice } from './task1.js';
import { normalizeData, posts } from './task2.js';
import { COMMENTS_URL, getData } from './task3.js';

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

// Задание 3
getData(COMMENTS_URL).then((res) => console.log(res));

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
