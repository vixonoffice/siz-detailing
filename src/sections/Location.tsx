import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import AutoVideo from '../components/AutoVideo';

const easeOut = [0.16, 1, 0.3, 1];

export default function Location() {
  return (
    <section className="py-14 md:py-32 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-3 block">Unde ne găsești</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight text-white">
              Locația <span className="text-white/15">Noastră</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <MapPin size={14} className="text-primary shrink-0" />
            <span>Rm. Vâlcea, România</span>
          </div>
        </motion.div>

        {/* Video locatie — full width, cinematic */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.06] mb-4"
          style={{ aspectRatio: '16/7' }}
        >
          <AutoVideo
            src="/videos/locatie.mp4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
              <MapPin size={14} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold font-display uppercase text-sm tracking-wide">Siz Detailing</p>
              <p className="text-white/50 text-xs">Rm. Vâlcea, România</p>
            </div>
          </div>
        </motion.div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="overflow-hidden rounded-2xl border border-white/[0.06]"
          style={{ height: '340px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91368.35!2d24.3!3d45.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d0000000000%3A0x0!2sR%C3%A2mnicu+V%C3%A2lcea!5e0!3m2!1sro!2sro!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Siz Detailing — Locație Rm. Vâlcea"
          />
        </motion.div>

      </div>
    </section>
  );
}
