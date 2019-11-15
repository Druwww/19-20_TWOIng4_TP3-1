import React from 'react';
import './App.css';
import { Button, Row, Col} from 'reactstrap';
import maData from "./DataPersonnes.js"


class ProfilUser extends React.Component {
  constructor(props) {
    console.log(props.numero, maData[props.numero].nom);
    super(props);
    this.state ={
      backgroungColor : 0,
    }
  }

  handleClickBouttonColor(){
    const min = 0;
    const max = 4;
    const rand = min + Math.random() * (max - min);
    console.log("New chiffre : ", Math.round(rand));
    this.setState(
      {backgroungColor : Math.round(rand)}
    )
  }

  render() {

    const tableauColor = ["Bdark", "Bblue", "Bred", "Borange", "Bpurple"];
    console.log("color : ", tableauColor[this.state.backgroungColor])

    return (
        <div className={tableauColor[this.state.backgroungColor]}>
          <Row>
            <Col sm="12" md={{offset: 3 }}>
              <img src={maData[this.props.numero].photo} alt="pdp"/>
            </Col>
          </Row>
          <Row>
            <Col sm="6"><center><p>{maData[this.props.numero].nom}</p></center></Col>
            <Col sm="6"><center><p>{maData[this.props.numero].prenom}</p></center></Col>
          </Row>
          <Row>
            <Col sm="6"><center><p>{maData[this.props.numero].date}</p></center></Col>
          </Row>
          <Row>
            <Col sm="9"/>
            <Col sm="3"><Button onClick={() => this.handleClickBouttonColor()}>Change Style</Button></Col>
          </Row>

          
          
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
