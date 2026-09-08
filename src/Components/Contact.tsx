import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_rocj3k8',
        'template_9c8zak7',
        {
          from_name: formValues.fullName,
          email: formValues.email,
          message: formValues.message,
        },
        'JIqbpne1dmoOi8Qi5'
      );

      setSubmitStatus('success');
      setFormValues({
        fullName: '',
        email: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-10">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left - Avatar */}
          <div className="flex justify-center">
            <div className="w-32 h-40 bg-gradient-to-br from-orange-300 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={personalInfo.profileImage}
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formValues.fullName}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                required
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none"
              ></textarea>
            </div>

            {/* Status Message */}
            {submitStatus === 'success' && (
              <p className="text-xs text-green-600 bg-green-50 px-3 py-2 rounded">✓ Message sent!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded">✗ Failed to send</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 pt-4">
          <a href="#" className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
            <AiFillInstagram className="text-sm" />
          </a>
          <a href="#" className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
            <AiFillGithub className="text-sm" />
          </a>
          <a href="#" className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
            <BsTwitter className="text-sm" />
          </a>
          <a href="#" className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
            <AiFillLinkedin className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
