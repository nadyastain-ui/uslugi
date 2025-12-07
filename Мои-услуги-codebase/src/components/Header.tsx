import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#4F0005]">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-xl font-light tracking-wide text-white">Твоя новая эра.</span>
        <nav className="hidden md:flex gap-12">
          <a href="#services" className="text-sm font-light text-white hover:text-[#4F0005] transition-colors tracking-wide">
            Услуги
          </a>
          <a href="#about" className="text-sm font-light text-white hover:text-[#4F0005] transition-colors tracking-wide">
            Обо мне
          </a>
          <a href="#contact" className="text-sm font-light text-white hover:text-[#4F0005] transition-colors tracking-wide">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}