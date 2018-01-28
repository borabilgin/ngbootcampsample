import { List } from './list';

const items = [
    {
        id: 2,
        task: 'Chores'
    },
    {
        id: 3,
        task: 'Chores'
    }
];

export const LISTS: List[] = [
    { id: 16, name: 'Personal', items },
    { id: 17, name: 'Work', items },
    { id: 18, name: 'Kids', items }
];
