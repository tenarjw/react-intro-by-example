import * as  React from 'react';


const Najprostszy = (props) => (<p>Najprostszy</p>);

// komponenty bezstanowe  - interfejs React.SFC
type Props2 = {
  nazwa: string;
}
const KomponentSFC : React.SFC<Props2> = (props) => {
  return <div><b>Bezstanowy z parametrem: </b>
  Nazwa = {props.nazwa}</div>
}

// komponenty stanowe
type Props3 = {
  opis: string;
  srodek: React.ReactNode;
}
type State3 = {
  licznik : number;
}
class Komponent3 extends React.Component<Props3, {}> {
  state : State3;
  constructor(props) {
    super(props);
    this.state = { licznik : 0}
  }

  private klik = (event: React.MouseEvent<HTMLButtonElement>) : void =>
   { this.setState({licznik: this.state.licznik+1})}

  render() {
   return <div><br />Komponent z licznikiem 
   i parametrem JSX (link)<br />
   opis= {this.props.opis}:<br />
   parametr JSX = {this.props.srodek}<br />
   <button onClick={ this.klik }>Kliknij [{this.state.licznik}]
             </button>
           </div>
  }
}


class Hello2 extends React.Component<{
/**
* @default 'NN'
*/
imie?: string,
nazwisko: string
}> {
static defaultProps = {
  imie: 'NN'
}
render() {
  const imie = this.props.imie!;
  return (
<div>
<br />
Z domyślną wartością
<div>{imie}</div>
<div>{this.props.nazwisko}</div>
</div>
);
}
}
const Hello: React.SFC<{ name: string }> = (props) => {
  return (
    <div>
      <h1>Witaj {props.name}</h1>
      <h2>Testowe komponenty:</h2>
      <Najprostszy />
      <KomponentSFC nazwa="test SFC" />
      <Komponent3 opis="test JSX" srodek={<a href="#">OK</a>}/>
      <Hello2  nazwisko='' />
    </div>
  );
}

export default Hello;