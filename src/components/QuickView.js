import React from 'react';
import Modal from 'react-modal';

class QuickView extends React.Component {
  state={
    isOpen:true
  };
  ClearSelectedOption=()=>{
    this.setState((prevState)=>({
      isOpen:!prevState
    }));
  };

  render(){
    return(
      <Modal
      isOpen={!!this.state.isOpen}
      contentLabel="Selected Option"
      onRequestClose={this.ClearSelectedOption}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3>{this.props.selectedOption.title}</h3>
         <div >
         <img 
         height={300}
         title={this.props.selectedOption.title}
         src={this.props.selectedOption.img}
         />
         </div>
        <div>{this.props.selectedOption.description}</div>
         <div>${this.props.selectedOption.price}</div>
         <button className="button" onClick={this.ClearSelectedOption}>Close</button>
    </Modal>
    );
  }
}


export default QuickView;
