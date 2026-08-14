import { useState } from "react";
import "./index.css";

/* =========================
   IMAGES
========================= */

const images = {
  brain: "/images/ai-brain.png",
  analytics: "/images/ai-analytics.png",
  head: "/images/ia-head.png",
};

/* =========================
   MAILS
========================= */

const mails = [
  {
    id: 1,
    sender: "Jean Martin",
    company: "Entreprise Horizon",
    subject: "Demande de rendez-vous commercial",
    text: "Bonjour, nous souhaiterions échanger avec votre équipe concernant une éventuelle collaboration.",
    category: "Commercial",
    priority: "Urgente",
    color: "purple",
  },
  {
    id: 2,
    sender: "Sophie Bernard",
    company: "Client Premium",
    subject: "Question concernant ma facture",
    text: "Bonjour, pourriez-vous vérifier le montant indiqué sur ma dernière facture ?",
    category: "Facturation",
    priority: "Normale",
    color: "blue",
  },
  {
    id: 3,
    sender: "Marc Dupont",
    company: "Support Client",
    subject: "Problème urgent avec mon dossier",
    text: "Bonjour, nous rencontrons actuellement un problème qui bloque notre activité.",
    category: "Support",
    priority: "Urgente",
    color: "red",
  },
  {
    id: 4,
    sender: "Julie Morel",
    company: "Ressources humaines",
    subject: "Document à valider",
    text: "Bonjour, voici le document demandé pour validation.",
    category: "Administratif",
    priority: "Basse",
    color: "green",
  },
];

/* =========================
   SERVICES
========================= */

const services = [
  {
    icon: "✦",
    title: "Automatisation intelligente",
    text: "Automatisez les tâches répétitives qui prennent du temps à vos équipes.",
  },
  {
    icon: "⌁",
    title: "Analyse prédictive",
    text: "Transformez vos données en informations utiles pour mieux décider.",
  },
  {
    icon: "◎",
    title: "IA conversationnelle",
    text: "Des assistants intelligents capables de comprendre vos demandes.",
  },
  {
    icon: "◈",
    title: "Gestion des e-mails",
    text: "Analyse, classement, priorisation et orientation automatique.",
  },
  {
    icon: "⌘",
    title: "Traitement du langage",
    text: "Notre IA comprend le contexte et l'intention de vos messages.",
  },
  {
    icon: "◆",
    title: "Recommandations intelligentes",
    text: "Des recommandations adaptées à vos processus.",
  },
];

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <div className="logo">
      <span className="logo-mark">✦</span>
      <strong>AI Future</strong>
    </div>
  );
}

/* =========================
   NAVBAR
========================= */

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["Accueil", "home"],
    ["Services", "services"],
    ["Notre IA", "ia"],
    ["Solutions", "solutions"],
    ["Performance", "performance"],
    ["À propos", "about"],
  ];

  function navigate(target) {
    setPage(target);
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className="navbar">
      <Logo />

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, target]) => (
          <button
            key={target}
            className={
              page === target
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => navigate(target)}
          >
            {label}
          </button>
        ))}
      </nav>

      <button
        className="nav-cta"
        onClick={() => navigate("contact")}
      >
        Demander une démo
      </button>

      <button
        className="burger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
    </header>
  );
}

/* =========================
   COMMON
========================= */

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2>{title}</h2>

      {text && <p>{text}</p>}

      <div className="title-line" />
    </div>
  );
}

/* =========================
   ACCUEIL
========================= */

function Home({ setPage }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <Eyebrow>
            INTELLIGENCE ARTIFICIELLE POUR ENTREPRISES
          </Eyebrow>

          <h1>
            L'intelligence artificielle
            <br />
            au service de votre{" "}
            <span>croissance.</span>
          </h1>

          <p className="hero-text">
            Nous créons des solutions d'intelligence artificielle
            capables d'automatiser vos tâches, d'analyser vos données
            et de simplifier votre quotidien.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setPage("ia")}
            >
              Découvrir notre IA →
            </button>

            <button
              className="secondary-btn"
              onClick={() => setPage("contact")}
            >
              Demander une démo
            </button>
          </div>

          <div className="hero-trust">
            <span>✓ Simple</span>
            <span>✓ Intelligent</span>
            <span>✓ Adapté à votre entreprise</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="purple-orb" />
          <div className="grid-floor" />

          <img
            src={images.brain}
            alt="Intelligence artificielle"
          />

          <div className="floating-card floating-top">
            <span className="status-dot" />
            IA ACTIVE
            <strong>Analyse en temps réel</strong>
          </div>

          <div className="floating-card floating-bottom">
            <span>✦</span>
            E-mail analysé
            <strong>Priorité élevée</strong>
          </div>
        </div>
      </section>

      <section className="trusted">
        <p>
          UNE TECHNOLOGIE AU SERVICE DE VOTRE ENTREPRISE
        </p>

        <div className="trusted-logos">
          <span>GOOGLE</span>
          <span>MICROSOFT</span>
          <span>NVIDIA</span>
          <span>IBM</span>
          <span>ORACLE</span>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="PERFORMANCE"
          title="Des résultats mesurables."
          text="L'objectif n'est pas simplement d'utiliser l'IA. C'est d'obtenir des résultats concrets."
        />

        <div className="stats-grid">
          <StatCard
            value="+37%"
            title="Productivité"
            text="Gain moyen sur les tâches automatisées."
          />

          <StatCard
            value="-28%"
            title="Coûts"
            text="Réduction des tâches répétitives."
          />

          <StatCard
            value="+52%"
            title="Précision"
            text="Amélioration du traitement des informations."
          />

          <StatCard
            value="+90%"
            title="Satisfaction"
            text="Des équipes mieux accompagnées."
          />
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="NOS SERVICES"
          title="Une IA pensée pour votre activité."
          text="Des solutions concrètes pour automatiser, analyser et améliorer votre quotidien."
        />

        <div className="services-grid">
          {services.slice(0, 4).map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </section>

      <section className="promo">
        <div className="promo-content">
          <Eyebrow>NOTRE IA</Eyebrow>

          <h2>
            Découvrez <span>MAILORA.</span>
          </h2>

          <p>
            Votre boîte mail devient un véritable assistant.
            MAILORA comprend vos e-mails, identifie les priorités
            et vous recommande la bonne action.
          </p>

          <button
            className="primary-btn"
            onClick={() => setPage("ia")}
          >
            Tester la démo →
          </button>
        </div>

        <div className="promo-image">
          <img
            src={images.analytics}
            alt="Analyse intelligente"
          />
        </div>
      </section>

      <section className="cta">
        <div>
          <Eyebrow>
            PRÊT À PASSER À L'ÉTAPE SUIVANTE ?
          </Eyebrow>

          <h2>
            Et si votre entreprise
            <br />
            travaillait déjà avec l'IA ?
          </h2>

          <p>
            Parlons de vos besoins et trouvons ensemble les
            solutions les plus pertinentes.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setPage("contact")}
        >
          Parlons de votre projet →
        </button>
      </section>
    </>
  );
}

function StatCard({ value, title, text }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>

      <h3>{title}</h3>

      <div className="chart-line">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <p>{text}</p>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {service.icon}
      </div>

      <h3>{service.title}</h3>

      <p>{service.text}</p>

      <span className="learn-more">
        En savoir plus →
      </span>
    </div>
  );
}

/* =========================
   SERVICES
========================= */

