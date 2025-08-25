import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import contactCSS from './../Contact/Contact.module.css'

function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Basic validation
        if (!formData.user_name || !formData.user_email || !formData.message) {
            setMessage('Please fill in all required fields.');
            setIsLoading(false);
            return;
        }

        // EmailJS configuration
        emailjs.sendForm(
            'service_l3avrds', // You'll need to replace this with your EmailJS service ID
            'template_4bb83fl', // You'll need to replace this with your EmailJS template ID
            form.current,
            'MBArRfIjzOCz0BMM3' // You'll need to replace this with your EmailJS public key
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setMessage('✅ I\'ll get back to you soon.');
            setFormData({
                user_name: '',
                user_email: '',
                subject: '',
                message: ''
            });
            setIsLoading(false);
        }, (error) => {
            console.log('FAILED...', error.text);
            setMessage('❌ Failed to send message. Please try again.');
            setIsLoading(false);
        });
    };
    return (
        <div className={`${contactCSS.Contact_wrapper} section`} id="contact">
            <h2 className="section_title">My Contact</h2>
            <p className="section_paragraph">Let’s connect! I’m always open to learning, new opportunities, and exciting projects.</p>

            <form ref={form} onSubmit={sendEmail} className={contactCSS.form}>
                <div className={contactCSS.input_wrapper}>
                    <input 
                        type="text" 
                        name="user_name"
                        placeholder="Enter Name..." 
                        value={formData.user_name}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="email" 
                        name="user_email"
                        placeholder="Enter Email..." 
                        value={formData.user_email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={contactCSS.input_wrapper}>
                    <input 
                        type="text" 
                        name="subject"
                        placeholder="Enter Subject..." 
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                </div>
                <textarea 
                    name="message"
                    placeholder="Message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                
                {message && (
                    <div className={`${contactCSS.message} ${message.includes('✅') ? contactCSS.success : contactCSS.error}`}>
                        {message}
                    </div>
                )}
                
                <button type="submit" disabled={isLoading} className={contactCSS.submit_btn}>
                    {isLoading ? 'Sending...' : 'Submit'}
                </button>
            </form>
            
        </div>
    )
}

export default Contact