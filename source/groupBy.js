'use strict';

/**
 * Функция, группирующая объекты в массиве по заданному ключу
 * @param {Array<Object>} array - массив объектов, которые нужно сгруппировать
 * @param {String} key - ключ, по которому будет происходить группировка
 * 
 * @example
 * const data = [
 *   { id: 1, category: 'fruit', name: 'apple' },
 *   { id: 2, category: 'fruit', name: 'banana' },
 *   { id: 3, category: 'vegetable', name: 'carrot' }
 * ];
 * 
 * // returns {
 * //   fruit: [
 * //     { id: 1, category: 'fruit', name: 'apple' },
 * //     { id: 2, category: 'fruit', name: 'banana' }
 * //   ],
 * //   vegetable: [
 * //     { id: 3, category: 'vegetable', name: 'carrot' }
 * //   ]
 * // }
 * groupBy(data, 'category');
 * 
 * @returns {Object} - объект, где ключи — это уникальные значения указанного ключа из объектов массива, а значения — массивы объектов, принадлежащих к каждой группе
 */
function groupBy(array, key) {
  return array.reduce((result, currentValue) => {
    const groupKey = currentValue[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    
    result[groupKey].push(currentValue);
    return result;
  }, {});
}

