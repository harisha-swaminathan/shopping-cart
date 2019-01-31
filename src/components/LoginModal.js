import React from 'react';
import Modal from 'react-modal';

class LoginModal extends React.Component {

  // ClearSelectedOption=()=>{
  //   this.setState({
  //     isOpen:false
  //   })
  // };

  render(){
    console.log(this.props);
    return(
      <Modal
      isOpen={!!this.props.open}
      onRequestClose={this.props.ClearSelectedOption}
      contentLabel="Please Login"
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3>Please Login to add item to cart! </h3>
         
         <button className="button-color" onClick={this.props.ClearSelectedOption} >Okay</button>
    </Modal>
    );
  }
}


export default LoginModal;
