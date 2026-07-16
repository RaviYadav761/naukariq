import Seo from "../../Components/Seo";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact NaukriQ"
        description="Get in touch with NaukriQ for questions, feedback, and learning support about coding and AI tools."
        keywords="contact NaukriQ, learning support, coding help, AI help"
        canonical="https://naukriq.me/contact"
        ogTitle="Contact NaukriQ"
        ogDescription="Contact NaukriQ for questions or feedback about learning resources and guides."
        ogImage="https://naukriq.me/og-image.svg"
      />

      <div className="min-h-screen bg-slate-100 py-16">
        <div className="mx-auto w-[90%] max-w-4xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200">
          <header className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 p-8 text-white shadow-lg">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-100">
              Have a question, suggestion, or want to learn more? Send us a message and we will get back to you soon.
            </p>
          </header>

          <section className="space-y-8" aria-labelledby="contact-info-heading">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
                <h2 id="contact-info-heading" className="text-2xl font-semibold text-slate-900">Email</h2>
                <p className="mt-4 leading-8 text-slate-600">raviyadavxyz93@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;