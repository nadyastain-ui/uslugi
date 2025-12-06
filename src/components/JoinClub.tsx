'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function JoinClub() {
  return (
    <section id="join-club" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-[#4F0005] p-12 md:p-16 text-center">

            <h3 className="text-2xl md:text-3xl font-light mb-6 text-white !whitespace-pre-line">Стань частью закрытого клуба

            </h3>
            <p className="text-base font-light mb-10 text-white/60 max-w-2xl mx-auto !whitespace-pre-line !whitespace-pre-line">Присоединяйся к «Астро-малышкам» — эксклюзивному сообществу для тех, кто хочет перестать зависеть от обстоятельств и стать автором своей жизни.

            </p>
            <button className="py-4 px-12 border border-[#4F0005] text-white text-sm font-light tracking-wide hover:bg-[#4F0005] hover:text-white transition-all duration-300">
              Подробнее о клубе
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}