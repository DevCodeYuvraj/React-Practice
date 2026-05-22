import React, { useReducer, useState } from 'react';

const initialState = [
  { id: 1, text: "Task 1", completed: true },
  { id: 2, text: "Task 2", completed: false },
];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}

const TodoTable = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const finishedIcon = "https://img.icons8.com/?size=32&id=cL95UuXTO0nU&format=png";
  const pendingIcon = "https://img.icons8.com/?size=60&id=78597&format=png";

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TASK', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div>
      <div className="d-flex flex-column container  mt-5" style={{ maxWidth: '400px' }}>
        <div className="card h-100 w-100 shadow-sm   ">
          <div className="card-header  bg-white py-3">
            <h5 className=" mb-0">Todo List</h5>
          </div>

          {/* Input Header */}
          <div className="p-0 border-bottom">
            <form onSubmit={handleAdd} className="d-flex  ">
              <input className="form-control border-0 rounded-0" placeholder="Enter list item name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <button type="submit" className="btn btn-light border-start rounded-0 text-muted px-4"> Add Todo Item</button>
            </form>
          </div>

          {/* List Table */}
          <table className="table table-hover mb-0 style={{ maxWidth: '400px', maxHeight: '400px', overflowY: 'auto' }}">
            <tbody>
              {tasks.map(task => (
                <tr key={task.id} className=" align-middle">
                  <td style={{ width: '50px', textAlign: 'center' }}>
                    <img src={task.completed ? finishedIcon : pendingIcon} alt="status" style={{ width: '20px', cursor: 'pointer' }} onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id })} /> </td>
                  <td className={task.completed ? "text-decoration-line-through text-muted" : ""}>{task.text} </td>
                  <td className="text-end">
                    <button className="btn btn-outline-danger btn-sm px-3" onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}> Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoTable;