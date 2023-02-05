// import React, { useEffect } from 'react'

const Alert = ({type, text}) => {
  return <div className={`alert ${type === 'success' ? 'alert-success' : 'alert-danger'}`}>{text}</div>
}

export default Alert