function Services({ setPage }) {
  return (
    <div className="page">
      <section className="page-hero">
        <Eyebrow>NOS SERVICES</Eyebrow>

        <h1>
          Des solutions IA
          <br />
          conçues pour votre entreprise.
        </h1>

        <p>
          Nous ne proposons pas une IA générique.
          Nous construisons des solutions adaptées
          à vos besoins réels.
        </p>
      </section>

      <section className="section">
        <div className="large-services">
          {services.map((service, index) => (
            <div
              className="large-service"
              key={service.title}
            >
              <span className="number">
                0{index + 1}
              </span>

              <div className="large-icon">
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <p>{service.text}</p>

              <span className="learn-more">
                Explorer la solution →
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-panel">
        <div>
          <Eyebrow>UNE APPROCHE CONCRÈTE</Eyebrow>

          <h2>
            Nous partons de vos problèmes,
            pas de la technologie.
          </h2>

          <p>
            Nous identifions les tâches qui peuvent réellement
            être améliorées et construisons une solution utile
            à vos équipes.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setPage("contact")}
        >
          Étudier mon besoin →
        </button>
      </section>
    </div>
  );
}

/* =========================
   MAILORA
========================= */

function Mailora() {
  const [selected, setSelected] = useState(mails[0]);
  const [category, setCategory] = useState("Tous");
  const [processed, setProcessed] = useState(false);

  const categories = [
    "Tous",
    "Commercial",
    "Facturation",
    "Support",
    "Administratif",
  ];

  const filtered =
    category === "Tous"
      ? mails
      : mails.filter(
          (mail) => mail.category === category
        );

  return (
    <div className="page mailora-page">
      <section className="mailora-hero">
        <div>
          <Eyebrow>
            NOTRE INTELLIGENCE ARTIFICIELLE
          </Eyebrow>

          <h1>
            Voici <span>MAILORA.</span>
          </h1>

          <p>
            L'IA qui transforme votre boîte mail en espace
            de travail organisé, priorisé et intelligent.
          </p>

          <div className="process">
            <ProcessStep number="01" title="EMAIL" />
            <ProcessStep number="02" title="ANALYSE" />
            <ProcessStep number="03" title="PRIORITÉ" />
            <ProcessStep number="04" title="ACTION" />
          </div>
        </div>

        <div className="mailora-brain">
          <div className="brain-ring one" />
          <div className="brain-ring two" />

          <img
            src={images.brain}
            alt="MAILORA"
          />
        </div>
      </section>

      <section className="mail-demo">
        <div className="demo-header">
          <div>
            <Eyebrow>DÉMONSTRATION</Eyebrow>

            <h2>
              Votre boîte mail, augmentée par l'IA.
            </h2>
          </div>

          <span className="online">
            <i />
            MAILORA ACTIVE
          </span>
        </div>

        <div className="mail-interface">
          <aside className="mail-sidebar">
            <div className="mail-brand">
              <span>✦</span>
              MAILORA
            </div>

            <button className="compose">
              + Nouveau message
            </button>

            <div className="mail-folders">
              <span className="selected">
                ▣ Boîte de réception
                <b>24</b>
              </span>

              <span>★ Important</span>
              <span>◷ En attente</span>
              <span>✓ Traités</span>
              <span>⚙ Paramètres</span>
            </div>
          </aside>

          <div className="mail-list">
            <div className="mail-list-header">
              <div>
                <small>BOÎTE DE RÉCEPTION</small>
                <h3>Vos e-mails</h3>
              </div>

              <span>IA en analyse...</span>
            </div>

            <div className="category-tabs">
              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "tab active"
                      : "tab"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {filtered.map((mail) => (
              <button
                key={mail.id}
                className={
                  selected.id === mail.id
                    ? "email-row selected"
                    : "email-row"
                }
                onClick={() => {
                  setSelected(mail);
                  setProcessed(false);
                }}
              >
                <span
                  className={`email-dot ${mail.color}`}
                />

                <div className="email-main">
                  <strong>{mail.sender}</strong>
                  <span>{mail.company}</span>
                </div>

                <div className="email-subject">
                  <strong>{mail.subject}</strong>
                  <span>{mail.text}</span>
                </div>

                <span
                  className={`priority ${mail.priority.toLowerCase()}`}
                >
                  {mail.priority}
                </span>
              </button>
            ))}
          </div>

          <div className="mail-analysis">
            <div className="analysis-header">
              <div className="ai-avatar">
                ✦
              </div>

              <div>
                <small>ANALYSE PAR</small>
                <h3>MAILORA AI</h3>
              </div>

              <span className="ai-status">
                EN LIGNE
              </span>
            </div>

            <div className="analysis-email">
              <span>EMAIL SÉLECTIONNÉ</span>

              <h2>{selected.subject}</h2>

              <p>{selected.text}</p>
            </div>

            <div className="scan">
              <div className="scan-line" />
              <span>Analyse intelligente...</span>
            </div>

            <div className="analysis-grid">
              <AnalysisItem
                label="Catégorie"
                value={selected.category}
              />

              <AnalysisItem
                label="Priorité"
                value={selected.priority}
              />

              <AnalysisItem
                label="Intention"
                value="Demande client"
              />

              <AnalysisItem
                label="Confiance IA"
                value="98.7%"
              />
            </div>

            <div className="recommendation">
              <span>✦ ACTION RECOMMANDÉE</span>

              <h3>
                {selected.priority === "Urgente"
                  ? "Transmettre immédiatement à un responsable."
                  : "Répondre avec un modèle adapté."}
              </h3>

              <p>
                MAILORA comprend le contexte du message
                et recommande l'action la plus pertinente.
              </p>

              <button
                className="primary-btn full"
                onClick={() => setProcessed(true)}
              >
                {processed
                  ? "✓ Action enregistrée"
                  : "Appliquer l'action"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="COMMENT ÇA MARCHE"
          title="Une IA qui comprend vraiment vos e-mails."
          text="MAILORA peut être adaptée aux règles et aux processus de votre entreprise."
        />

        <div className="benefits">
          <Benefit
            number="01"
            title="Comprendre"
            text="L'IA comprend le contenu et le contexte."
          />

          <Benefit
            number="02"
            title="Classer"
            text="Chaque message est orienté vers la bonne catégorie."
          />

          <Benefit
            number="03"
            title="Prioriser"
            text="Les demandes importantes sont identifiées."
          />

          <Benefit
            number="04"
            title="Agir"
            text="L'IA recommande la prochaine action."
          />
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ number, title }) {
  return (
    <div className="process-step">
      <span>{number}</span>
      <strong>{title}</strong>
    </div>
  );
}

function AnalysisItem({ label, value }) {
  return (
    <div className="analysis-item">
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

function Benefit({ number, title, text }) {
  return (
    <div className="benefit">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

/* =========================
   SOLUTIONS
========================= */

function Solutions({ setPage }) {
  return (
    <div className="page">
      <section className="solutions-hero">
        <div>
          <Eyebrow>
            SOLUTIONS POUR ENTREPRISES
          </Eyebrow>

          <h1>
            L'IA doit résoudre
            <br />
            des problèmes <span>réels.</span>
          </h1>

          <p>
            Nous transformons les tâches chronophages
            en processus intelligents afin que vos équipes
            puissent se concentrer sur ce qui compte.
          </p>

          <button
            className="primary-btn"
            onClick={() => setPage("contact")}
          >
            Parler à un expert →
          </button>
        </div>

        <div className="head-visual">
          <img
            src={images.head}
            alt="Solution IA"
            onError={(e) => {
              console.error(
                "Image introuvable :",
                images.head
              );
            }}
          />
        </div>
      </section>

      <section className="section solution-cards">
        <SolutionCard
          number="01"
          title="Automatiser"
          text="Réduire le temps consacré aux tâches répétitives."
        />

        <SolutionCard
          number="02"
          title="Comprendre"
          text="Donner du sens aux informations de votre entreprise."
        />

        <SolutionCard
          number="03"
          title="Décider"
          text="Transformer vos données en informations utiles."
        />
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="POUR QUI ?"
          title="Une technologie adaptable."
          text="Notre approche peut s'adapter à différents environnements professionnels."
        />

        <div className="sectors">
          <span>Agences</span>
          <span>PME</span>
          <span>Groupes</span>
          <span>Services clients</span>
          <span>Cabinets</span>
          <span>Équipes commerciales</span>
        </div>
      </section>
    </div>
  );
}

function SolutionCard({ number, title, text }) {
  return (
    <div className="solution-card">
      <span>{number}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

/* =========================
   PERFORMANCE
========================= */

function Performance() {
  const bars = [
    42,
    55,
    48,
    72,
    61,
    80,
    66,
    87,
    72,
    94,
    81,
    96,
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <Eyebrow>
          PERFORMANCE & ANALYTICS
        </Eyebrow>

        <h1>
          Mesurez.
          <br />
          Comprenez.
          <br />
          <span>Optimisez.</span>
        </h1>

        <p>
          Visualisez les résultats générés par vos
          automatisations et votre IA.
        </p>
      </section>

      <section className="dashboard section">
        <div className="dashboard-top">
          <div>
            <Eyebrow>TABLEAU DE BORD</Eyebrow>
            <h2>Vue globale</h2>
          </div>

          <span className="period">
            30 derniers jours
          </span>
        </div>

        <div className="dashboard-stats">
          <DashStat
            label="Modèles déployés"
            value="24"
            change="+12%"
          />

          <DashStat
            label="Prédictions / jour"
            value="18.6K"
            change="+18%"
          />

          <DashStat
            label="Précision moyenne"
            value="92.7%"
            change="+2.8%"
          />

          <DashStat
            label="Temps de traitement"
            value="1.2s"
            change="-23%"
          />
        </div>

        <div className="dashboard-main">
          <div className="big-chart">
            <div className="chart-title">
              <span>Précision des modèles</span>
              <small>30 derniers jours</small>
            </div>

            <div className="bars">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className="dashboard-bar"
                  style={{
                    height: `${height}%`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="donut-card">
            <span>Répartition des usages</span>

            <div className="donut">
              <div>IA</div>
            </div>

            <div className="legend">
              <span>
                Analyse prédictive <b>35%</b>
              </span>

              <span>
                Automatisation <b>30%</b>
              </span>

              <span>
                IA conversationnelle <b>20%</b>
              </span>

              <span>
                Vision <b>15%</b>
              </span>
            </div>
          </div>
        </div>

        <div className="activity">
          <div className="activity-title">
            Activité récente
          </div>

          <div className="activity-row header">
            <span>Modèle</span>
            <span>Type</span>
            <span>Précision</span>
            <span>Status</span>
          </div>

          {[
            [
              "Email Prediction",
              "Predictif",
              "93.6%",
            ],
            [
              "Sales Forecasting",
              "Predictif",
              "91.2%",
            ],
            [
              "Image Recognition",
              "Vision",
              "94.1%",
            ],
            [
              "Chatbot Support",
              "NLP",
              "89.3%",
            ],
          ].map((item) => (
            <div
              className="activity-row"
              key={item[0]}
            >
              <span>{item[0]}</span>
              <span>{item[1]}</span>
              <span>{item[2]}</span>

              <span className="active-status">
                Actif
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DashStat({ label, value, change }) {
  return (
    <div className="dash-stat">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{change}</small>
    </div>
  );
}

/* =========================
   À PROPOS
========================= */

function About() {
  return (
    <div className="page">
      <section className="about-hero">
        <div>
          <Eyebrow>À PROPOS</Eyebrow>

          <h1>
            Construire une IA
            <br />
            <span>utile, simple et humaine.</span>
          </h1>

          <p>
            Notre objectif est simple : rendre l'intelligence
            artificielle accessible aux entreprises et leur permettre
            de gagner du temps, de mieux comprendre leurs données
            et de travailler plus efficacement.
          </p>
        </div>

        <div className="about-image">
          <img
            src={images.head}
            alt="AI Future"
            onError={(e) => {
              console.error(
                "Image introuvable :",
                images.head
              );
            }}
          />
        </div>
      </section>

      <section className="about-grid section">
        <div className="about-card">
          <span>01</span>

          <h2>Notre mission</h2>

          <p>
            Créer des solutions d'intelligence artificielle
            réellement utiles au quotidien.
          </p>
        </div>

        <div className="about-card">
          <span>02</span>

          <h2>Notre vision</h2>

          <p>
            Faire de l'IA un outil simple, accessible et
            performant pour toutes les entreprises.
          </p>
        </div>

        <div className="about-card">
          <span>03</span>

          <h2>Notre approche</h2>

          <p>
            Partir des besoins réels avant de choisir
            la technologie.
          </p>
        </div>
      </section>

      <section className="numbers">
        <div>
          <strong>50+</strong>
          <span>Experts IA</span>
        </div>

        <div>
          <strong>200+</strong>
          <span>Projets réalisés</span>
        </div>

        <div>
          <strong>98%</strong>
          <span>Clients satisfaits</span>
        </div>

        <div>
          <strong>15+</strong>
          <span>Secteurs d'activité</span>
        </div>
      </section>
    </div>
  );
}

/* =========================
   CONTACT
========================= */

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="page">
      <section className="contact">
        <div className="contact-copy">
          <Eyebrow>
            PARLONS DE VOTRE PROJET
          </Eyebrow>

          <h1>
            Et si votre prochaine
            <br />
            amélioration
            <span> venait de l'IA ?</span>
          </h1>

          <p>
            Expliquez-nous simplement votre activité
            et les problèmes que vous rencontrez.
            Nous vous aiderons à identifier les meilleures
            opportunités.
          </p>

          <div className="contact-points">
            <span>
              ✓ Premier échange sans engagement
            </span>

            <span>
              ✓ Analyse de vos besoins
            </span>

            <span>
              ✓ Recommandations concrètes
            </span>

            <span>
              ✓ Solution adaptée à votre entreprise
            </span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Eyebrow>DEMANDER UNE DÉMO</Eyebrow>

          <h2>Parlons-nous.</h2>

          <input
            placeholder="Votre nom"
            required
          />

          <input
            type="email"
            placeholder="Votre adresse e-mail"
            required
          />

          <input
            placeholder="Votre entreprise"
          />

          <select defaultValue="">
            <option value="" disabled>
              Quel est votre besoin ?
            </option>

            <option>
              Gestion des e-mails
            </option>

            <option>
              Automatisation
            </option>

            <option>
              Analyse de données
            </option>

            <option>
              Solution IA personnalisée
            </option>

            <option>
              Je ne sais pas encore
            </option>
          </select>

          <textarea
            rows="5"
            placeholder="Parlez-nous de votre projet..."
          />

          <button
            className="primary-btn full"
            type="submit"
          >
            {sent
              ? "✓ Demande envoyée"
              : "Demander ma démo →"}
          </button>

          <small>
            Vos informations restent confidentielles.
          </small>
        </form>
      </section>

      <div className="contact-bottom">
        <div>
          <span>EMAIL</span>
          <strong>
            contact@aifuture.com
          </strong>
        </div>

        <div>
          <span>TÉLÉPHONE</span>
          <strong>
            +33 1 23 45 67 89
          </strong>
        </div>

        <div>
          <span>HORAIRES</span>
          <strong>
            Lun - Ven · 9h00 - 18h00
          </strong>
        </div>
      </div>
    </div>
  );
}

/* =========================
   FOOTER
========================= */

function Footer({ setPage }) {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Logo />

          <p>
            Intelligence artificielle,
            automatisation et solutions digitales
            pour entreprises.
          </p>
        </div>

        <div className="footer-links">
          <button onClick={() => setPage("home")}>
            Accueil
          </button>

          <button onClick={() => setPage("services")}>
            Services
          </button>

          <button onClick={() => setPage("ia")}>
            Notre IA
          </button>

          <button onClick={() => setPage("solutions")}>
            Solutions
          </button>

          <button
            onClick={() => setPage("performance")}
          >
            Performance
          </button>

          <button onClick={() => setPage("contact")}>
            Contact
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 AI Future — Tous droits réservés.
      </div>
    </footer>
  );
}

/* =========================
   APP
========================= */

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar
        page={page}
        setPage={setPage}
      />

      <main>
        {page === "home" && (
          <Home setPage={setPage} />
        )}

        {page === "services" && (
          <Services setPage={setPage} />
        )}

        {page === "ia" && <Mailora />}

        {page === "solutions" && (
          <Solutions setPage={setPage} />
        )}

        {page === "performance" && (
          <Performance />
        )}

        {page === "about" && <About />}

        {page === "contact" && <Contact />}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}

export default App;