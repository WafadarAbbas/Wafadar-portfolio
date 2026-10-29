import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    setStatus('Thank you! Your message has been sent.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact' className='p-5 container' style={{ maxWidth: '700px' }}>
      <h2 className='text-center mb-4 text-teal' style={{ fontWeight: 'bold', fontSize: '2.2rem' }}>
        Contact Me
      </h2>
      <form onSubmit={handleSend} className='project-card text-start p-4'>
        <div className='mb-3'>
          <label className='form-label text-teal'>Your Name</label>
          <input
            type='text'
            className='form-control'
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label text-teal'>Email Address</label>
          <input
            type='email'
            className='form-control'
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label text-teal'>Message</label>
          <textarea
            className='form-control'
            rows='4'
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </div>
        <button type='submit' className='btn btn-transparent w-100 mt-2'>
          Send Message
        </button>
        {status && <p className='text-center mt-3 text-teal'>{status}</p>}
      </form>
    </section>
  );
}
