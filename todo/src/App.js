import React, { useState, useReducer } from 'react';
import { Reducer } from './reducers/reducer';
import './App.css';

function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(Reducer, { 
    todos: [], 
    todoCount: 0,
  });
  const [text, setText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div>ToDo List [ <span style={{color: '#61dafb', margin: '0px', padding: '0px'}}>{ todoCount }</span> ]</div>
        <div>
          { todos.map((todo, index) => (
              <div 
              key={index} 
              onClick={() => dispatch(
                { type: "TOGGLE_TODO", index }
              )}
              style={{
                fontFamily: 'Tahoma',
                fontSize: '1.5rem',
                textDecoration: todo.completed ? 'line-through' : "",
                color: todo.completed ? '#61dafb' : 'dimgray',
                cursor: 'pointer'
              }}
              >
                { todo.text }
              </div>
            )) 
          }
          <form
            onSubmit={e => {
              e.preventDefault();
              text.length === 0 ? alert("No Task To Add!") : dispatch({ type: "ADD_TODO", text });
              setText("");
            }}
          >
            <input 
              type="text"
              name="input"
              value={ text }
              onChange={e => setText(e.target.value)}
            /><br />
            <button>
              Add
            </button>
          </form>
          <button onClick={() => {dispatch({ type: "REMOVE_TODO" })}}>
            Clear Completed
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
