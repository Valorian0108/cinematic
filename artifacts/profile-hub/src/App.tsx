import { type ReactNode, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Mail,
  Twitter,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const email = 'ifeoluwaoludemi34@gmail.com';

const links = [
  { label: 'X', href: 'https://x.com/ifeteddy0108', icon: Twitter },
  { label: 'GitHub', href: 'https://github.com/valorian0108', icon: Github },
];

const projects = [
  {
    id: 'orbit',
    type: 'Brand world · 2024',
    name: 'Emble Creative Academy',
    detail: 'Creative education, visual storytelling, and opportunity',
    art: 'art-featured',
    image: '/images/image.png',
    href: 'https://emblecreativeacademy.netlify.app/',
  },
  {
    id: 'field-notes',
    type: 'Publication · 2023',
    name: 'Field Notes',
    detail: 'Art direction, web design',
    art: 'art-paper',
    image: undefined,
    href: 'https://www.averymakes.studio/field-notes',
  },
  {
    id: 'tide',
    type: 'Hospitality · 2023',
    name: 'Tide House',
    detail: 'Strategy, identity',
    art: 'art-tide',
    image: undefined,
    href: 'https://www.averymakes.studio/tide-house',
  },
];

const services = [
  {
    id: 'direction',
    name: 'Creative direction',
    detail: 'A clear point of view from first sketch to final frame.',
  },
  {
    id: 'identity',
    name: 'Identity & language',
    detail: 'Marks, systems and words with somewhere to go.',
  },
  {
    id: 'digital',
    name: 'Digital experiences',
    detail: 'Thoughtful websites for people worth paying attention to.',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const revealTransition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1] as const,
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function AnimatedName({ reduced }: { reduced: boolean }) {
  return (
    <motion.p
      className="hero-name"
      aria-label="Ife Demi"
      initial={reduced ? false : 'hidden'}
      animate={reduced ? undefined : 'visible'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.42 } },
      }}
    >
      {'Ife Demi'.split('').map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          {character === ' ' ? '\u00a0' : character}
        </motion.span>
      ))}
    </motion.p>
  );
}

function IntroPanel({ reduced }: { reduced: boolean }) {
  return (
    <motion.section
      className="intro-panel"
      data-testid="section-about"
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.25 }}
      variants={reveal}
      transition={revealTransition}
    >
      <div>
        <p className="section-kicker">A small introduction</p>
        <h2 className="section-title">Less noise.<br />More meaning.</h2>
      </div>
      <p className="intro-copy" data-testid="text-about">
        I’m Ife Demi — a content creator in <strong>Nigeria</strong>, creating with AI and turning
        ambitious ideas into work with shape, rhythm, and a reason to exist. I’m your knight in
        shining armour when a good idea needs a creative direction.
      </p>
    </motion.section>
  );
}

