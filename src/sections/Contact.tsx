import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const services = [
  'Spălare Exterior Premium',
  'Curățare Interior Completă',
  'Polish & Corecție Vopsea',
  'Detailing Complet',
  'Protecție Ceramică',
  'Curățare Compartiment Motor',
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mesajul a fost trimis cu succes!');
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#020202] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block">Ești gata?</span>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
              Hai să <br />
              <span className="text-primary italic text-glow">Lucrăm</span>
            </h2>
            <p className="text-white/60 text-xl font-light mb-16 max-w-md leading-relaxed">
              Programează-te astăzi și oferă-i mașinii tale tratamentul pe care îl merită cu adevărat.
            </p>

            <div className="space-y-12">
              <a href="tel:0761639988" className="flex items-center gap-8 group cursor-none">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_50px_rgba(255,0,0,0.4)] transition-all duration-700">
                  <Phone className="text-primary group-hover:text-white w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-2">Telefon Direct</div>
                  <div className="text-3xl font-black tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">0761 639 988</div>
                </div>
              </a>

              <div className="flex items-center gap-8 group">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-700">
                  <MapPin className="text-primary group-hover:text-white w-8 h-8" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-2">Locație Studio</div>
                  <div className="text-3xl font-black tracking-widest text-white/40 uppercase">Rm. Vâlcea, RO</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side - Ultra Modern */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-[100px] rounded-full opacity-50" />
            <form onSubmit={handleSubmit} className="relative bg-[#0A0A0A] border border-white/5 p-12 md:p-16 rounded-[4rem] space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black ml-2">Nume Complet</label>
                <input required type="text" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white font-bold text-lg" />
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black ml-2">Telefon</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white font-bold text-lg" />
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black ml-2">Serviciu Dorit</label>
                <select defaultValue="" required className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white/40 font-bold text-lg appearance-none">
                  <option value="" disabled>Alege Serviciul...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <MagneticButton type="submit" className="w-full py-8 text-[10px] font-black uppercase tracking-[0.5em] rounded-[2rem]" disabled={isSubmitting}>
                {isSubmitting ? "Se procesează..." : "Trimite Cererea"}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
