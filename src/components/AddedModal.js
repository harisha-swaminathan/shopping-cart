import React from 'react';
import Modal from 'react-modal';

class AddedModal extends React.Component {
  state={
    isOpen:true
  };
  ClearSelectedOption=()=>{
    this.setState({
      isOpen:false
    })
  };
  render(){
    return(
      <Modal
      isOpen={!!this.state.isOpen}
      onRequestClose={this.ClearSelectedOption}
      contentLabel="Item added to cart"
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3>Item added to cart!</h3>
         
         <button className="button-color" onClick={this.ClearSelectedOption}>Okay</button>
    </Modal>
    );
  }
}


export default AddedModal;
