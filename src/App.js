import React from "react";
import "./styles.css";
class Contador extends React.Component {
  state = {
    count: 0
  };
  componentDidMount = () => {
    console.log("se monto");
  };
  componentDidUpdate = () => {
    console.log("actualizo");
  };
  componentWillUnmount = () => {
    console.log("se va a montar");
  };
  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  reset = () => {
    this.setState(prevState => ({ count: 0 }));
  };

  render() {
    return (
      <div className="App">
        <h2>¡Hola!</h2>
        <p> {this.state.count} </p>
        <button onClick={this.decrement}>descontar contador </button>
        <button onClick={this.increment}> Incrementar contador </button>
        <button onClick={this.reset}> Reiniciar contador </button>
      </div>
    );
  }
}
export default Contador;
