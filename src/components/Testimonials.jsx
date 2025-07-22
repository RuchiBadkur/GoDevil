import React from 'react';

const testimonialsData = {
  divine: [
    {
      name: 'Aarav Kapoor',
      role: 'Fashion Blogger',
      quote: 'Divine x Devil is not just clothing, it’s a vibe. I love how bold and expressive the designs are!',
    },
    {
      name: 'Ishita Verma',
      role: 'Streetwear Enthusiast',
      quote: 'The quality and uniqueness of the Divine drop gave me chills — definitely my new go-to brand.',
    },
    {
      name: 'Sneha Rajput',
      role: 'Lifestyle Influencer',
      quote: 'Wearing the Divine collection feels like walking with the angels — serene, elegant, and empowering.',
    },
    {
      name: 'Diya Malhotra',
      role: 'Student & Creator',
      quote: 'It’s soft, radiant, and powerful — everything the modern goddess stands for.',
    },
    {
      name: 'Ananya Sharma',
      role: 'Makeup Artist',
      quote: 'I styled an entire shoot around the Divine line — it elevated every frame.',
    },
    {
      name: 'Riya Bansal',
      role: 'Content Curator',
      quote: 'There’s something so ethereal about the Divine pieces — they glow.',
    },
    {
      name: 'Neha Yadav',
      role: 'Yoga Teacher',
      quote: 'Wearing Divine feels like meditation — graceful, balanced, complete.',
    },
    {
      name: 'Pooja Mehra',
      role: 'Dancer & Performer',
      quote: 'The flowy designs bring out my inner energy. Divine speaks movement.',
    },
  ],
  devil: [
    {
      name: 'Rehan Ali',
      role: 'Creative Director',
      quote: 'Their Devil series speaks to my wild side. Edgy, raw, and absolutely iconic.',
    },
    {
      name: 'Kabir Mehta',
      role: 'Skater & Artist',
      quote: 'Dark, daring, and unapologetic — that’s the Devil drop. It’s not fashion, it’s rebellion.',
    },
    {
      name: 'Tanisha Das',
      role: 'Alt Fashion Model',
      quote: 'The Devil collection awakened my dark muse. It’s fierce, bold, and turns heads every time.',
    },
    {
      name: 'Nikita Sinha',
      role: 'Rapper & Stylist',
      quote: 'I wore Devil to a gig and felt unstoppable. The energy is 🔥.',
    },
    {
      name: 'Zoya Khan',
      role: 'Tattoo Artist',
      quote: 'The black and red contrast? Iconic. The attitude? Even better.',
    },
    {
      name: 'Raghav Rao',
      role: 'Metal Band Vocalist',
      quote: 'I’ve never seen fashion echo rage and art this well before. Devil is raw.',
    },
    {
      name: 'Mira Joshi',
      role: 'Fashion Photographer',
      quote: 'Lighting up the Devil drop was effortless — the pieces speak loud on camera.',
    },
    {
      name: 'Aman Qureshi',
      role: 'DJ & Beat Maker',
      quote: 'The Devil fit was made for night outs and wild sets. All black, no apologies.',
    },
  ],
};

const Testimonials = ({ id, theme = 'divine' }) => {
  const isDivine = theme === 'divine';
  const testimonials = testimonialsData[theme];

  return (
    <section
      id={id}
      className={`py-16 px-6 ${
        isDivine
          ? 'bg-gradient-to-br from-white via-pink-100 to-rose-200 text-zinc-900'
          : 'bg-zinc-950 text-white'
      } transition-all duration-700`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-12 ${
            isDivine ? 'text-pink-600' : 'text-red-500'
          }`}
        >
          {isDivine ? 'Praise from the Divine Circle' : 'Voices from the Underworld'}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                isDivine
                  ? 'bg-white border border-rose-200 text-zinc-800 hover:bg-rose-50'
                  : 'bg-zinc-900 border border-zinc-800 hover:bg-zinc-800'
              }`}
            >
              <p
                className={`italic text-sm mb-4 ${
                  isDivine ? 'text-zinc-600' : 'text-gray-300'
                }`}
              >
                “{item.quote}”
              </p>
              <h4
                className={`font-semibold text-base ${
                  isDivine ? 'text-pink-700' : 'text-white'
                }`}
              >
                {item.name}
              </h4>
              <p
                className={`text-xs ${
                  isDivine ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
