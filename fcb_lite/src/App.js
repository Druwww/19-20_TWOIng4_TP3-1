import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import maData from "./DataPersonnes.js"

class ProfilUser extends React.Component {
  constructor(props) {
    console.log(props.numero, maData[props.numero].nom);
    super(props);
  }



  render() {
    console.log("Render Profil user et state : ", maData[this.props.numero].nom);

    return (
        <div>
          <p> Son nom : { maData[this.props.numero].nom}</p>
        </div>
    );
  }

}

class Profil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numeroProfil : 0,
    }
    
    this.handleClickBouttonClick = this.handleClickBouttonClick.bind(this);
  }

  handleClickBouttonClick(i) {

    this.setState(
      {numeroProfil : i}
    )
    

  }

  renderProfilButton(i) {
    return (
      <Button className="BoutonProfil"  onClick={() => this.handleClickBouttonClick(i)} color="primary" > {maData[i].nom} </Button>
    );
  }

  render() {
    console.log("Render et Nouveau state : ", this.state.numeroProfil);
    return (
      <div>
        <div>
          {this.renderProfilButton(0)}
          {this.renderProfilButton(1)}
          {this.renderProfilButton(2)}
        </div>
        <div>
          <ProfilUser numero={this.state.numeroProfil}/>
        </div>
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
