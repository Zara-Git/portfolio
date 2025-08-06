import { useState } from "react";
import { useNavigate } from "react-router-dom";

const profileImage = "/protofile.jpg";

const texts = {
  en: {
    title: "About Me",
    role: "Frontend Developer & UI Designer",
    content: `My name is Zara Rangkhoni, and I believe in creating meaningful digital experiences that not only function beautifully—but feel human.
From the very first time I discovered the "Inspect" button on a web page, I was hooked. Not by the code itself, but by the idea that a few lines of logic could shape how people interact with the world. That curiosity led me on a path I’m still proudly walking.

🎓 A Curious Mind with an Artistic Soul

I began my academic journey in Graphic Design, where I learned the fundamentals of visual communication, color psychology, and emotional storytelling through imagery. But something was missing—I wanted to bring those visuals to life, to give them interaction, logic, and purpose.

So I pivoted.

I enrolled in a two-year Frontend Development program in Sweden, where I dove into HTML, CSS, JavaScript, React, UX/UI principles, and agile workflows. What I loved most was not just building components, but building clarity, accessibility, and delight into every click.

🛠️ From Sketches to Scalable Systems

During my LIA internship at Arcledi UO, I worked on a real banking application as a UI Designer and Frontend Developer. I collaborated closely in an agile team, transforming abstract ideas into responsive, scalable, and user-friendly interfaces.
Whether it was refactoring components or improving accessibility, I learned that great design is not just how it looks—but how it works.

Since then, I’ve continued growing—building personal projects like a Website Trust Checker, a Netflix UI clone, and a responsive E-Wallet app with Redux and custom components. Each project has taught me how to code with empathy, design with clarity, and debug with patience.

🎨 What Drives Me

I’m deeply inspired by clean aesthetics, micro-interactions, and the psychology of user behavior.
I love solving problems—not just technical ones, but human ones. What motivates me is the moment someone says:

  “Oh, this is exactly what I needed.”

My interests span beyond the screen too: I enjoy photography, observing architecture, and reading about minimalism, emotional design, and the future of AI in digital products.

🔭 What’s Next

I'm looking for opportunities where I can contribute with both code and creativity, preferably in a team that values collaboration, inclusion, and continuous learning.
Whether that’s as a frontend developer, a UI designer, or somewhere in-between—I’m ready to bring energy, empathy, and precision to every project I touch.

This is more than a job for me—it’s a craft.
And I’m just getting started.`,
  },
  sv: {
    title: "Om mig",
    name: "Zara Rangkhoni",
    role: "Frontendutvecklare & UI-designer",
    content: `Jag heter Zara Rangkhoni och jag tror på att skapa meningsfulla digitala upplevelser som inte bara fungerar vackert – utan också känns mänskliga.
Från det ögonblick jag upptäckte \"Inspect\"-knappen på en webbsida var jag fast. Inte på grund av själva koden, utan för att några rader logik kunde forma hur människor interagerar med världen. Den nyfikenheten ledde mig in på en väg jag fortfarande med stolthet följer.

🎓 En nyfiken själ med ett konstnärligt hjärta

Min akademiska resa började inom grafisk design, där jag lärde mig grunderna i visuell kommunikation, färgpsykologi och emotionellt berättande genom bilder. Men något saknades – jag ville väcka bilderna till liv, ge dem interaktion, logik och syfte.

Så jag bytte spår.

Jag började på en tvåårig frontendutbildning i Sverige, där jag fördjupade mig i HTML, CSS, JavaScript, React, UX/UI-principer och agila arbetsflöden. Det jag älskade mest var inte bara att bygga komponenter, utan att skapa tydlighet, tillgänglighet och glädje i varje klick.

🛠️ Från skisser till skalbara system

Under min LIA-praktik på Arcledi UO arbetade jag med en verklig bankapplikation som UI-designer och frontendutvecklare. Jag samarbetade nära i ett agilt team och förvandlade abstrakta idéer till responsiva, skalbara och användarvänliga gränssnitt.
Oavsett om det handlade om att förbättra komponenter eller öka tillgängligheten, lärde jag mig att bra design inte bara handlar om hur det ser ut – utan hur det fungerar.

Sedan dess har jag fortsatt att utvecklas – genom personliga projekt som en webbsäkerhetskontroll (Trust Checker), en Netflix-klon och en responsiv e-plånboksapp med Redux och egna komponenter. Varje projekt har lärt mig att koda med empati, designa med tydlighet och felsöka med tålamod.

🎨 Vad driver mig

Jag inspireras av ren estetik, mikrointeraktioner och användarbeteende.  
Jag älskar att lösa problem – inte bara tekniska, utan mänskliga. Det som motiverar mig mest är när någon säger:

  “Precis det här behövde jag.”

Mina intressen sträcker sig också bortom skärmen: Jag tycker om fotografering, att betrakta arkitektur och att läsa om minimalism, emotionell design och AI:ns framtid i digitala produkter.

🔭 Vad kommer härnäst?

Jag söker möjligheter där jag kan bidra med både kod och kreativitet, gärna i ett team som värdesätter samarbete, inkludering och kontinuerligt lärande.
Oavsett om det är som frontendutvecklare, UI-designer eller något däremellan – är jag redo att tillföra energi, empati och precision till varje projekt jag tar mig an.

Det här är mer än ett jobb för mig – det är ett hantverk.  
Och jag har precis börjat.`,
  },
};

export default function AboutMePage() {
  const [lang, setLang] = useState("en");
  const navigate = useNavigate();

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 animate-fade-in">
      {/* Switch Language */}
      <div className="flex justify-end mb-4 gap-2">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 text-sm rounded-full border ${
            lang === "en"
              ? "bg-purple-600 text-white"
              : "text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("sv")}
          className={`px-3 py-1 text-sm rounded-full border ${
            lang === "sv"
              ? "bg-purple-600 text-white"
              : "text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          SV
        </button>
      </div>

      {/* Image + Name */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
        <img
          src={profileImage}
          alt="Zara Rangkhoni"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />
        ;
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-purple-700">
            {texts[lang].name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-1">
            {texts[lang].role}
          </p>
        </div>
      </div>

      {/* Full Story */}
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        {texts[lang].title}
      </h2>
      <p className="whitespace-pre-line text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
        {texts[lang].content}
      </p>

      {/* Back to Home Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 text-sm font-semibold rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100 transition duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
}
