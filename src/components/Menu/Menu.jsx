import React from 'react';

const menuItems = [
  { id: 1, category: 'Appetizers', name: 'Spring Rolls', price: '$6.99' },
  { id: 2, category: 'Main Course', name: 'Grilled Salmon', price: '$18.99' },
  { id: 3, category: 'Desserts', name: 'Cheesecake', price: '$5.99' },
];

const Menu = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-primary font-bold mt-4">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
