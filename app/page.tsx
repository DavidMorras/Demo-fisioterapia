import Image from "next/image"
import { Activity, Bone, Brain, Heart, Smile, Users } from "lucide-react"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}

function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
              Recupera tu movilidad. Vuelve a tu ritmo.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Tratamientos personalizados basados en evidencia científica.
            </p>
            <a
              href="https://wa.me/34600000000?text=Hola,%20me%20gustaría%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-sm"
            >
              Reservar cita
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero-fisio.jpg"
                alt="Fisioterapeuta profesional tratando a un paciente en clínica moderna"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      icon: Activity,
      title: "Fisioterapia deportiva",
      description: "Mejora tu rendimiento y recupera tu actividad física con técnicas especializadas para deportistas."
    },
    {
      icon: Bone,
      title: "Dolor de espalda y cuello",
      description: "Alivia tensiones y dolores crónicos con tratamientos manuales personalizados."
    },
    {
      icon: Heart,
      title: "Rehabilitación postoperatoria",
      description: "Recupera tu movilidad y fuerza después de una cirugía con un plan adaptado a ti."
    },
    {
      icon: Users,
      title: "Lesiones musculares",
      description: "Tratamiento efectivo para contracturas, roturas fibrilares y lesiones musculares."
    },
    {
      icon: Smile,
      title: "ATM / Bruxismo",
      description: "Reduce el dolor mandibular y las tensiones faciales con terapia especializada."
    },
    {
      icon: Brain,
      title: "Suelo pélvico",
      description: "Fortalece y rehabilita tu suelo pélvico con tratamientos discretos y efectivos."
    }
  ]

  return (
    <section id="servicios" className="py-24 lg:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamientos especializados para cada necesidad
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/20">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/laura-martinez.jpg"
                alt="Laura Martínez, fisioterapeuta colegiada de Fisio Vital"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Sobre Fisio Vital
            </h2>
            <p className="mt-4 text-lg text-primary font-medium">
              Una clínica dirigida por la fisioterapeuta colegiada Laura Martínez.
            </p>
            
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Con más de 10 años de experiencia, Laura Martínez es graduada en Fisioterapia por la Universidad Complutense de Madrid, con formación especializada en terapia manual, fisioterapia deportiva y suelo pélvico.
              </p>
              <p>
                En Fisio Vital, cada paciente recibe un tratamiento completamente personalizado. Creemos en la escucha activa, el diagnóstico preciso y las técnicas basadas en la última evidencia científica.
              </p>
              <p>
                Nuestro objetivo es claro: ayudarte a recuperar tu calidad de vida y acompañarte en cada paso del proceso. Tu bienestar es nuestra prioridad.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <p className="text-2xl font-semibold text-foreground">+10</p>
                <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <p className="text-2xl font-semibold text-foreground">+2.000</p>
                <p className="text-sm text-muted-foreground mt-1">Pacientes tratados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      image: "/images/testimonial-1.jpg",
      name: "Carlos García",
      text: "Llevaba meses con dolor de espalda y después de unas sesiones con Laura, volví a entrenar sin molestias. Muy profesional y cercana.",
      result: "Volví a correr en 4 semanas"
    },
    {
      image: "/images/testimonial-2.jpg",
      name: "María Sánchez",
      text: "Me operaron de la rodilla y gracias a la rehabilitación en Fisio Vital recuperé la movilidad antes de lo esperado. Increíble trabajo.",
      result: "Recuperación completa en 3 meses"
    },
    {
      image: "/images/testimonial-3.jpg",
      name: "Ana Rodríguez",
      text: "Los problemas de ATM me impedían hasta abrir bien la boca. Laura me trató con mucho cuidado y ahora puedo comer sin dolor.",
      result: "Sin dolor mandibular en 6 semanas"
    }
  ]

  return (
    <section id="testimonios" className="py-24 lg:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Historias reales de recuperación y bienestar
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-xl border border-border/50 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.result}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Agenda tu sesión y empieza a mejorar hoy mismo
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Estamos aquí para ayudarte. Reserva tu primera cita y da el primer paso hacia tu recuperación.
            </p>
            
            <a
              href="https://wa.me/34600000000?text=Hola,%20me%20gustaría%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-sm items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar por WhatsApp
            </a>
            
            <div className="mt-12 space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Calle Mayor 45, 28013 Madrid</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lunes a Viernes: 9:00 - 20:00</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+34 600 000 000</span>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="animate-fade-in">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/map-placeholder.jpg"
                alt="Ubicación de Fisio Vital en Madrid"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                <div className="bg-card p-4 rounded-lg shadow-md text-center">
                  <p className="font-semibold text-foreground">Fisio Vital</p>
                  <p className="text-sm text-muted-foreground">Calle Mayor 45, Madrid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre nosotros", href: "#sobre-nosotros" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <footer className="py-12 lg:py-16 px-6 border-t border-border/50 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Left - Logo & Description */}
          <div>
            <a href="#inicio" className="text-2xl font-semibold text-foreground">
              Fisio<span className="text-primary">Vital</span>
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Tratamientos personalizados de fisioterapia basados en evidencia científica.
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-semibold text-foreground mb-4">Secciones</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right - Contact */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground md:text-right">
              <p>Calle Mayor 45, 28013 Madrid</p>
              <p>+34 600 000 000</p>
              <p>Lunes a Viernes: 9:00 - 20:00</p>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Fisio Vital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
