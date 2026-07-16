import Seo from "../../Components/Seo";

import zero1coding from "./codingimg/zero1codingd1.png";
import switchd1 from "./codingimg/switchcodingd1.png";
import socialmediad1 from "./codingimg/socialmediacodingd1.png";
import lemond1 from "./codingimg/lemoncodingd1.png";

const CodingDay1 = () => {
  return (
    <>
      <Seo
        title="What is Coding? Coding and Machine Language"
        description="Learn what coding is, machine language, binary language, compilers, interpreters, and programming basics with simple examples."
        keywords="coding, machine language, binary language, compiler, interpreter, programming, C, C++, Java, Python, JavaScript"
        canonical="https://naukriq.me/codingday1"
        ogTitle="What is Coding? Coding and Machine Language"
        ogDescription="A complete beginner guide to coding and machine language."
        ogImage="https://naukriq.me/og-image.svg"
        ogType="article"
      />

      <div className="bg-slate-400 min-h-screen py-10">
        <div className="w-[80%] mx-auto bg-slate-200 rounded-xl shadow-lg p-8">
          <section className="flex gap-10 items-start py-14">
            <div>
              <span className="text-blue-600 font-semibold uppercase">
                Coding Basics
              </span>

              <h1 className="text-4xl font-bold mt-4">
                Coding And Machine Language
              </h1>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <img
                  src={socialmediad1}
                  alt="Social Media Apps"
                  className="w-56 rounded-2xl shadow-xl"
                />

                <img
                  src={lemond1}
                  alt="Lemonade Example"
                  className="w-56 rounded-2xl shadow-xl"
                />

                <img
                  src={switchd1}
                  alt="Light Switch ON and OFF"
                  className="w-56 rounded-2xl shadow-xl"
                />

                <img
                  src={zero1coding}
                  alt="Binary Language"
                  className="w-56 rounded-2xl shadow-xl"
                />
              </div>

              <div className="mt-6">
                <p className="text-lg text-gray-600 leading-9">
                  You use Instagram, Facebook, and YouTube every day, but have
                  you ever wondered how these platforms are built?
                  <br />
                  The simple answer is — <b>Coding.</b>
                  <br />
                  Let's understand it with an example. Imagine you want to make
                  a glass of lemonade. I give you step-by-step instructions.
                  <br />
                  First, take a glass of water. Squeeze a lemon into it. Add
                  some sugar. Add a little salt. Then mix everything well.
                  <br />
                  If you follow these instructions correctly, your lemonade will
                  be ready.
                  <br />
                  In the same way, a computer also follows instructions. These
                  instructions are called <b>Code</b>, and the process of
                  writing these instructions for a computer is called{" "}
                  <b>Coding</b>.
                  <br />
                  But there is one problem. A computer cannot understand human
                  language.
                  <br />
                  Let's take another simple example.
                  <br />
                  Imagine the switch in your house is <b>ON</b>, the light turns
                  on. If it is <b>OFF</b>, the light turns off.
                  <br />
                  This means the light has only two possible states —
                  <b> ON </b>or <b>OFF</b>.
                  <br />
                  A computer works in exactly the same way. It treats
                  <b> ON as 1 </b>and <b>OFF as 0</b>.
                  <br />
                  The combination of 0s and 1s is called{" "}
                  <b>Binary Language</b>, and this is the only language a
                  computer understands.
                  <br />
                  In the early days, programmers had to write every instruction
                  using only <b>0s and 1s</b>. This was called{" "}
                  <b>Machine Language</b>. However, it was extremely difficult
                  to write and remember.
                  <br />
                  To solve this problem, <b>Assembly Language</b> was
                  introduced.
                  <br />
                  Instead of writing only 0s and 1s, programmers could use short
                  commands like <b>MOV</b>, <b>ADD</b>, and <b>SUB</b>.
                  <br />
                  However, Assembly Language worked only on a specific
                  processor. A program written for one processor could not run
                  on another. That's why it is called{" "}
                  <b>Platform Dependent</b>.
                  <br />
                  Later, <b>High-Level Programming Languages</b> such as{" "}
                  <b>C</b>, <b>C++</b>, <b>Java</b>, <b>Python</b>, and{" "}
                  <b>JavaScript</b> were developed. These languages are much
                  easier for humans to read, write, and understand.
                  <br />
                  But computers still understand only <b>0s and 1s</b>.
                  Therefore, a <b>Compiler</b> or an <b>Interpreter</b> converts
                  these high-level languages into Machine Language before the
                  computer can execute them.
                  <br />
                  <b>Why are there so many Programming Languages?</b>
                  <br />
                  A simple example makes it easy to understand. An axe is used
                  to cut trees, a knife is used to cut fruits, and a saw is used
                  to cut wood.
                  <br />
                  In the same way, every Programming Language is designed for a
                  specific purpose, and each one is best suited for different
                  types of work.

                  <br />
                  For example, <b>Python</b> is like a Swiss Army knife. It is
                  easy to learn and is used in many areas such as website
                  development, data analysis, artificial intelligence, and
                  automation.
                  <br />
                  <b>JavaScript</b> is the language of the web. Whenever you
                  click a button, see a popup, or watch a live animation on a
                  website, JavaScript is working behind the scenes.
                  <br />
                  <b>C and C++</b> are like the engines of a car. They are fast
                  and powerful, so they are used to build operating systems,
                  games, and software that needs high performance.
                  <br />
                  <b>Java</b> is widely used in large companies and Android app
                  development. It is known for being stable and secure, which is
                  why many banking and government systems rely on it.
                  <br />
                  So, if you want to build a website, you may choose JavaScript.
                  If you want to analyze data or build AI, Python is a great
                  start. If you want to understand how computers work deeply,
                  C and C++ are the best teachers.
                  <br />
                  The most important thing to remember is that{" "}
                  <b>coding is just a way of giving instructions</b>. The
                  language you choose is only a tool. Once you understand how to
                  think step by step like a computer, learning any programming
                  language becomes much easier.
                  <br />
                  Just like you can learn to write in Hindi, English, or any
                  other language, you can also learn to write code. The logic
                  remains the same — only the words change.
                  <br />
                  In the upcoming lessons, we will start with the basics of{" "}
                  <b>C</b>, which is known as the mother of many modern
                  programming languages. Mastering C will make it much easier to
                  learn C++, Java, Python, and many others in the future.
                  <br />
                  <b>Remember:</b> Every expert coder was once a beginner. The
                  only difference is that they started. So take a deep breath,
                  open your code editor, and write your first line of code
                  today.




                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CodingDay1;