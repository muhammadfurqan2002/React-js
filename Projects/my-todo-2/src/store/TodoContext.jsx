import { createContext } from "react";
import { useReducer, useState } from "react";

export const todo = createContext([]);


const dispatchItemHandler = (curItems, state) => {
    let newItems = curItems;
    if (state.type === "New_Item") {
        newItems = [...curItems, { name: state.data.name, date: state.data.date }]
    } else {
        newItems = curItems.filter((item) => item.name !== state.data.name);
    }
    return newItems;
}



 const TodoContextProvider = (props) => {
    const [item, disPatchItems] = useReducer(dispatchItemHandler, [])
    function clickHandler(name, date) {
        if (name === '' || date === '') {
            alert("Invalid Data");
        }

        const payLoad = {
            type: "New_Item",
            data: {
                name,
                date
            }
        }

        disPatchItems(payLoad)
    }

    function Delete(name) {

        const payLoad = {
            type: "Delete_Item",
            data: {
                name,
            }
        }

        disPatchItems(payLoad)
    }
    return <todo.Provider value={{ todoItems: item, clickHandler, Delete }}>
       {props.children}
    </todo.Provider>
}


export default TodoContextProvider;