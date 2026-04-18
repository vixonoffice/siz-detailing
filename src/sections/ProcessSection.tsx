import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Evaluare',
    description: 'Inspectăm mașina și stabilim împreună serviciile potrivite. Faci poze, ne trimiți, îți facem prețul pe loc.',
  },
  {
    number: '02',
    title: 'Pregătire',
    description: 'Pregătim echipamentele și produsele profesionale adaptate nevoii mașinii tale.',
  },
  {
    number: '03',
    title: 'Tratament',
    description: 'Curățare prin injecție-extracție, degresare, tratament plastice — fiecare etapă executată cu precizie.',
  },
  {
    number: '04',
    title: 'Rezultat Final',
    description: 'Verificăm fiecare detaliu. Nu pleci până nu ești 100% mulțumit de rezultat.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Procesul Nostru</span>
          </div>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-gradient uppercase tracking-tighter leading-[0.85] font-display">
            Etapele <br />
            <span className="text-gradient-red italic">Perfecțiunii</span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-background-card/80 border border-white/[0.04] rounded-2xl md:rounded-3xl p-8 md:p-10 hover:border-primary/20 transition-colors duration-500 overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute -right-2 -top-4 text-[7rem] font-black text-white/[0.02] pointer-events-none select-none leading-none italic font-display group-hover:text-primary/[0.04] transition-colors duration-700">
                {step.number}
              </div>

              <div className="relative z-10">
                <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">
                  Phase {step.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4 font-display">
                  {step.title}
                </h3>
                <p className="text-white/30 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
