export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-16 bg-bg relative">
      <div className="max-w-[620px] mx-auto text-center">
        <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
          Contacto
        </p>
        <h2
          className="font-syne font-bold tracking-[-0.03em] mb-3 reveal"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="text-muted max-w-[560px] mx-auto mb-10 reveal">
          Estoy disponible para proyectos freelance, colaboraciones y
          oportunidades laborales. ¡Hablemos!
        </p>

        <div className="flex gap-4 justify-center flex-wrap reveal">
          <a
            href="mailto:velasconico001@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-[0.9rem]
              no-underline transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90
              bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white"
          >
            ✉️ Enviar email
          </a>
          <a
            href="https://github.com/NicoVelasco96"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-[0.9rem]
              no-underline transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90
              bg-accent-cream text-[#7a5010] border border-[rgba(200,160,80,0.3)]"
          >
            ⚙️ GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicolasvelasco1996/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-[0.9rem]
              no-underline transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90
              bg-accent-blue text-[#2a5078] border border-[rgba(90,136,184,0.35)]"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
