import * as React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Session, UserService } from '../../api'
import { AppState, Actions, store } from '../../store'
import { connect } from 'react-redux';


type ParState = {
  ok: boolean,
  message: string,
//  session?: Session,
}
type ParProps = {
//  classes?: any
  redux? : any
}

class LoginForm extends React.Component<ParProps, ParState>  {

  v_username: string | any;
  v_password: string | any;

  change_username = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    this.v_username = target.value;
  }
  change_password = (e: React.FormEvent) => {
    let target = e.target as HTMLInputElement;
    this.v_password = target.value;
  }

  constructor(props: any) {
    super(props, {});
    this.state = {
      ok: false,
      message: ''
    };
  }

  async apiLogin(p_username: string, p_password: string) {
    UserService.postLogin({username:p_username,password:p_password},{} ).then(
      (ret: Session) => {
/*        this.setState({
          ...this.state,
          session: ret
        })
        */
       if (ret.message=='OK')
          store.dispatch(Actions.reduxStore.setSession(ret.session));
//         store.dispatch(Actions.auth.setSession(ret.session));
       else
         alert('Błąd logowania');
      }
    ).catch((err: any) => {
      alert('API Error: ' + p_username+ ' == '+
               p_password+' == '+JSON.stringify(err));
    }
    );
  }

  render = () => {

    let btnSetPasswordClick = () => {
      this.apiLogin(this.v_username, this.v_password)
    }
    if (this.props.redux.session) {
     return (<div id="session" style={{display: 'none'}}>{this.props.redux.session}</div>)
    }
    return (
      <form id="passwordext-form" name="passwordext-form"
        method="post" action="">
        <div id="session"  style={{display: 'none'}}>{this.props.redux.session}</div>
        <TextField
          onChange={(x: React.FormEvent) => this.change_username(x)}
          label="username"
        />
        <br />
        <TextField
          onChange={(e: React.FormEvent) => this.change_password(e)}
          label="password"
          type="password" />
        <br />
        <span style={{ color: 'red' }}>
          {this.state.message}
        </span>
        <br />
        <Button variant="contained" color="primary"
          onClick={btnSetPasswordClick}>
          Login
        </Button>
      </form>
    )

  }
}

const mapStateToProps = (state : AppState) => ({
  redux : state.reduxStore
//  redux : state.auth 
});

export default connect(mapStateToProps)(LoginForm);
