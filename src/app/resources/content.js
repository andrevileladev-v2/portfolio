import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Andre",
  lastName: "Vilela",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Design Engineer", // e.g., "Software Engineer", "Product Designer"
  avatar: "/images/avatar.jpg",
  email: "andrevileladev@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Português"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Inscreva-se na newsletter de {person.firstName}</>,
  description: (
    <>
      Compartilho ocasionalmente conteúdos sobre desenvolvimento web, projetos full stack
      e como utilizo ferramentas como React e Node.js para criar soluções reais e escaláveis.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/andrevileladev-v2",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andrevileladev/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/oandrevilela",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:andrevileladev@gmail.com",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: "Portfólio de André Vilela",
  description: "Site portfólio apresentando meu trabalho como Desenvolvedor Full Stack",
  headline: <>Construindo sistemas web escaláveis com código limpo e design sólido</>,
  featured: {
    display: true,
    title: <>Projeto recente: <strong className="ml-4">MedSenior Maratona</strong></>,
    href: "/work/medsenior-maratona-inovacao",
  },
  subline: (
    <>
      Sou André Vilela, desenvolvedor full stack focado em criar sistemas inteligentes e escaláveis usando React e Node.js.<br />
      Quando não estou programando, ajudo empresas a crescerem através da tecnologia na Tática Júnior.<br />
      Recentemente participei de eventos de inovação como maratona da MedSenior com SEBRAE e eduHackathon da Beedu.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: "Sobre – André Vilela",
  description: "Conheça André Vilela, Desenvolvedor Full Stack de Guarapari, ES",
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com/andrevileladev" },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        André Vilela é um desenvolvedor full stack de Guarapari apaixonado por construir sistemas web reais usando React e Node.js.
        Possui experiência com APIs, MongoDB, Azure Blob, integrações com WhatsApp e atualmente é Diretor de Projetos na Tática Júnior.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Tática Júnior",
        timeframe: "2024 - Presente",
        role: "Diretor de Projetos",
        achievements: [
          <>Liderança na estruturação da área de projetos, reuniões semanais e organização da equipe técnica.</>,
          <>Apoio na organização interna da empresa e integração com diferentes áreas.</>,
        ],
        images: [],
      },
      {
        company: "Freelancer",
        timeframe: "2023 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>Criação de sistemas para psicólogos com agendamento, permissões e uploads no Azure.</>,
          <>Desenvolvimento de dashboards com geração de PDFs e bots para WhatsApp utilizando a API da Meta.</>,
        ],
        images: [],
      },
      {
        company: "MedSenior - Maratona de Inovação",
        timeframe: "2025",
        role: "Participante",
        achievements: [
          <>Participação em maratona de inovação em conjunto com SEBRAE para desenvolvimento de soluções tecnológicas.</>,
          <>Desenvolvimento de aplicação focada em melhorar a experiência de usuários da MedSenior.</>,
        ],
        images: [],
      },
      {
        company: "Beedu - eduHackathon",
        timeframe: "2025",
        role: "Participante",
        achievements: [
          <>Participação no eduHackathon da Beedu para criação de soluções inovadoras em educação.</>,
          <>Desenvolvimento de projeto focado em melhorar a experiência educacional através da tecnologia.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação",
    institutions: [
      {
        name: "AMPLI",
        description: <>Graduando em Ciência da Computação.</>,
      },
      {
        name: "IFES",
        description: <>Graduando em Administração.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades técnicas",
    skills: [
      {
        title: "React.js & Next.js",
        description: <>Criação de sistemas web modernos e performáticos com React, Vite e Next.js.</>,
        images: [],
      },
      {
        title: "Node.js & MongoDB",
        description: <>Desenvolvimento de APIs RESTful com Express, autenticação e integração com bancos NoSQL.</>,
        images: [],
      },
      {
        title: "WhatsApp API & Azure",
        description: <>Integração com API oficial do WhatsApp Business e armazenamento de arquivos na Azure Blob.</>,
        images: [],
      },
      {
        title: "Hackathons & Inovação",
        description: <>Experiência em maratonas de inovação e hackathons, desenvolvendo soluções rápidas e eficazes para problemas reais.</>,
        images: [],
      },
      {
        title: "Design Thinking & UX",
        description: <>Aplicação de metodologias ágeis e design thinking para criar experiências de usuário intuitivas e acessíveis.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre desenvolvimento, hackathons e inovação...",
  description: `Leia sobre hackathons, desenvolvimento full stack, eventos de tecnologia e o que André Vilela tem aprendido e construído.`,
};

const work = {
  path: "/work",
  label: "Projetos",
  title: "Projetos – André Vilela",
  description: "Sistemas, aplicações e participações em hackathons construídos com React, Node.js e MongoDB",
};

const gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria de fotos e vídeos – ${person.name}`,
  description: `Uma coleção de fotos e vídeos de ${person.name}`,
  images: [
    {
      src: "/images/gallery/equipe hackathon seniorIA.jpg",
      alt: "Equipe hackathon SeniorIA",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/esx.jpg",
      alt: "ESX - Evento de tecnologia",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/palco esx.jpg",
      alt: "Palco do ESX",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/premiacao.jpg",
      alt: "Premiação",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/grupo maratona.jpg",
      alt: "Grupo da maratona",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/grupo maratona 2.jpg",
      alt: "Grupo da maratona 2",
      orientation: "vertical",
    },
  ],
  videos: [
    {
      src: "/videos/hackathon medsenior.mp4",
      alt: "Hackathon MedSenior",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
