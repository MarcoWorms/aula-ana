import React, { Component } from 'react';

function Adicionar (props) {
  return (
    <div>
      <input onChange={(event) => props.escreverNovo(event.target.value)} />  
      <button onClick={props.adicionar} >Adicionar</button>
    </div>
  )
}

function Remover (props) {
  return (
    <button onClick={props.remover}>-</button>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      novo: ""
    };
  }
  adicionar(todo) {
    this.setState({
      todos: [...this.state.todos, this.state.novo],
      novos: ""
    });
  }
  remover(index){
    this.setState({
      todos: [...this.state.todos.slice(0, index),...this.state.todos.slice(index + 1, this.state.todos.length)]
    });
  }
  escreverNovo(todo){
    this.setState({novo: todo})
  }
  render() {
    return (
      <div>
        <Adicionar
          adicionar={() => this.adicionar()}
          escreverNovo={(todo) => this.escreverNovo(todo)} 
        />
        {this.state.todos.map((todo, index) => (
          <div key={index} >
            <p>{todo}</p>
            <Remover remover={() => this.remover(index)} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
