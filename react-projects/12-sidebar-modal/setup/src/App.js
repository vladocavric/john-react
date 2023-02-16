import React, {useContext} from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import GeneralContext from './context'
function App() {
  const {showModal, modalToggle} = useContext(GeneralContext);
  return (
    <>
      {showModal && <Modal onClose={modalToggle}><h2>Modal content</h2></Modal>}
      <Home />
      <Sidebar />
    </>
  )
}

export default App
