import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newTask: '',
            tasks:  []
        };
    }
    handleAddTask = () => {
        if(this.state.newTask === '') return;
        const newTasks = [...this.state.tasks, this.state.newTask]
        this.setState({
            newTask: '',
            tasks: newTasks
        });
    }
    handleDeleteTask = (index) => {
        const newTasks = [...this.state.tasks]
        newTasks.splice(index, 1);
        this.setState({tasks: newTasks})
    }
    render() {
        return (
            <div>
                <input type = "text" placeholder="Nova tarefa" value={this.state.newTask} onChange={(event) => this.setState ({newTask: event.target.value})}/>
                <button onClick={this.handleAddTask}>Adicionar</button>
                <ul>
                    {this.state.tasks.map((task, index) => (<li key = {index}>{task} <button onClick={() => this.handleDeleteTask(index)}>Excluir</button></li>))}
                </ul>
            </div>
        );
    }
}

export default App;