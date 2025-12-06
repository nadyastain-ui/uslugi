'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

type ServiceWithDetails = {
  title: string;
  price: string;
  description: string;
  dialogDescription?: string;
  details?: string[];
};

type ServiceWithSlides = {
  title: string;
  price: string;
  description: string;
  slides: {
    title: string;
    details: string[];
  }[];
};

type Service = ServiceWithDetails | ServiceWithSlides;

const services: Service[] = [
{
  title: 'Консультация',
  price: '990 ₽',
  description: "Разбор вашего персонального запроса.",
  dialogDescription: "Формат: голосовое сообщение + 1 месяц поддержки на случай, если возникнут дополнительные вопросы",
  details: [
  "Почему у меня не получается выстроить длительные отношения?",
  "Почему нет энергии?",
  "Как раскрыть женственность / потенциал?",
  "Какие мои сильные стороны?",
  "Какую профессию мне подобрать?",
  "В чем мое предназначение?",
  "Какой мужчина мне подходит? Где я с ним встречусь?",
  "У меня что-то не получается. Почему? Как убрать напряжение?",
  "Как похудеть? Набрать вес?"]

},
{
  title: 'Хорар',
  price: '990 ₽',
  description: "Прогноз, когда нужно узнать, чем закончится событие.",
  slides: [
  {
    title: "Любовь",
    details: [
    "Как ко мне относится человек?",
    "Любит ли он меня?",
    "Кого выбрать: Ваню или Петю?",
    "Напишет ли он?",
    "Позвонит ли он?",
    "Можно ли ему доверять?",
    "Изменяет ли он?",
    "Почему пропал?",
    "Буду ли я с ним счастлива в отношениях?",
    "Реальные мысли и действия?",
    "Будет ли примирение? Когда?"]

  },
  {
    title: "Деньги",
    details: [
    "Стоит ли начинать бизнес?",
    "Стоит ли вкладывать деньги?",
    "Получу ли премию?",
    "Стоит ли начинать партнерство?",
    "Заплатит ли мне клиент?",
    "Стоит ли искать новую работу?",
    "Повысят ли меня?",
    "Вернут ли мне долг?"]

  },
  {
    title: "Общие вопросы",
    details: [
    "Куплю ли машину?",
    "Стоит ли делать крупную покупку?",
    "Стоит ли брать эту квартиру или найду дешевле? Переееду ли я? Когда?",
    "Можно ли выбрать этого рабочего/ мастера? Понравится ли мне результат его работы?"]

  }]

},
{
  title: 'Соляр',
  price: '5000 ₽',
  description: "Годовой прогноз по всем сферам вашей жизни, в том числе любовь, деньги и реализация.",
  details: [
  "Подробное руководство на 12 месяцев",
  "Описание основных тем года и миссии на год",
  "В какой сфере будет основной рост",
  "В какой сфере будут главные вызовы и задачи",
  "Точечное усиление разных сфер жизни и подбор проработок с учетом ваших особенностей",
  "Описание благоприятных периодов в течение года, рекомендации для минимизации минусовых проявлений",
  "Подбор благоприятных старта проектов / путешествий / финансовых и других вопросов"]

},
{
  title: 'Натальная карта',
  price: '5000 ₽',
  description: "Ваш астрологический портрет. Который даст вам ответы на все вопросы о себе.",
  details: [
  "Личностные характеристики",
  "Как вас считывают другие?",
  "Ваши сильные и слабые стороны",
  "Ваша женственность и что ее блокирует",
  "Финансы и ресурсы, как обращаться с деньгами, чтобы их становилось больше",
  "Ваши таланты и способности",
  "Профессиональная реализация и карьера",
  "Отношения и любовь: ваш идеальный партнер",
  "Кто ваш мужчина? Где вы встретитесь?",
  "Семейные паттерны. Какие блоки тянутся из детства?",
  "Здоровье и энергия. Каким спортом заниматься, чтобы похудеть? Каким, чтобы было больше сил?",
  "Карьера и предназначение. Где вы будете зарабатывать в удовольствие?",
  "Кризисы и потенциальные опасности",
  "Кармический путь и прошлые жизни",
  "Ваши цели и задачи на эту жизнь",
  "Как улучшить качество жизни? Что прорабатывать?"]

}];


