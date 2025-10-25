import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        {/* ====== META BÁSICA ====== */}
        <title>Micaela Callahuanca | Data Engineer & AI Engineer</title>
        <meta
          name="description"
          content="Data Engineer y AI Engineer especializada en ingeniería de datos, automatización y analítica avanzada. Transformo datos en decisiones estratégicas."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://micaela-callahuanca-portfolio.vercel.app/"
        />

        {/* ====== OPEN GRAPH ====== */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Micaela Callahuanca | Data Engineer & AI Engineer"
        />
        <meta
          property="og:description"
          content="Explorá los proyectos de Micaela Callahuanca: ingeniería de datos, inteligencia artificial aplicada y automatización de procesos. Portfolio profesional y casos de éxito."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/micac/image/upload/f_auto/portfolio_micaela_callahuanca.png"
        />
        <meta
          property="og:url"
          content="https://micaela-callahuanca-portfolio.vercel.app/"
        />
        <meta property="og:site_name" content="Portfolio de Micaela Callahuanca" />
        <meta property="og:locale" content="es_AR" />

        {/* ====== TWITTER CARD ====== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Micaela Callahuanca | Data Engineer & AI Engineer"
        />
        <meta
          name="twitter:description"
          content="Portfolio de Micaela Callahuanca, especialista en ingeniería de datos, IA aplicada y analítica avanzada."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/micac/image/upload/f_auto/portfolio_micaela_callahuanca.png"
        />
        <meta name="twitter:creator" content="@micaelacallahuanca" />

        {/* ====== GOOGLE SEARCH CONSOLE ====== */}
        <meta name="google-site-verification" content="rJ_g99b0_UUVD5EpbOi7KvIm9SQeGMZ-kSGJ4uQnN9U" />

        {/* ====== GOOGLE ANALYTICS (GA4) ====== */}
     
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SQYPM1KP2P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SQYPM1KP2P');
</script>

        {/* ====== GOOGLE TAG MANAGER ====== */}
       
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KTTXMN9H');</script>


        {/* ====== JSON-LD (PERSON) ====== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Micaela Callahuanca",
              jobTitle: "Data Engineer & AI Engineer",
              image:
                "https://res.cloudinary.com/micac/image/upload/f_auto/portfolio_micaela_callahuanca.png",
              url: "https://micaela-callahuanca-portfolio.vercel.app/",
              description:
                "Data Engineer especializada en analítica avanzada, inteligencia artificial y automatización de procesos. Experiencia en transformación de datos, SEO técnico y data pipelines.",
              sameAs: [
                "https://www.linkedin.com/in/micaelacallahuanca/",
                "https://github.com/micaelacallahuanca",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open Projects",
              },
            }),
          }}
        />

        {/* ====== JSON-LD (FAQPage) ====== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué tipo de proyectos desarrolla Micaela Callahuanca?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Desarrollo proyectos de ingeniería de datos, automatización y analítica avanzada, integrando soluciones de IA y SEO técnico para empresas y profesionales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué herramientas y tecnologías utiliza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Python, SQL, Airflow, dbt, Power BI, GCP, BigQuery, y frameworks de IA aplicada. También aplico SEO técnico y optimización de datos para rendimiento digital.",
                  },
                },
              ],
            }),
          }}
        />
      </Helmet>

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
