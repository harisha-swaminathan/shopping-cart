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
  componentWillReceiveProps() {
    this.setState({
      isOpen : true
    });
  }

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
     
     <h3 className="modal_title">{this.props.selectedOption.title}</h3>
         <div className="modal_position">
         <img 
         height={150}
         title={this.props.selectedOption.title}
         src={this.props.selectedOption.img}
         />
         <div className="modal__scroll">
         <p className="modal_body">{this.props.selectedOption.description}</p>
         </div>
         <h2>${this.props.selectedOption.price}</h2>
         </div>
         <button className="button-color" onClick={this.ClearSelectedOption}>Close</button>
    
     
    </Modal>
    );
  }
}


export default QuickView;
