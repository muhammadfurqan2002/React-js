import {useContext} from 'react'
import {todo} from '../store/TodoContext'
function TodoItem() {
    const {todoItems,Delete}=useContext(todo);
    return (
        <div className="items-container">
            {todoItems.map((item, index) => (
                <div key={index} className="container">
                    <div className="row kg-row">
                        <div className="col-6">{item.name}</div>
                        <div className="col-4">{item.date}</div>
                        <div className="col-2">
                            <button type="button" onClick={()=>Delete(item.name)}  name="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoItem;
