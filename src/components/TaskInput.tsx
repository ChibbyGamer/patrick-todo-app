type TaskInputData = {
        numberOfGreeting: number;
        greetings: string[];
        color: string
        
        
};


function TaskInput(componentData: TaskInputData){
    return <>
        <p style={{color : componentData.color}}>Good Morning</p>
        <p style={{color : componentData.color}}>Hello</p>
        <p style={{color : componentData.color}}>Greetings</p>
        {componentData.greetings.map((greetings) => <p style={{color : componentData.color}}>Greetings To you!</p>)
        
    }     
    
    
    </>;
}

export default TaskInput;