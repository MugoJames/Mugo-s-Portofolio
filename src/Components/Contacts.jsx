import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { TfiEmail } from "react-icons/tfi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { LuCalendarClock } from "react-icons/lu";
import { BsSendFill } from "react-icons/bs";

function Contacts() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    message: '',
    emailSubject:''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    validateForm();
  };

  const validateForm = () => {
    const form = document.querySelector("[data-form]");
    if (form) {
      setIsFormValid(form.checkValidity());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to EmailJS
    emailjs.send('service_rocj3k8', 'template_9c8zak7', {
      from_name: formValues.fullName,
      email: formValues.email,
      emailSubject: formValues.emailSubject,
      message: formValues.message,
    }, 'JIqbpne1dmoOi8Qi5')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email...', error);
      });
  
    // Reset form after submission
    setFormValues({
      fullName: '',
      email: '',
      emailSubject: '',
      message: ''
    });
    setIsFormValid(false);
  };
  

    return (
    <div>
        <div className='text-white p-8'>
            <h1 className='capitalize text-[28px]'>Contact</h1>
        <div className='bg-orange-yellow-crayola w-10 mt-2 h-[5px] rounded-full'></div>
        <h3 className='mb-[10px] text-white-2 lg:text-[18px] mt-5'>
               Got a project in mind or just want to say hi? I'd love to hear from you! Drop me a message, and let's <span className='text-vegas-gold' >connect</span>.
        </h3>
      </div>
      <div className='lg:flex '>
        <div className='bg-eerie-black-2 rounded-[20px] border-jet p-10 m-10'>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative bg-border-gradient-onyx border border-jet w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <TfiEmail/> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[11px] '>Email</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">jamonjoroge816@gmail.com</a>
                    </div>
                </li>
            </ul>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative bg-border-gradient-onyx border border-jet w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <IoPhonePortraitOutline/> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[11px] '>phone</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">+254 114 049 760</a>
                    </div>
                </li>
            </ul>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative bg-border-gradient-onyx border border-jet w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <SlLocationPin/> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[11px] '>Location</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">Nairobi, Kahawa Sukari, Kenya</a>
                    </div>
                </li>
            </ul>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative bg-border-gradient-onyx border border-jet w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <LuCalendarClock/> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[11px] '>Business Hours</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">Available 24/7</a>
                    </div>
                </li>
            </ul>
        </div>
        <div className='bg-eerie-black-2 rounded-[20px] border-jet p-10 m-10'>
            <h3 className='mb-[20px] text-white-2 text-[20px]'>Contact Form</h3>
            <form data-form onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-[25px] mb-[25px]'>
                    <input 
                       className='text-white-2 bg-transparent outline-none py-[13px] px-[20px] text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-yellow-crayola focus:invalid:border-bittersweet-shimmer' 
                       type="text" 
                       name='fullName' 
                       placeholder='Full name' 
                       value={formValues.fullName}
                       onChange={handleInputChange}
                       required
                    />

                    <input 
                       className='text-white-2 bg-transparent outline-none py-[13px] px-[20px] text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-yellow-crayola focus:invalid:border-bittersweet-shimmer' 
                       type="email" 
                       name='email' 
                       placeholder='Email address' 
                       value={formValues.email}
                       onChange={handleInputChange}
                       required
                    />
                </div> 
                <input 
                    className='text-white-2 mb-6 bg-transparent outline-none py-[13px] px-[20px] w-full text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-yellow-crayola focus:invalid:border-bittersweet-shimmer' 
                    type="text"
                    name='emailSubject'
                    placeholder='Email subject'
                    value={formValues.emailSubject}
                    onChange={handleInputChange}
                    required
                />
                <textarea 
                    className='min-h[100px] max-h-[600px] resize-y mb-[25px] h-[140px] w-full text-white-2 bg-transparent outline-none py-[13px] px-[20px] text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-yellow-crayola focus:invalid:border-bittersweet-shimmer' 
                    name="message" 
                    placeholder='Your Message'
                    value={formValues.message}
                    onChange={handleInputChange}
                    required
                ></textarea>

                <button 
                  type='submit'
                  disabled={!isFormValid}
                  className={` relative w-full  bg-border-gradient-onyx text-orange-yellow-crayola flex items-center justify-center gap-[10px] py-[13px] px-[20px] rounded-[14px] text-[14px] capitalize shadow-shadow-3  ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <BsSendFill /> Send Message
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

