import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isValid, setIsValid] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Update form data
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Validation function to check if form fields are valid
    const validateForm = () => {
        const { name, email, phone, message } = formData;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern
        const phonePattern = /^[0-9]{10}$/; // Ensures phone number is 10 digits

        return {
            name: name.trim() !== '',
            email: emailPattern.test(email),
            phone: phonePattern.test(phone),
            message: message.trim() !== ''
        };
    };

    // Update validation state when form data changes
    useEffect(() => {
        setIsValid(validateForm());
    }, [formData]);

    // Handle form submission using Formspree API
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(isValid).every(Boolean)) {
            // Submit form data to Formspree
            fetch('https://formspree.io/f/xbjverlv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (response.ok) {
                        setSubmitted(true);
                        setError('');
                        console.log('Form submitted successfully!');
                        // Clear form data after successful submission
                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            message: ''
                        });
                    } else {
                        throw new Error('Form submission failed');
                    }
                })
                .catch((err) => {
                    setError(err.message);
                    console.error('Error submitting form:', err);
                });
        }
    };

    // Function to generate WhatsApp link
    const generateWhatsAppLink = () => {
        const whatsappMessage = `Hello, my name is ${formData.name}. Here's my message: ${formData.message}`;
        const phoneNumber = '8102472607'; // Your WhatsApp number
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    };

    return (
        <div className="contact-container text-xl font-serif  py-12 px-8 flex flex-col items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Connect with Me!</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg space-y-6">
                {/* Name Field */}
                <div className="form-group">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ${isValid.name ? 'border-green-500' : ''}`}
                        placeholder="Enter your name"
                    />
                    {isValid.name && <span className="text-green-500 mt-1">Input is Valid!</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ${isValid.email ? 'border-green-500' : ''}`}
                        placeholder="Enter your email"
                    />
                    {isValid.email && <span className="text-green-500 mt-1">Input is Valid!</span>}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ${isValid.phone ? 'border-green-500' : ''}`}
                        placeholder="Enter your phone number"
                    />
                    {isValid.phone && <span className="text-green-500 mt-1">Input is Valid!</span>}
                </div>

                {/* Message Field */}
                <div className="form-group">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ${isValid.message ? 'border-green-500' : ''}`}
                        placeholder="Enter your message"
                        rows="5"
                    />
                </div>

                {/* Conditionally Render Submit Button */}
                {Object.values(isValid).every(Boolean) && !submitted && (
                    <div className="form-group">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                )}

                {/* WhatsApp Option */}
                {Object.values(isValid).every(Boolean) && !submitted && (
                    <div className="form-group">
                        <a
                            href={generateWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-auto bg-green-500 text-xl text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300 block text-center"
                        >
                            Message on WhatsApp
                        </a>
                    </div>
                )}

                {/* Success or Error Messages */}
                {submitted && (
                    <div className="text-green-500 font-bold">
                        Your message has been sent successfully!
                    </div>
                )}
                {error && (
                    <div className="text-red-500 font-bold">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Contact;
