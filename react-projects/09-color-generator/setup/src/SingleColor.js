import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
	const hexColor = rgbToHex(...rgb);
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(hexColor)
    setAlert(true)
  }
  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => {
      clearTimeout(alertTimer)
    };
  }, [alert]);
	return (
		<div
			className={`color ${index > 10 ? 'color-light' : ''}`}
			style={{ backgroundColor: hexColor }}
      onClick={handleCopyToClipboard}>
			<div className='percent-value'>{weight}%</div>
			<div className='color-value'>{hexColor}</div>
      {alert && <div className="alert">copied to clipboard</div>}
		</div>
	);
};

export default SingleColor;
