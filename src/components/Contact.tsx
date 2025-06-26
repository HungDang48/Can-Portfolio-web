import React, { useState } from 'react';
import './Contact.css';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Email', icon: '📧', url: 'mailto:contact@example.com' }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Liên Hệ</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Hãy liên hệ với tôi!</h3>
            <p>
              Tôi luôn sẵn sàng lắng nghe những ý tưởng mới và cơ hội hợp tác thú vị. 
              Hãy gửi tin nhắn cho tôi nếu bạn muốn thảo luận về dự án hoặc chỉ đơn giản là muốn kết nối.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Địa chỉ</h4>
                  <p>Hà Nội, Việt Nam</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>contact@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Điện thoại</h4>
                  <p>+84 123 456 789</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Theo dõi tôi</h4>
              <div className="social-icons">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Nhập email của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Tiêu đề</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Nhập tiêu đề tin nhắn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Tin nhắn *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Nhập nội dung tin nhắn của bạn"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Có lỗi xảy ra. Vui lòng thử lại sau.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 