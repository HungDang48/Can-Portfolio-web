import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
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
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Behance', icon: '🎨', url: 'https://behance.net' }
  ];

  return (
    <div className="contact-page page-transition">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">{t('contact.title')}</h1>
          <p className="contact-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{t('contact.title')}</h2>
              <p>
                {t('contact.info_text', 'Tôi luôn sẵn sàng lắng nghe những ý tưởng mới và cơ hội hợp tác thú vị. Dù bạn muốn đặt hàng một tác phẩm nghệ thuật, thảo luận về dự án, hay chỉ đơn giản là muốn kết nối, tôi rất mong được nghe từ bạn.')}
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>{t('contact.info.address')}</h4>
                    <p>{t('contact.info.address_value')}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>{t('contact.info.email')}</h4>
                    <p>{t('contact.info.email_value')}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>{t('contact.info.phone')}</h4>
                    <p>{t('contact.info.phone_value')}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">⏰</span>
                  <div>
                    <h4>{t('contact.info.work_time')}</h4>
                    <p>{t('contact.info.work_time_value')}</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>{t('contact.follow')}</h4>
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
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.placeholder_name')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.placeholder_email')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.placeholder_subject')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder={t('contact.form.placeholder_message')}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    {t('contact.form.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    {t('contact.form.error')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 