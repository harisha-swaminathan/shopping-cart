import React from 'react';
import Modal from 'react-modal';

class LoginModal extends React.Component {

  state={
    isOpen:true
  };
  ClearSelectedOption=()=>{
    this.setState((prev)=>({
      isOpen:!prev
    }));
  };
  componentWillReceiveProps() {
    this.setState({
      isOpen : true
    });
  }
  render(){
    console.log(this.props);
    return(
      <Modal
      isOpen={!!this.state.isOpen}
      onRequestClose={this.ClearSelectedOption}
      contentLabel="Please Login "
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3>Please Login to add item to cart! </h3>
         
         <button className="button-color" onClick={this.ClearSelectedOption}> Okay</button>
    </Modal>
    );
  }
}


export default LoginModal;
