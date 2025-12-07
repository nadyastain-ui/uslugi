'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-light text-center mb-8 text-white">
            Обо мне
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6">

            <div className="relative w-40 h-52 md:w-48 md:h-60 overflow-hidden border-2 border-[#4F0005] shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3866a1b7-ba52-4ac7-bd4f-8ae9235fa7d0/visual-edit-uploads/1764883896140-u0a5ua06l3.png"
                alt="Надя Михеева - Астролог"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-cover"
                priority />

            </div>
          </motion.div>

          <div className="space-y-6 mb-10">
            <p className="text-base md:text-lg font-light leading-relaxed text-white/80">
              Привет, я Надя Михеева.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-white/80">
              Уже больше 3 лет я помогаю женщинам находить ответы в их натальных картах.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-white/80">
              Я убеждена, что астрология — это не про судьбу, а про возможности. Моя миссия — делать язык звезд понятным и превращать его в практические шаги для улучшения жизни и ответов на свои вопросы.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-white/80">
              Буду рада стать спутником на вашем пути к лучшей версии себя!
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center">

            <button className="py-3 px-12 border border-[#4F0005] text-white text-sm font-light tracking-wide hover:bg-[#4F0005] hover:text-white transition-all duration-300">
              Задать вопрос
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}