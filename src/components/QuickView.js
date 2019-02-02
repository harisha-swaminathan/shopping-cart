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
     <div className="modal">
     <h3 className="modal__title">{this.props.selectedOption.title}</h3>
         <div >
         <img 
         height={100}
         title={this.props.selectedOption.title}
         src={this.props.selectedOption.img}
         />
         </div>
         <div className="modal-scroll">
         <p className="modal__body">{this.props.selectedOption.description}</p>
         </div>
         <h2 className="modal__title">${this.props.selectedOption.price}</h2>
         <button className="button-color" onClick={this.ClearSelectedOption}>Close</button>
     </div>
     
    </Modal>
    );
  }
}


export default QuickView;
