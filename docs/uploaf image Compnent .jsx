import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './compo./App';
import App from './container/App'
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'
// Initialize Firebase
import store from "./store/index";
import { Provider } from "react-redux";

class FileUpload extends React.Component {
  constructor () {
    super()
    this.state = {
      uploadValue: 0
    }
  }




    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadValue: percentage
      })
    }, (error) => {
      console.error(error.message)
    }, () => {
      // Upload complete
      this.setState({
        picture: task.snapshot.downloadURL
      })
    })
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100'>
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type='file' onChange={this.handleOnChange.bind(this)}/>
        <br />
        <img width='90' src={this.state.picture} />
      </div>
    )
  }
}



ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider> 
  <FileUpload/>

  , document.getElementById('root'));
registerServiceWorker();



