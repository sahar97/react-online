import './App.css';
import React , {useState} from 'react'
import Modal from 'react-modal'
function App() {
  const  [isOpenState, setisOpenState] = useState(false);
  Modal.setAppElement('#root')
  return (
    <div className="App">
      <button onClick={()=>setisOpenState(true)} >open </button>
     <Modal isOpen={isOpenState} onRequestClose={()=>setisOpenState(false)}>
       <h2>this is a Modal </h2>
       <p>Modal Body </p>
       <button onClick={()=>setisOpenState(false)}> close modal</button>
     </Modal>
     <h1>this is a new change from sahar </h1>
     <h1>this is the second change on the second branch</h1>
    </div>
  );
}

export default App;
