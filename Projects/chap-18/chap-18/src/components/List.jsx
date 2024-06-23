import { useState } from "react";
import ListItem from "./ListItem";

let UlList = ({ array }) => {
    let obj = {
        name: "furqan",
        course: "computer science",
        credit: 133,
        sem: "6th"
    }
    let [checkColor, setCheckColor] = useState([]);
    let buttonHandler = (item) => {
        if (!checkColor.includes(item)) {
                let filter=[...checkColor,item]
            setCheckColor(filter);
        } else {
            let filter= checkColor.filter((e)=>{
                    return e!==item
            })
            setCheckColor(filter)
        }
    }
    return (
        <ul class="list-group">
            {/* <li class="list-group-item">{obj.name}</li>
            <li class="list-group-item">{obj.course}</li>
            <li class="list-group-item">{obj.credit}</li>
            <li class="list-group-item">{obj.sem}</li> */}
            {array.map((e) => <ListItem key={e} item={e} colorScheme={checkColor.includes(e)} ButtonHandle={() => buttonHandler(e)}></ListItem>)}
        </ul>
    );

}



export default UlList;