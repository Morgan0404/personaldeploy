// PascalCasing (type of format you should write it in)

function Message(){
    // JSX: javasScript XML - will be compiled to java script
    
    //adds name dynamically if name is not empty  
    const name = 'Morgan';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1> Hellow World</h1>

}

export default Message;