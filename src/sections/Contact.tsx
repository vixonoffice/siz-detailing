import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const services = [
  'Spălare Exterior Premium',
  'Curățare Interior Completă',
  'Polish & Corecție Vopsea',
  'Detailing Complet',
  'Protecție Ceramică',
  'Curățare Compartiment Motor',
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block">Ești gata?</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8 md:mb-12">
              Hai să <br />
              <span className="text-primary italic text-glow">Lucrăm</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-light mb-16 max-w-md leading-relaxed">
              Programează-te astăzi și oferă-i mașinii tale tratamentul pe care îl merită cu adevărat.
            </p>

            <div className="space-y-8 md:space-y-10">
              {/* Phone */}
              <a href="tel:0761639988" className="flex items-center gap-6 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_50px_rgba(255,0,0,0.3)] transition-all duration-700">
                  <Phone className="text-primary group-hover:text-white w-6 h-6 md:w-8 md:h-8 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-2">Telefon Direct</div>
                  <div className="text-2xl md:text-3xl font-black tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">
                    0761 639 988
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/40761639988?text=Bun%C4%83%20ziua!%20A%C8%99%20dori%20s%C4%83%20programez%20o%20%C8%99edin%C8%9B%C4%83%20de%20detailing."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 md:gap-8 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:shadow-[0_0_50px_rgba(37,211,102,0.3)] transition-all duration-700">
                  <WhatsAppIcon />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-2">WhatsApp</div>
                  <div className="text-2xl md:text-3xl font-black tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">
                    Scrie-ne Acum
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-6 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-700">
                  <MapPin className="text-primary w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mb-2">Locație Studio</div>
                  <div className="text-2xl md:text-3xl font-black tracking-widest text-white/40 uppercase">Rm. Vâlcea, RO</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-[100px] rounded-full opacity-50" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-[#0A0A0A] border border-white/[0.06] p-10 md:p-14 lg:p-16 rounded-[3rem] md:rounded-[4rem] space-y-8 md:space-y-10"
            >
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black ml-2">
                  Nume Complet
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex: Andrei Popescu"
                  className="w-full bg-white/[0.04] border border-white/[0.06] rounded-2xl md:rounded-[2rem] px-6 md:px-8 py-5 md:py-6 focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all text-white font-bold text-base md:text-lg placeholder:text-white/10"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black ml-2">
                  Telefon
                </label>
                <input
                  required
                  type="tel"
                  placeholder="07XX XXX XXX"
                  className="w-full bg-white/[0.04] border border-white/[0.06] rounded-2xl md:rounded-[2rem] px-6 md:px-8 py-5 md:py-6 focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all text-white font-bold text-base md:text-lg placeholder:text-white/10"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black ml-2">
                  Serviciu Dorit
                </label>
                <select
                  defaultValue=""
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.06] rounded-2xl md:rounded-[2rem] px-6 md:px-8 py-5 md:py-6 focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all text-white/40 font-bold text-base md:text-lg appearance-none"
                >
                  <option value="" disabled>
                    Alege Serviciul...
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <MagneticButton
                type="submit"
                className="w-full py-6 md:py-8 text-[10px] font-black uppercase tracking-[0.5em] rounded-2xl md:rounded-[2rem]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Se procesează...' : 'Trimite Cererea'}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
