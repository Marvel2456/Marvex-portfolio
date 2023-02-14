import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p63yifi', 'template_ozuzfxr', form.current, 'V-8f6Lq4lDBXCAPs6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div name="contact" className='w-full h-screen bg-black text-white p-4 pb-[400px] pt-[500px] flex justify-center items-center'>
      <form ref={form} onSubmit={sendEmail}  className='flex flex-col max-w-[800px] w-full px-4'>
        <div className='py-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Contact</p>
        </div>

        <input className='rounded-md py-2 px-2 text-black' type='text' placeholder='Name' name="user_name" />
        <input className='my-4 py-2 px-2 rounded-md text-black' type='email' placeholder='Email' name="user_email" />
        <textarea className='rounded-md px-2 text-black' name="message" rows='5' placeholder='Message' />
        <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-4 mx-auto flex items-center'>Let's work together</button>
      </form>
        
      
    </div>
  )
}

export default Contact
