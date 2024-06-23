let ListItem=({item,colorScheme,ButtonHandle})=>{


return <li class={`list-group-item ${colorScheme && 'active'}`}>
        <span>{item}</span>
        <button style={{"float":"right"}} onClick={ButtonHandle}>Buy</button>
    </li>
}


export default ListItem;