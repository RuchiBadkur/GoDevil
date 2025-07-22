import React from 'react';
import clsx from 'clsx';

const Collections = ({ theme, id }) => {
  const collections = theme === 'devil'
    ? [
        { name: "Crimson Flame Dress", price: "₹2,499", image: "https://i.pinimg.com/1200x/d5/58/cd/d558cd5053fa6cee5d8b3a7e60cb82d1.jpg" },
        { name: "Night Chaos Hoodie", price: "₹1,999", image: "https://i.pinimg.com/736x/2d/ef/24/2def248e50e310f08e459185c0a2174f.jpg" },
        { name: "Fury Fit Jacket", price: "₹3,299", image: "https://i.pinimg.com/736x/19/ba/2b/19ba2b0a630186dd12711f5ac55512f4.jpg" },
        { name: "Inferno Streetwear", price: "₹2,799", image: "https://i.pinimg.com/1200x/23/8d/05/238d05aeb1e07a215eb4b4c388acf615.jpg" },
        { name: "Twilight Rebel Skirt", price: "₹1,699", image: "https://i.pinimg.com/1200x/12/bd/c0/12bdc07364750bcae1a4b4706f9a49f4.jpg" },
        { name: "Sinister Crop Top", price: "₹1,299", image: "https://i.pinimg.com/1200x/d0/90/9a/d0909ad80d1459aea0c841ffb2e0d42c.jpg" },
      ]
    : [
        { name: "Celestial Gown", price: "₹3,199", image: "https://i.pinimg.com/1200x/2d/77/ff/2d77ff359f1cb386c9de4cbcb1f323ea.jpg" },
        { name: "Heavenly Kurta", price: "₹2,399", image: "https://i.pinimg.com/736x/b8/ad/17/b8ad17b76ef4490ffd5c0175126b3686.jpg" },
        { name: "Ethereal Co-Ord", price: "₹2,899", image: "https://i.pinimg.com/1200x/b2/2d/a2/b22da2d77c4885a067990a69be5a1c12.jpg" },
        { name: "Radiance Maxi Dress", price: "₹3,599", image: "https://i.pinimg.com/736x/73/e4/6c/73e46cbe2d3dba9997de41eac239bc1f.jpg" },
        { name: "Aura Tunic", price: "₹1,899", image: "https://i.pinimg.com/1200x/8d/79/71/8d79714adebbde9c7deaffaa13b8dc1e.jpg" },
        { name: "Seraphic Saree", price: "₹2,499", image: "https://i.pinimg.com/736x/54/0f/4c/540f4c49a4ca807b168927a654c4f3f0.jpg" },
      ];

  const sectionStyle = theme === 'devil'
    ? 'bg-gradient-to-br from-black via-gray-900 to-red-900 text-red-400'
    : 'bg-gradient-to-b from-white to-blue-100 text-blue-800';

  const titleStyle = theme === 'devil' ? 'text-red-400' : 'text-blue-700';

  return (
    <section id={id} className={clsx("px-6 py-12 transition-all duration-500", sectionStyle)}>
      <h2 className={clsx("text-4xl font-bold text-center mb-10", titleStyle)}>Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {collections.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="w-full h-80 bg-white flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-opacity-80 transition-opacity duration-300 text-black">{item.name}</h3>
              <p className="text-gray-600 font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
