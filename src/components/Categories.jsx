import React from 'react';
import clsx from 'clsx';

const categoryData = {
  divine: [
    { name: "Celestial Dresses", image: "https://i.pinimg.com/1200x/2d/77/ff/2d77ff359f1cb386c9de4cbcb1f323ea.jpg" },
    { name: "Heavenly Heels", image: "https://i.pinimg.com/1200x/2e/b3/43/2eb34314b9d80c20a7e239ca30cfb94c.jpg" },
    { name: "Angel Wings Tops", image: "https://i.pinimg.com/1200x/fb/e7/b1/fbe7b1bd40798d6c0078a7a51accbf2a.jpg" },
    { name: "Pearl Sarees", image: "https://i.pinimg.com/736x/76/be/1e/76be1e272f8c1ee5f491f4d55b8176e7.jpg" },
    { name: "Glowing Gowns", image: "https://i.pinimg.com/736x/08/ce/4c/08ce4c20d2edabe81a6dc0d2904dade0.jpg" },
    { name: "Pastel Kurtis", image: "https://i.pinimg.com/1200x/b5/fa/b2/b5fab21b22930bd846da817003ee5200.jpg" },
    { name: "Aura Jewelry", image: "https://i.pinimg.com/1200x/74/e0/38/74e03854496edc73026818652f2ce4a3.jpg" },
    { name: "Silken Scarves", image: "https://i.pinimg.com/1200x/06/23/52/0623529ef492fd052e4bd5ec39f5fdaa.jpg" },
  ],
  devil: [
    { name: "Hellfire Jackets", image: "https://i.pinimg.com/736x/98/0e/f7/980ef7de4fd8aea30824dad11a5195ce.jpg" },
    { name: "Chains & Belts", image: "https://i.pinimg.com/736x/56/d6/5f/56d65fea1617c18663920b1ea81583af.jpg" },
    { name: "Inferno Skirts", image: "https://i.pinimg.com/1200x/71/19/db/7119dbc852161e0da6d45ab3756deb31.jpg" },
    { name: "Bold Bodysuits", image: "https://i.pinimg.com/736x/ca/39/e3/ca39e3d8cfdfccae3fe44e77a9df65cc.jpg" },
    { name: "Dark Edge Boots", image: "https://i.pinimg.com/1200x/2d/71/78/2d7178332f823ddc4bdd2a191133fda2.jpg" },
    { name: "Black Magic Co-ords", image: "https://i.pinimg.com/1200x/e0/07/42/e007423d56211d0991f07f94898e0462.jpg" },
    { name: "Red Velvet Sarees", image: "https://i.pinimg.com/1200x/cf/c7/f2/cfc7f28792325bcf82407764afc130ef.jpg" },
    { name: "unique Accessories", image: "https://i.pinimg.com/736x/52/b9/28/52b928540c1a38d1a262754f0898c41c.jpg" },
  ]
};

const Categories = ({ theme, id }) => {
  const categories = categoryData[theme] || [];

  const isDevil = theme === 'devil';
  const bgColor = isDevil
    ? 'bg-gradient-to-br from-black via-gray-900 to-red-900 text-red-100'
    : 'bg-gradient-to-b from-white to-blue-100 text-blue-900';

  const buttonStyle = isDevil
    ? 'bg-red-600 text-white hover:bg-red-700'
    : 'bg-blue-600 text-white hover:bg-blue-700';

  const cardStyle = isDevil
    ? 'bg-zinc-900 border border-red-500'
    : 'bg-white border border-blue-300';

  const subheading = isDevil
    ? 'Unleash the fierce fashion within.'
    : 'Radiate elegance with every piece.';

  return (
    <section id={id} className={clsx("py-12 px-6 md:px-12 transition-all duration-500", bgColor)}>
      <h2 className="text-4xl font-bold text-center mb-2 tracking-tight">Shop by Category</h2>
      <p className="text-lg text-center mb-10 font-medium opacity-80">{subheading}</p>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={clsx(
              "rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between",
              cardStyle
            )}
          >
            <div className="w-full h-60 bg-black flex items-center justify-center">
              <img
                src={`${cat.image}`}
                alt={cat.name}
                className="max-h-60 object-contain w-full"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col items-center justify-between">
              <h3 className="text-xl font-semibold mb-3 text-center">{cat.name}</h3>
              <button
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300",
                  buttonStyle
                )}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
