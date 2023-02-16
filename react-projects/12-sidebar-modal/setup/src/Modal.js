import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<div
					className='modal-overlay show-modal'
					onClick={props.onClose}></div>,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<div className='modal-container '>
					<FaTimes
						className='close-modal-btn'
						onClick={props.onClose}
					/>
					<div>{props.children}</div>
				</div>,
				document.getElementById('backdrop-root')
			)}
		</>
	);
};

export default Modal;
