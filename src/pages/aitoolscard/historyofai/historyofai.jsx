import React from "react";
import Seo from "../../../Components/Seo";
import img1 from "./imageshoa/1.png";
import img2 from "./imageshoa/2.png";
import img3 from "./imageshoa/3.png";
import img4 from "./imageshoa/4.png";
import icon11 from "./imageshoa/11.png";
import icon12 from "./imageshoa/12.png";
import icon13 from "./imageshoa/13.png";
import icon14 from "./imageshoa/14.png";
import icon15 from "./imageshoa/15.png";
import icon16 from "./imageshoa/16.png";
import icon17 from "./imageshoa/17.png";

const HistoryOfAI = () => {
  return (
    <>
      <Seo
        title="History of AI: From 1958 to ChatGPT"
        description="An illustrated timeline and explanation of AI's beginnings, perceptron, milestones, and key thinkers."
        keywords="history of ai, perceptron, geoffrey hinton, frank rosenblatt, ai timeline"
        canonical="https://naukriq.me/historyofai"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 py-10 text-slate-100">
        <div className="mx-auto w-[95%] rounded-3xl bg-slate-950/95 p-8 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.9)] backdrop-blur-md md:w-[85%] border border-slate-800">

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-amber-400/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                The Real Beginning of AI
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                From 1958 to ChatGPT
              </h1>
              <p className="mt-5 max-w-2xl text-slate-300 sm:text-lg">
                The untold story of AI's true origin and how it evolved to become a part of our lives.
              </p>
              <div className="mt-8 grid gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
                <div className="space-y-2 rounded-2xl bg-slate-800/90 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">When We Think of AI</p>
                  <p className="text-base text-slate-200">
                    Whenever we talk about AI, the first thing that comes to our mind is ChatGPT. Many of us believe that AI started somewhere around 2023–2024. But the truth is, AI's journey began much earlier.
                  </p>
                </div>
                <div className="mt-4 space-y-4 rounded-3xl bg-slate-900/90 p-5 shadow-inner">
                  <p className="text-slate-300">
                    The man who is called the "Godfather of AI", Geoffrey Hinton, left his active career to focus on one mission — spreading awareness about how dangerous AI can be if not controlled.
                  </p>
                  <p className="text-slate-300">
                    He warns that AI will be able to manipulate people, convince them easily, and big companies building AI today are not paying enough attention to safety and regulations. Governments also lack the understanding to handle such a powerful technology.
                  </p>
                  <p className="text-slate-300">
                    I wanted to create this video (and this article) long ago, but some of these technical concepts took time for me to fully grasp. My goal is always to explain complex things in a simple way so that everyone — from small towns to villages — can understand.
                  </p>
                  <p className="font-semibold text-slate-100">So, let's start from the beginning...</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-4 shadow-lg">
              <img src={img1} alt="AI header" className="w-full rounded-3xl object-cover" />
            </div>
          </div>

          <section className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
              <div className="mb-4 inline-flex rounded-full bg-rose-500/15 px-3 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Where Did AI Really Begin?</h2>
              <p className="mt-4 text-slate-300">
                Many people think AI started when ChatGPT was launched. But that's not true. The real journey of AI began around 1958.
              </p>
              <p className="mt-4 text-slate-300">
                Before 1958, computers were just calculators. We gave them rules — like multiplication, subtraction, division — and they followed those rules faster than any human.
              </p>
              <p className="mt-4 text-slate-300">
                But in 1958, a group of scientists had a new idea: "What if we build machines that work like the human brain?"
              </p>
              <p className="mt-4 text-slate-300">
                Nature has always been our biggest teacher. Just like we studied birds to create airplanes, scientists studied the human brain to create intelligent machines.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <img src={img2} alt="Old computer" className="h-44 w-full rounded-3xl object-cover shadow-lg" />
                <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-300 shadow-inner">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Before 1958</p>
                  <p className="mt-3 text-base text-slate-200">Computers were rule-following calculators.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
              <div className="mb-4 inline-flex rounded-full bg-cyan-500/15 px-3 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">The Human Brain: A Natural Computer</h2>
              <p className="mt-4 text-slate-300">
                Our brain works in layers of neurons. Let's understand this with a simple example: seeing an object and turning it into a conclusion.
              </p>
              <div className="mt-6 space-y-4">
                <img src={img3} alt="Brain example" className="w-full rounded-3xl object-cover shadow-lg" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                    <p className="font-semibold text-white">Layer 1</p>
                    <p className="mt-2 text-sm text-slate-400">See the object and note basic features like shapes, color, size, and texture.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                    <p className="font-semibold text-white">Layer 2</p>
                    <p className="mt-2 text-sm text-slate-400">Combine features and start guessing what the object might be.</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                  <p className="font-semibold text-white">Layer 3</p>
                  <p className="mt-2 text-sm text-slate-400">Check more details and refine the answer until the brain reaches a conclusion.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-amber-400/15 px-3 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                  3
                </div>
                <h2 className="text-2xl font-bold text-white">The Birth of the Perceptron (1958)</h2>
                <p className="mt-4 text-slate-300">
                  In 1958, scientist Frank Rosenblatt created an artificial neuron called the Perceptron. He believed that machines using this model could think and learn like humans.
                </p>
                <ul className="mt-5 space-y-3 text-slate-300">
                  <li>It takes multiple inputs and assigns weights.</li>
                  <li>The weighted sum is processed with a bias and activation.</li>
                  <li>The output is the first simple form of a neural network.</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 shadow-inner">
                <img src={img4} alt="Perceptron diagram" className="w-full rounded-3xl object-cover shadow-lg" />
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
            <div className="mb-6 inline-flex rounded-full bg-violet-500/15 px-3 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
              4
            </div>
            <h2 className="text-2xl font-bold text-white">Journey of AI: Key Milestones</h2>
            <p className="mt-4 text-slate-300">From the idea of AI in the 1950s to modern systems like ChatGPT, each milestone changed how machines learn and think.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:items-start">
              <div className="rounded-3xl bg-slate-950/80 p-4 text-center text-slate-300 shadow-inner">
                <img src={icon11} alt="1950s icon" className="mx-auto h-20 w-20 rounded-3xl bg-white/5 p-3" />
                <p className="mt-4 text-2xl font-bold text-white">1950s</p>
                <p className="mt-2 text-sm text-slate-400">The idea of AI was born.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-center text-slate-300 shadow-inner">
                <img src={icon12} alt="1958 icon" className="mx-auto h-20 w-20 rounded-3xl bg-white/5 p-3" />
                <p className="mt-4 text-2xl font-bold text-white">1958</p>
                <p className="mt-2 text-sm text-slate-400">Perceptron was invented by Frank Rosenblatt.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-center text-slate-300 shadow-inner">
                <img src={icon13} alt="1960s-70s icon" className="mx-auto h-20 w-20 rounded-3xl bg-white/5 p-3" />
                <p className="mt-4 text-2xl font-bold text-white">1960s–70s</p>
                <p className="mt-2 text-sm text-slate-400">Optimism grew, but limitations were also found.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-center text-slate-300 shadow-inner">
                <img src={icon14} alt="1980s-90s icon" className="mx-auto h-20 w-20 rounded-3xl bg-white/5 p-3" />
                <p className="mt-4 text-2xl font-bold text-white">1980s–90s</p>
                <p className="mt-2 text-sm text-slate-400">Machine learning algorithms improved.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-center text-slate-300 shadow-inner">
                <img src={icon15} alt="2000s icon" className="mx-auto h-20 w-20 rounded-3xl bg-white/5 p-3" />
                <p className="mt-4 text-2xl font-bold text-white">2000s</p>
                <p className="mt-2 text-sm text-slate-400">Big data and more computing power boosted AI research.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-center text-slate-300 shadow-inner">
                <img src={icon16} alt="2010s icon" className="mx-auto h-20 w-20 rounded-3xl bg-white/5 p-3" />
                <p className="mt-4 text-2xl font-bold text-white">2010s</p>
                <p className="mt-2 text-sm text-slate-400">Deep learning revolution changed everything.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-center text-slate-300 shadow-inner">
                <img src={icon17} alt="2020s icon" className="mx-auto h-20 w-20 rounded-3xl bg-white/5 p-3" />
                <p className="mt-4 text-2xl font-bold text-white">2020s</p>
                <p className="mt-2 text-sm text-slate-400">AI goes mainstream with models like ChatGPT, Claude, Gemini, etc.</p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
            <div className="mb-4 inline-flex rounded-full bg-emerald-400/15 px-3 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
              5
            </div>
            <h2 className="text-2xl font-bold text-white">Why Awareness Matters</h2>
            <p className="mt-4 text-slate-300">
              Geoffrey Hinton and many other experts warn us: AI is powerful, but it can be dangerous if misused.
            </p>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>AI can manipulate people.</li>
              <li>AI can be used for control, not just help.</li>
              <li>Big companies are racing for AI, but ignoring safety.</li>
              <li>Governments are not ready for AI's challenges yet.</li>
            </ul>
            <div className="mt-6 rounded-3xl bg-emerald-500/10 p-6 text-slate-200 shadow-inner">
              <p className="font-semibold text-white">Final Thought</p>
              <p className="mt-3 text-slate-300">
                AI is not magic. It is the result of human curiosity, research, failures, and learning for more than 60 years. The future of AI depends on how responsibly we build and use it today.
              </p>
            </div>
          </section>

          <footer className="mt-10 text-center text-sm text-slate-500">
            <p>Let's use AI to make the world better, not to put it at risk.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HistoryOfAI;
