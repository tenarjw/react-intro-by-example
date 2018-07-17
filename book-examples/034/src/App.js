import React, { Component } from 'react';
import axios from 'axios';

const ADRES_URL = 'https://books.otwartaedukacja.pl/books';


const throwError = message => {
  console.error(message);
  alert(message);
  throw Error(message);
}

export const getBooks = (callBack) => {
 axios(ADRES_URL).then(
  (response) => {
      callBack(response.data);
  }
 ).catch(
      throwError
 )
}

//const getBooksAA = async (): Promise<any> => {
async function getBooksAA() {
  const response = await axios(ADRES_URL);
  if (response.data.errors) throwError(response.data.message);
  return response.data;
}

class App extends Component {

  constructor() {
    super();
    this.state = { dane : ""}
  }

  przeczytano = (dane) => {
    this.setState({...this.state, dane: dane});
  }

  odczyt = () => {
    console.log('czytam');
    getBooks(this.przeczytano);
  }

  odczytAA = async () => {
    console.log('czytam (aa)');
    const dane = await getBooksAA();
    if (dane) this.przeczytano(dane);
  }

  render() {
    return <div>
      <button onClick={ this.odczyt }>Odczyt</button>
      <button onClick={ this.odczytAA }>Odczyt AA</button>
      <div>{
          this.state.dane &&
          this.state.dane.map(function (book, index) {
            return <div>{index}: {book.title}</div>
          })
       }
      </div>
    </div>;
  }

}

export default App;
