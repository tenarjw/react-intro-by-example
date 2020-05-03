import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { definition, create, combine, StateOf } from 'redux-compact';
//import { setValueReducer  } from 'redux-compact/plugins';

import i18n from '../cfg/i18n'
import CONFIG from 'cfg/config';

interface IStore {
  lang : string; 
  session? : string;
};

const reduxStore = definition<IStore>()
  .setDefault(
    { 
      lang : CONFIG.lang[0],
      session : undefined
    })
  .addReducers({
    setSession: (reduxStore: IStore, newSession : string) => (
      {...reduxStore, session : newSession }),
    setLang : (reduxStore: IStore, newLang : string) => 
      {   i18n.changeLanguage(newLang)
          return({...reduxStore, lang: newLang }) 
       }
  });

/* optional:

  const auth = definition<string | undefined>().
  setDefault(window.localStorage.getItem('session') || undefined).
  use(setValueReducer).addActionCreators({
    setSession: function (session: string) {
      window.localStorage.setItem('session', session);
      return this.setValue(session);
    },
    resetSession: function () {
      window.localStorage.removeItem('session');
      return this.setValue(undefined)
    }
  });
  
*/

const appState = combine({
//  auth,
  reduxStore
});
  
const { Actions, reduce } = create(appState);
export type AppState = StateOf<typeof appState>;

export const store: Store<AppState> = createStore(  reduce,
  applyMiddleware(thunk, logger),
);

export { Actions  };