export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openDialog = (service: Service) => {
    setSelectedService(service);
    setCurrentSlide(0);
    setIsDialogOpen(true);
  };

  const nextSlide = () => {
    if (selectedService && 'slides' in selectedService) {
      setCurrentSlide((prev) => (prev + 1) % selectedService.slides.length);
    }
  };

  const prevSlide = () => {
    if (selectedService && 'slides' in selectedService) {
      setCurrentSlide((prev) => (prev - 1 + selectedService.slides.length) % selectedService.slides.length);
    }
  };

  const hasSlides = selectedService && 'slides' in selectedService;
  const isHorarService = selectedService?.title === 'Хорар';

  return (
    <section id="services" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>

          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 text-white">
            Услуги
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-px bg-[#4F0005] max-w-6xl mx-auto">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black p-4 md:p-12 hover:bg-white/[0.02] transition-colors duration-300">

              <h3 className="md:text-xl font-light mb-1 md:mb-2 tracking-wide text-white !text-xl">
                {service.title}
              </h3>
              <p className="text-base md:text-3xl font-light mb-3 md:mb-6 !text-white">
                {service.price}
              </p>
              <p className="text-[10px] md:text-base text-white/60 leading-relaxed mb-4 md:mb-8 font-light !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
                {service.description}
              </p>
              <div className="space-y-2 md:space-y-3">
                <button
                onClick={() => openDialog(service)}
                className="w-full py-2 md:py-3 px-3 md:px-6 border border-white/20 text-white text-[10px] md:text-sm font-light tracking-wide hover:border-white/40 transition-all duration-300">

                  Подробнее
                </button>
                <button className="w-full py-2 md:py-3 px-3 md:px-6 border border-[#4F0005] text-white text-[10px] md:text-sm font-light tracking-wide hover:bg-[#4F0005] hover:text-white transition-all duration-300">
                  Заказать
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {isHorarService && selectedService && 'slides' in selectedService ?
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-black border-[#4F0005] text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-light text-white">
                {selectedService.title}
              </DialogTitle>
              <DialogDescription className="text-white/60 font-light">
                {selectedService.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="text-lg font-light mb-3 text-white/90">Вопросы хорару:</h4>
              
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4">

                    <h5 className="text-base mb-3 !font-normal !text-white">
                      {selectedService.slides[currentSlide].title}
                    </h5>
                    <ul className="space-y-2">
                      {selectedService.slides[currentSlide].details.map((detail, index) =>
                    <li key={index} className="flex items-start">
                          <span className="text-[#4F0005] mr-2">✦</span>
                          <span className="text-white/70 font-light text-sm">{detail}</span>
                        </li>
                    )}
                    </ul>
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <button
                  onClick={prevSlide}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  aria-label="Предыдущий слайд">

                    <ChevronLeft className="w-5 h-5 text-white/60" />
                  </button>
                  
                  <div className="flex gap-2">
                    {selectedService.slides.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ?
                    'bg-[#4F0005] w-6' :
                    'bg-white/20 hover:bg-white/40'}`
                    }
                    aria-label={`Слайд ${index + 1}`} />

                  )}
                  </div>
                  
                  <button
                  onClick={nextSlide}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  aria-label="Следующий слайд">

                    <ChevronRight className="w-5 h-5 text-white/60" />
                  </button>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-2xl font-light text-white mb-4">{selectedService.price}</p>
                <button className="w-full py-3 px-6 bg-[#4F0005] text-white text-sm font-light tracking-wide hover:bg-[#6B0007] transition-all duration-300">
                  Заказать
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog> :

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-black border-[#4F0005] text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-light text-white">
                {selectedService?.title}
              </DialogTitle>
              <DialogDescription className="text-white/60 font-light">
                {selectedService && 'dialogDescription' in selectedService ? selectedService.dialogDescription : selectedService?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="text-lg font-light mb-3 text-white/90">Что входит:</h4>
              
              <ul className="space-y-2">
                {selectedService && 'details' in selectedService && selectedService.details?.map((detail, index) =>
              <li key={index} className="flex items-start">
                    <span className="text-[#4F0005] mr-2">✦</span>
                    <span className="text-white/70 font-light text-sm">{detail}</span>
                  </li>
              )}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-2xl font-light text-white mb-4">{selectedService?.price}</p>
                <button className="w-full py-3 px-6 bg-[#4F0005] text-white text-sm font-light tracking-wide hover:bg-[#6B0007] transition-all duration-300">
                  Заказать
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      }
    </section>);

}