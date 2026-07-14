const Contact = () => {
  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="mx-auto w-[90%] max-w-4xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200">
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 p-8 text-white shadow-lg">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-100">
            Have a question, suggestion, or want to learn more? Send us a message and we'll get back to you soon.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">Email</h2>
              <p className="mt-4 text-slate-600 leading-8">raviyadavxyz93@gmail.com</p>
            </div>
            {/* <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">Phone</h2>
              <p className="mt-4 text-slate-600 leading-8">+91 98765 43210</p>
            </div> */}
          </div>

          {/* <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900">Send a Message</h2>
            <form className="mt-6 space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition focus:border-blue-500"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 outline-none transition focus:border-blue-500"
              />
              <button
                type="submit"
                className="rounded-3xl bg-slate-900 px-8 py-4 text-white transition hover:bg-slate-800"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;