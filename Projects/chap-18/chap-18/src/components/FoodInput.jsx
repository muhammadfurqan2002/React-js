let FoodInput=({inputHandler})=>{
    // const shoot=(data,event)=>{
    //         alert(event.type);
    // }
    // return <input onChange={(event)=>{
    //     shoot("Goal!",event);
    // }} type="text" name="content" id="content" placeholder="Enter food name"/>
    // return <input onChange={inputHandler} type="text" name="content" id="content" placeholder="Enter food name"/>
    return <input onKeyDown={inputHandler} type="text" name="content" id="content" placeholder="Enter food name"/>
}

export default FoodInput;