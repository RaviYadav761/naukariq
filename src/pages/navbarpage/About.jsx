import Seo from "../../Components/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About NaukriQ"
        description="Learn about NaukriQ, a simple learning platform for coding, AI tools, and digital skills for students and beginners."
        keywords="about NaukriQ, coding learning platform, AI education, beginner learning"
        canonical="https://naukriq.me/about"
        ogTitle="About NaukriQ"
        ogDescription="Discover the mission behind NaukriQ and how it helps learners understand coding and AI tools."
        ogImage="https://naukriq.me/og-image.svg"
      />

      <div className="min-h-screen bg-slate-100 py-16">
        <div className="mx-auto w-[90%] max-w-5xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200">
          <header className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-8 text-white shadow-lg">
            <h1 className="text-5xl font-bold">About NaukriQ</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-100">
              NaukriQ is a learning hub for students and beginners who want to understand coding, tools, and how the web works. We focus on simple explanations, examples, and clean UI so learning feels easy and practical.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200" aria-labelledby="mission-heading">
              <h2 id="mission-heading" className="text-3xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-4 leading-8 text-slate-600">
                To make programming easy and accessible for everyone by using real-life examples, clear language, and a friendly website experience.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200" aria-labelledby="offer-heading">
              <h2 id="offer-heading" className="text-3xl font-semibold text-slate-900">What We Offer</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 leading-8 text-slate-600">
                <li>Interactive learning pages for coding and tools</li>
                <li>Simple explanations in everyday language</li>
                <li>Examples that connect real life to programming</li>
                <li>Helpful navigation for quick access to topics</li>
              </ul>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-3xl font-semibold text-slate-900">Why This Site?</h2>
            <p className="mt-4 leading-8 text-slate-600">
              This website is built to help learners understand technology with confidence. Whether you are new to coding or exploring digital tools, NaukriQ is designed to guide you step-by-step with practical examples.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;