import React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import maData from "./DataPersonnes.js"

class ProfilUser extends React.Component {

}


class Profil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nomProfil : maData[0].nom,
    };
  }

  handleClick(numeroProfil) {
    this.setState({
      nomProfil : maData[numeroProfil].nom,
    });
  }

  renderProfilButton(i) {
    return (
      <Button outline onClick={() => this.handleClick(i)} color="primary">{maData[i].nom}</Button>
    );
  }

  render() {
    return (
        <div>
          {this.renderProfilButton(0)}
          {this.renderProfilButton(1)}
          {this.renderProfilButton(2)}
        </div>
    );
  }
}

function App() {
  return (
    <Profil></Profil>
  );
}

export default App;
