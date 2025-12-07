'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle } from
'@/components/ui/dialog';

export default function GiftCertificates() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const handleOrder = () => {
    if (amount && Number(amount) > 0) {
      // TODO: Implement certificate order logic
      setIsDialogOpen(false);
      setAmount('');
    }
  };

  return (
    <section id="gift-certificates" className="py-16 md:py-20 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-light text-center mb-8 text-white flex items-center justify-center gap-4">
            <Gift className="w-10 h-10 text-[#4F0005]" />
            Подарочные сертификаты
            <Gift className="w-10 h-10 text-[#4F0005]" />
          </h2>

          <p className="text-lg font-light text-center mb-12 text-white/70 max-w-2xl mx-auto !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Подари близким знание себя и своей судьбы.

          </p>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-[#4F0005] p-8 text-center hover:bg-[#4F0005]/5 transition-all duration-300">

              <h3 className="text-2xl font-light mb-4 text-white !whitespace-pre-line">На любую сумму

              </h3>
              <p className="text-base font-light mb-6 text-white/60">
                Получатель сам выберет консультацию по душе — от хорара до полного разбора натальной карты
              </p>
              <p className="text-xl text-white mb-6 !whitespace-pre-line">от 990 ₽

              </p>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="w-full py-3 px-8 border border-[#4F0005] text-white text-sm font-light tracking-wide hover:bg-[#4F0005] hover:text-white transition-all duration-300">
                Заказать сертификат
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center">

            <p className="text-sm font-light text-white/50">
              Сертификат будет оформлен в элегантном стиле и отправлен в электронном виде
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-black border-[#4F0005] border-2 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-white text-center">
              Введите сумму сертификата
            </DialogTitle>
            <DialogDescription className="text-white/60 text-center">
              Укажите желаемую сумму подарочного сертификата
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Сумма в рублях"
                min="1000"
                className="w-full py-3 px-4 bg-black border border-[#4F0005] text-white placeholder:text-white/40 focus:outline-none focus:border-[#4F0005] focus:ring-1 focus:ring-[#4F0005]" />

            </div>
            <button
              onClick={handleOrder}
              disabled={!amount || Number(amount) <= 0}
              className="w-full py-3 px-8 border border-[#4F0005] text-white text-sm font-light tracking-wide hover:bg-[#4F0005] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              Заказать
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>);

}