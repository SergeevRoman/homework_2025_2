'use strict';

QUnit.module('Тестируем функцию groupBy', () => {
    QUnit.test('Работает правильно с группировкой по ключу', (assert) => {
        const data = [
            { id: 1, category: 'fruit', name: 'apple' },
            { id: 2, category: 'fruit', name: 'banana' },
            { id: 3, category: 'vegetable', name: 'carrot' },
            { id: 4, category: 'fruit', name: 'orange' },
            { id: 5, category: 'vegetable', name: 'lettuce' }
        ];
        const result = groupBy(data, 'category');

        assert.deepEqual(result, {
            fruit: [
                { id: 1, category: 'fruit', name: 'apple' },
                { id: 2, category: 'fruit', name: 'banana' },
                { id: 4, category: 'fruit', name: 'orange' }
            ],
            vegetable: [
                { id: 3, category: 'vegetable', name: 'carrot' },
                { id: 5, category: 'vegetable', name: 'lettuce' }
            ]
        }, 'Объекты должны быть сгруппированы по категории');
    });

    QUnit.test('Работает правильно с пустым массивом', (assert) => {
        const emptyData = [];
        const result = groupBy(emptyData, 'category');

        assert.deepEqual(result, {}, 'Пустой массив должен возвращать пустой объект');
    });

    QUnit.test('Работает правильно, когда все объекты имеют одно значение по ключу', (assert) => {
        const data = [
            { id: 1, category: 'fruit', name: 'apple' },
            { id: 2, category: 'fruit', name: 'banana' },
            { id: 3, category: 'fruit', name: 'orange' }
        ];
        const result = groupBy(data, 'category');

        assert.deepEqual(result, {
            fruit: [
                { id: 1, category: 'fruit', name: 'apple' },
                { id: 2, category: 'fruit', name: 'banana' },
                { id: 3, category: 'fruit', name: 'orange' }
            ]
        }, 'Все объекты должны быть сгруппированы под одним значением');
    });

    QUnit.test('Работает правильно с одним объектом', (assert) => {
        const data =[
            {id: 1, category: 'fruit', name: 'apple'}
        ];
        const result = groupBy(data, 'category');

        assert.deepEqual(result, {
            fruit: [
                {id: 1, category: 'fruit', name: 'apple'}
            ]
        }, 'Один объект группируется под одним значением');
    });

    QUnit.test('Работает правильно при группировке по ключу имени', (assert) => {
        const data = [
            {id: 1, category: 'fruit', name: 'apple'},
            {id: 2, category: 'fruit', name: 'orange'},
            {id: 3, category: 'fruit', name: 'apple'},
            {id: 4, category: 'vegetable', name: 'carrot'}
        ];
        const result = groupBy(data, 'name');

        assert.deepEqual(result, {
            apple: [
                {id: 1, category: 'fruit', name: 'apple'},
                {id: 3, category: 'fruit', name: 'apple'}
            ],
            orange: [
                {id: 2, category: 'fruit', name: 'orange'} 
            ],
            carrot: [
                {id: 4, category: 'vegetable', name: 'carrot'}
            ]
        }, 'Все объекты группируются по именам');
    });

    QUnit.test('Работает правильно по несуществующему ключу', (assert) => {
        const data = [
            { id: 1, category: 'fruit', name: 'apple' },
            { id: 2, category: 'fruit', name: 'banana' },
            { id: 3, category: 'vegetable', name: 'carrot' },
            { id: 4, category: 'fruit', name: 'orange' },
            { id: 5, category: 'vegetable', name: 'lettuce' }
        ];
        const result = groupBy(data, 'wrong_key');

        assert.deepEqual(result, {
            undefined: [
                { id: 1, category: 'fruit', name: 'apple' },
            { id: 2, category: 'fruit', name: 'banana' },
            { id: 3, category: 'vegetable', name: 'carrot' },
            { id: 4, category: 'fruit', name: 'orange' },
            { id: 5, category: 'vegetable', name: 'lettuce' }
            ]
        }, 'Все объекты сгруппировались под одним неопределенным ключом');
    });
});
