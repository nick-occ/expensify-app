import moment from 'moment';
import expenses from '../fixtures/expenses';
import expensesReducers from '../../reducers/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action =  {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: 4,
        description: 'Food',
        note: '',
        amount: 900,
        createdAt: moment(0).add(3,'days').valueOf()
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
    const description = 'Lunch';

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }
    const state = expensesReducers(expenses, action);
    expect(state[1].description).toBe(description);
});

test('should not edit expense if id not found', () => {
    const description = 'Lunch';

    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            description
        }
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});