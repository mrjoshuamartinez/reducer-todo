export const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { 
                todos: [...state.todos, { text: action.text, completed: false, id: Date.now() }],
                todoCount: state.todoCount + 1
            };
        case 'TOGGLE_TODO':
            return { 
                todos: state.todos.map((todo, index) => index === action.index ? { ...todo, completed: !todo.completed } : todo),
                todoCount: state.todoCount
            };
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(t => !t.completed),
                todoCount: state.todos.length
                }
        default:
            return state;
    };
 };