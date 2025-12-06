'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center stars-bg gothic-gradient overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600')] bg-cover bg-center opacity-5"></div>
      <div className="fog-overlay"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-6 gothic-heading leading-tight">
            Твоя вселенная —<br />в твоих картах
          </h1>
          <p className="text-xl md:text-2xl text-[#C0C0C0] mb-8 max-w-2xl mx-auto font-light tracking-wide italic">
            Астрология, погруженная в тени.<br />Таинственная. Мистическая. Вечная.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-[#C0C0C0]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}