import React, { Component } from 'react';
import axios from 'axios';

// BŁĘDNY ADRES ŻEBY SPOWODOWAĆ BŁĄD!
const ADRES_URL = 'https://books.otwartaedukacja.pl/books';
const BAD_URL = 'https://books.otwartaedukacja.pl/404'

const correctURL = () => axios(ADRES_URL);
const badURL = () => axios(BAD_URL);
const userError = () => axios.post(ADRES_URL);

const throwError = message => {
  console.error(message);
  console.log(typeof(message));
  throw Error(message);
}

export const getBooks = (request, callBack) => {
 request().then(
  (response) => {    
    if (response.data.errors) {
      // Błąd zwrócony jako HTTP 200, {"errors": ..., "message": ...}
      throwError(response.data.message);
    }
    callBack(response.data);
  }
 ).catch(
   // Błąd HTTP
   throwError
 )
}

//const getBooksAA = async (): Promise<any> => {
async function getBooksAA(request) {
  try {
    const response = await request();
    if (response.data.errors) {
      // Błąd zwrócony jako HTTP 200, {"errors": ..., "message": ...}
      throwError(response.data.message);
    }    
    return response.data;
  } catch (error) {
    // Błąd HTTP
    throwError(error);
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = { dane : ""}
  }

  przeczytano = (dane) => {
    console.log(dane);
    this.setState({...this.state, dane: dane});
  }

  odczyt = (request) => {
    console.log('czytam');
    getBooks(request, this.przeczytano);
  }

  odczytAA = async (request) => {
    console.log('czytam (aa)');
    const dane = await getBooksAA(request);
    if (dane) this.przeczytano(dane);
  }

  render() {
    return <div>
      <button onClick={ () => this.odczyt(correctURL) }>Odczyt</button>
      <button onClick={ () => this.odczytAA(correctURL) }>Odczyt AA</button>

      <button onClick={ () => this.odczyt(badURL) }>Błąd HTTP</button>
      <button onClick={ () => this.odczytAA(badURL) }>Błąd HTTP Async</button>

      <button onClick={ () => this.odczyt(userError) }>HTTP ok, błąd w formacie JSON</button>
      <button onClick={ () => this.odczytAA(userError) }>HTTP ok, błąd w formacie JSON Async</button>

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
