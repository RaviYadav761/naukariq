const About = () => {
  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="mx-auto w-[90%] max-w-5xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200">
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-8 text-white shadow-lg">
          <h1 className="text-5xl font-bold">About Naukari Q</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-100">
            Naukari Q is a learning hub for students and beginners who want to understand coding, tools, and how the web works. We focus on simple explanations, examples, and clean UI so learning feels easy and practical.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-slate-600 leading-8">
              To make programming easy and accessible for everyone by using real-life examples, clear language, and a friendly website experience.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900">What We Offer</h2>
            <ul className="mt-4 space-y-3 text-slate-600 leading-8 list-disc list-inside">
              <li>Interactive learning pages for coding and tools</li>
              <li>Simple explanations in everyday language</li>
              <li>Examples that connect real life to programming</li>
              <li>Helpful navigation for quick access to topics</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
          <h2 className="text-3xl font-semibold text-slate-900">Why This Site?</h2>
          <p className="mt-4 text-slate-600 leading-8">
            This website is built to help learners understand technology with confidence. Whether you are new to coding or exploring digital tools, Naukari Q is designed to guide you step-by-step with practical examples.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;