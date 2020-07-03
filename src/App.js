import React from "react";
import "./App.css";
import TablaEjemplo from "./Tabla";

const styles = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
};

const dataEjemplo = {
  id: 1,
  name: 'Cesar',
  username: 'itr',
  email: 'yo.ser.estudiante@gmail.com'
}

class App extends React.Component {
  state = {
    titulo: "Ricaldone",
    data: [],
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.setState({
        titulo: "Usuarios",
        data: json,
      }))
  }
  render() {
    console.log("STATE", this.state);
    return (
      <div>
        <h1>Tabla {this.state.titulo}</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <TablaEjemplo datos={this.state.data}/>
        </table>
      </div>
    );
  }
}

export default App;
