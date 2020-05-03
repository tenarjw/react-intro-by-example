type Config = {
    apiURL: string,
    apiKey: string,
    lang : string[]
};
let CONFIG: Config = {
    apiURL:  'http://127.0.0.1:5000',
    apiKey: '123456',
    lang: ['en','pl']
};

interface WindowInterface extends Window {
  config: Config;
}

let window2config = () => { // uruchamiane w App : render()
  var config : Config = (window as unknown as WindowInterface).config || {
    // gdy nie ma public/config.js, ustawiam na parametry z kompilacji - def. wyżej
    apiURL : CONFIG.apiURL,
    apiKey : CONFIG.apiKey,
    lang: CONFIG.lang
  }
  CONFIG.apiURL = config.apiURL;
  CONFIG.apiKey = config.apiKey;
  CONFIG.lang = config.lang;
}

export {window2config}
export default CONFIG;
