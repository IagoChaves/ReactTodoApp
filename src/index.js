import React from 'react';
import ReactDOM from 'react-dom';

let id =0;

const Todo = props =>(
    <li>
        <input type="checkbox" checked={props.todo.checked} onClick={props.onToggle} />
        <button onClick={props.onDelete}>Delete</button>
        <span>{props.todo.text}</span>
    </li>
)
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: []
        }
    }
    
    addtodo(){
        const text = prompt("What are you planning for?");
        this.setState({
          todos: [...this.state.todos, {id:id++, text:text, checked:false}]
        })
    }
    removetodo(id){
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      })
    }
    toggletodo(id){
      this.setState({
        todos:  this.state.todos.map(todo =>{
          if(todo.id !== id) return todo
          return{
            id: todo.id,
            text: todo.text,
            checked: !todo.checked
          }
        })
      })
    }
    render(){
        return(
            <div>
              <div>Todo count: {this.state.todos.length}</div>
              <div>checked todo count: {this.state.todos.filter(todo => todo.checked).length}</div>
                <button onClick={() =>this.addtodo()}>Add To-do!</button>
                <ul>
                    {this.state.todos.map(todo => <Todo 
                    onToggle={()=> this.toggletodo(todo.id)}                    
                   onDelete={()=> this.removetodo(todo.id)} 
                    todo={todo} />)}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
