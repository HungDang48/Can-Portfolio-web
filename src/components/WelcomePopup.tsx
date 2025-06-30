import React from 'react';
import './WelcomePopup.css';

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => (
  <div className="welcome-popup-overlay">
    <div className="welcome-popup-content">
      <button className="welcome-popup-close" onClick={onClose}>×</button>
      <h2>Cảm ơn bạn đã ghé thăm!</h2>
      <p>Website này hoạt động tốt nhất trên màn hình máy tính.<br/>Vui lòng sử dụng PC để có trải nghiệm tối ưu.</p>
    </div>
  </div>
);

export default WelcomePopup; 