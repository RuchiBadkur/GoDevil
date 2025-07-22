import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Feedback = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xxxxxxx', // Replace with your EmailJS Service ID
        'template_xxxxxxx', // Replace with your EmailJS Template ID
        formRef.current,
        'user_xxxxxxxxxxxxx' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <section
      id="feedback"
      className="w-full py-16 px-4 bg-gradient-to-b from-white to-yellow-50 dark:from-black dark:to-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400">
          We value your thoughts ✨
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Help us improve — it only takes a few seconds!
        </p>

        {submitted ? (
          <p className="mt-6 text-green-600 dark:text-green-400 font-medium">
            🎉 Thanks for your feedback!
          </p>
        ) : (
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-6 space-y-4 text-left"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
            />
            <textarea
              name="message"
              required
              rows="4"
              placeholder="What's on your mind?"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
            ></textarea>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md dark:shadow-zinc-800"
            >
              Submit Feedback
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Feedback;