function Home() {
  const reduced = useReducedMotion() ?? false;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="profile-page" data-testid="page-profile-hub">
      <motion.nav
        className="site-nav"
        data-testid="nav-main"
        initial={reduced ? false : { opacity: 0, y: -12 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15 }}
      >
        <button
          className="monogram"
          type="button"
          aria-label="Return to the top"
          data-testid="button-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          I
        </button>
        <div className="nav-links">
          <button type="button" data-testid="button-nav-work" onClick={() => scrollToSection('work')}>
            Selected work
          </button>
          <button type="button" data-testid="button-nav-services" onClick={() => scrollToSection('services')}>
            Services
          </button>
          <a className="nav-contact" href="#contact" data-testid="link-nav-contact">
            Let&apos;s talk <ArrowUpRight size={14} strokeWidth={1.7} />
          </a>
        </div>
      </motion.nav>

      <section className="hero" data-testid="section-hero">
        <motion.div
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'visible'}
          variants={reveal}
          transition={{ ...revealTransition, delay: 0.3 }}
        >
          <p className="eyebrow" data-testid="text-availability">Content creator · Creating with AI</p>
          <AnimatedName reduced={reduced} />
          <h1 data-testid="text-hero-title">
            Make room<br />for the <em>good</em><br />stuff.
          </h1>
          <p className="hero-intro" data-testid="text-hero-intro">
            A creative corner for content, AI-powered ideas, and the people building what comes next.
          </p>
          <div className="hero-actions">
            <motion.a
              className="button-primary"
              href="#work"
              data-testid="link-hero-work"
              whileHover={reduced ? undefined : { y: -3, scale: 1.025 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              See selected work <ArrowDown size={15} />
            </motion.a>
            <a className="button-quiet" href="#contact" data-testid="link-hero-contact">
              Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          data-testid="visual-portrait"
          initial={reduced ? false : { opacity: 0, scale: 0.94, rotate: 3 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-backdrop" aria-hidden="true" />
          <div className="portrait-label">Ife Demi / 01<br />a study in becoming</div>
          <div className="portrait-index">Nigeria · creating with AI</div>
        </motion.div>
      </section>
      <p className="scroll-cue" aria-hidden="true">Scroll to wander <span /></p>

      <div className="section" id="about">
        <IntroPanel reduced={reduced} />
      </div>

      <section className="section" id="work" data-testid="section-work">
        <motion.div
          className="section-header"
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          transition={revealTransition}
        >
          <div>
            <p className="section-kicker">A few things I&apos;ve made</p>
            <h2 className="section-title" data-testid="text-work-title">Selected work</h2>
          </div>
          <p className="section-note">Projects with generous clients, good questions and an unreasonable love of detail.</p>
        </motion.div>
        <motion.div
          className="work-grid"
          data-testid="list-projects"
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.18 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {projects.map((project) => (
            <motion.a
              className="work-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.id}
              data-testid={`card-project-${project.id}`}
              variants={reveal}
              transition={revealTransition}
              whileHover={reduced ? undefined : { y: -6 }}
              whileTap={reduced ? undefined : { scale: 0.992 }}
            >
              <div className={`work-art ${project.art}`} aria-hidden="true">
                {project.image && <img src={project.image} alt="Emble Creative Academy visual" />}
              </div>
              <div className="work-meta">
                <span>{project.type}</span>
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </div>
              <div className="work-footer">
                <div>
                  <h3 className="work-name" data-testid={`text-project-name-${project.id}`}>{project.name}</h3>
                  <p className="mt-2 text-xs opacity-70">{project.detail}</p>
                </div>
                <span className="work-link" aria-hidden="true"><ArrowUpRight size={16} /></span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      <section className="section" id="services" data-testid="section-services">
        <motion.div
          className="services-layout"
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={revealTransition}
        >
          <div>
            <p className="section-kicker">Ways we could work together</p>
            <h2 className="section-title" data-testid="text-services-title">The useful<br />magic.</h2>
            <p className="services-intro mt-6">Content with a point of view, AI-assisted creative exploration, and thoughtful storytelling for people building what comes next.</p>
          </div>
          <div className="services-list" data-testid="list-services">
            {services.map((service, index) => (
              <motion.button
                className="service-row w-full text-left"
                type="button"
                key={service.id}
                data-testid={`button-service-${service.id}`}
                onClick={() => scrollToSection('contact')}
                whileHover={reduced ? undefined : { x: 5 }}
                transition={{ type: 'spring', stiffness: 350, damping: 24 }}
              >
                <span className="service-number">0{index + 1}</span>
                <span>
                  <span className="service-name block">{service.name}</span>
                  <span className="service-detail block">{service.detail}</span>
                </span>
                <span className="service-arrow" aria-hidden="true"><ArrowUpRight size={15} /></span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section connect" id="contact" data-testid="section-contact">
        <motion.div
          className="connect-content"
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={revealTransition}
        >
          <p className="section-kicker">The door is open</p>
          <h2 className="connect-title" data-testid="text-contact-title">Have a good<br /><em>feeling</em> about it?</h2>
          <p className="connect-copy">Tell me what you&apos;re making, what&apos;s getting in the way, or what you can&apos;t stop thinking about. I&apos;ll write back soon.</p>
          <button
            className="email-button"
            type="button"
            data-testid="button-copy-email"
            aria-label={copied ? 'Email address copied' : 'Copy Ife Demi email address'}
            onClick={copyEmail}
          >
            {copied ? <Check size={16} /> : <Mail size={16} />}
            <span>{copied ? 'Copied to your clipboard' : email}</span>
            {!copied && <Copy size={14} />}
          </button>
        </motion.div>
      </section>

      <footer className="site-footer" data-testid="footer-profile">
        <span>© {new Date().getFullYear()} Ife Demi / made with care</span>
        <div className="footer-socials">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.label}
                aria-label={`Ife Demi on ${link.label}`}
                data-testid={`link-social-${link.label.toLowerCase()}`}
              >
                <Icon size={15} strokeWidth={1.6} />
              </a>
            );
          })}
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;