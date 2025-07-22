// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const About = ({ category }) => {
  const isDivine = category === 'divine';
  const isDevil = category === 'devil';

  const content = {
    divine: {
      title: 'The Divine Within ✨',
      description:
        'Ethereal, graceful, and unapologetically radiant — the Divine collection celebrates femininity with softness and strength. From flowing forms to pastel power, it’s made for the soul that shines gently but brightly.',
      bgGradient: 'bg-gradient-to-br from-pink-100 via-white to-blue-100',
      textColor: 'text-gray-900',
      glow: 'shadow-[0_0_60px_#fbcfe8]',
      ctaColor: 'bg-pink-200 hover:bg-pink-300 text-gray-900',
      cards: [
        {
          img: '/assets/divine/look1.jpg',
          title: 'Casual Elegance',
          description:
            'Effortless chic for everyday grace. Think soft linens, pastel tones, and floaty fits.',
        },
        {
          img: '/assets/divine/look2.jpg',
          title: 'Ethereal Accessories',
          description:
            'Minimal yet radiant — accessories that whisper charm without shouting.',
        },
        {
          img: '/assets/divine/look3.jpg',
          title: 'Cultural Essence',
          description:
            'Flowy silhouettes and divine embroidery reflecting serenity in every stitch.',
        },
        {
          img: '/assets/divine/look4.jpg',
          title: 'Ethereal Accessories',
          description:
            'Minimal yet radiant — accessories that whisper charm without shouting.',
        },
      ],
    },
    devil: {
      title: 'Go Bold, Go Devil 🔥',
      description:
        'Bold, ambitious, and fearlessly elegant — the Devil collection channels fierce feminine energy. Structured silhouettes, deep tones, and unapologetic style crafted for women who lead with vision, not validation.',
      bgGradient: 'bg-gradient-to-br from-black via-gray-900 to-red-900',
      textColor: 'text-red-400',
      glow: 'shadow-[0_0_60px_#ef4444]',
      ctaColor: 'bg-red-600 hover:bg-red-500 text-white',
      cards: [
        {
          img: '/assets/devil/look1.jpg',
          title: 'Street Rebel',
          description:
            'Sharp, layered fits for city nights. Tailored chaos meets modern attitude.',
        },
        {
          img: '/assets/devil/look2.jpg',
          title: 'Fierce Finishes',
          description:
            'Accessories that demand attention — metal, leather, and power pieces.',
        },
        {
          img: 'https://i.pinimg.com/1200x/d8/81/77/d881778348b94790319d5da05c95c53b.jpg',
          title: 'Rogue Traditional',
          description:
            'Heritage meets rebellion — classic cuts remixed with drama.',
        },
      ],
    },
    default: {
      title: 'GoDevil: Duality in Design',
      description:
        'GoDevil brings together two powerful energies — the soft and the strong, the light and the daring. No matter what mood you wear, we’ve got a piece of you in every thread.',
      bgGradient: 'bg-gradient-to-br from-purple-800 via-black to-red-800',
      textColor: 'text-gray-100',
      glow: 'shadow-purple-500',
      ctaColor: 'bg-purple-600 hover:bg-purple-500 text-white',
      cards: [],
    },
  };

  const selected = isDivine
    ? content.divine
    : isDevil
    ? content.devil
    : content.default;

  return (
    <section
      className={`w-full min-h-screen flex flex-col items-center justify-center px-6 py-35 ${selected.bgGradient} transition-all duration-500 overflow-hidden`}
    >
      {/* Title */}
      <motion.h2
        className={`text-4xl md:text-6xl font-bold mb-10 text-center ${selected.textColor}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {selected.title}
      </motion.h2>

      {/* Carousel of Themed Cards */}
      {selected.cards.length > 0 && (
        <motion.div
          className="w-full max-w-6xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {selected.cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row items-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full md:w-1/2 h-[350px] object-cover"
                  />
                  <div className="p-6 md:p-10 flex flex-col justify-center w-full md:w-1/2 text-left">
                    <h3 className={`text-2xl font-semibold mb-4 ${selected.textColor}`}>
                      {card.title}
                    </h3>
                    <p className={`text-md md:text-lg ${selected.textColor}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}

      {/* Main Description + CTA */}
      <motion.div
        className={`text-center max-w-2xl px-4 ${selected.textColor}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          {selected.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${selected.ctaColor} ${selected.glow}`}
        >
          Explore Collection
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
