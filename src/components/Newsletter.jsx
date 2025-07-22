// Newsletter.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NEWSLETTER,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage('✅ Subscribed successfully!');
          form.current.reset();
        },
        () => {
          setMessage('❌ Failed to subscribe. Please try again.');
        }
      );
  };

  return (
    <section className="bg-zinc-900 py-10 px-6 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="text-gray-400 mb-6">
        Get exclusive updates on new arrivals, drops, and behind-the-scenes stories from Divine x Devil.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          name="user_email"
          required
          placeholder="Enter your email"
          className="w-full sm:w-2/3 px-4 py-2 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:scale-105 transition-transform font-semibold"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-green-400">{message}</p>}
    </section>
  );
};

export default Newsletter;
