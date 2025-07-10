// eslint-disable-next-line
'use client';

import { motion } from 'framer-motion';

export default function AboutChef() {
  return (
    <section className="bg-orange-50 py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our Chef
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          With over 20 years of culinary experience, Chef Antonio blends classical techniques with modern flavors. His journey started in a small kitchen in Naples and has taken him to Michelin-starred restaurants across Europe.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/globe.svg"
            alt="Chef Antonio"
            className="rounded-lg shadow-lg mx-auto h-64 object-contain"
          />
          <ul className="text-left text-gray-700 space-y-4">
            <li><strong>Experience:</strong> 20+ years in international kitchens</li>
            <li><strong>Specialty:</strong> Mediterranean & fusion cuisine</li>
            <li><strong>Philosophy:</strong> Seasonal, sustainable, and heartfelt cooking</li>
            <li><strong>Milestones:</strong> Opened 3 award-winning restaurants</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}