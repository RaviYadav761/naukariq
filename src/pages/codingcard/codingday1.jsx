import React from 'react'
import zero1coding from "./codingimg/zero1codingd1.png"
import switchd1 from "./codingimg/switchcodingd1.png"
import socialmediad1 from "./codingimg/socialmediacodingd1.png"
import lemond1 from "./codingimg/lemoncodingd1.png"

const CodingDay1 = () => {
  return (
    <div className="bg-slate-400 min-h-screen py-10">
      <div className="w-[80%] mx-auto bg-slate-200 rounded-xl shadow-lg p-8">
        <section className="flex  gap-10 items-start py-14">
          <div>
            <span className="text-blue-600 font-semibold uppercase">
              Coding Basics
            </span>
        <h2 className="text-4xl font-bold mt-4">
              Coding And Machine Language
            </h2>     
 <div className="flex flex-wrap justify-center  gap-4 mt-6">
 
                <img
                  src={socialmediad1}
                  alt="Coding"
                  className="w-56 rounded-2xl shadow-xl"
                />
                 <img
                  src={lemond1}
                  alt="Coding"
                  className="w-56 rounded-2xl shadow-xl"
                />
                 <img
                  src={switchd1}
                  alt="Coding"
                  className="w-56 rounded-2xl shadow-xl"
                />
                  <img
                  src={zero1coding}
                  alt="Coding"
                  className="w-56 rounded-2xl shadow-xl"
                />
              </div>

            <div className="flex  gap-6 mt-6">
              <div>
             <p className="text-lg text-gray-600 leading-9 mt-6">
  You use Instagram, Facebook, and YouTube every day, but have you ever wondered how these platforms are built? <br />
  The simple answer is — <b>Coding.</b>

  <br />
  Let's understand it with an example. Imagine you want to make a glass of lemonade. I give you step-by-step instructions. <br />
  First, take a glass of water. Squeeze a lemon into it. Add some sugar. Add a little salt. Then mix everything well. <br />

  If you follow these instructions correctly, your lemonade will be ready. <br />

  In the same way, a computer also follows instructions. These instructions are called <b>Code</b>, and the process of writing these instructions for a computer is called <b>Coding</b>. <br />

  But there is one problem. A computer cannot understand human language. <br />

  Let's take another simple example. <br />
  Imagine the switch in your house is <b>ON</b>, the light turns on. If it is <b>OFF</b>, the light turns off. <br />

  This means the light has only two possible states — <b>ON</b> or <b>OFF</b>.

  A computer works in exactly the same way. It treats <b>ON as 1</b> and <b>OFF as 0</b>. <br />

  The combination of 0s and 1s is called <b>Binary Language</b>, and this is the only language a computer understands. <br />

  In the early days, programmers had to write every instruction using only <b>0s and 1s</b>. This was called <b>Machine Language</b>. However, it was extremely difficult to write and remember. <br />

  To solve this problem, <b>Assembly Language</b> was introduced. <br />
  Instead of writing only 0s and 1s, programmers could use short commands like <b>MOV</b>, <b>ADD</b>, and <b>SUB</b>. <br />

  However, Assembly Language worked only on a specific processor. A program written for one processor could not run on another. That's why it is called <b>Platform Dependent</b>. <br />

  Later, <b>High-Level Programming Languages</b> such as <b>C</b>, <b>C++</b>, <b>Java</b>, <b>Python</b>, and <b>JavaScript</b> were developed. These languages are much easier for humans to read, write, and understand. <br />

  But computers still understand only <b>0s and 1s</b>. Therefore, a <b>Compiler</b> or an <b>Interpreter</b> converts these high-level languages into Machine Language before the computer can execute them. <br />

  Now comes the biggest question... <br />

  <b>Why are there so many Programming Languages?</b>

  A simple example makes it easy to understand. An axe is used to cut trees, a knife is used to cut fruits, and a saw is used to cut wood. <br />

  In the same way, every Programming Language is designed for a specific purpose, and each one is best suited for different types of work.
</p>

              </div>
             
            </div>






          </div>

        </section>
      </div>
    </div>
  )
}

export default CodingDay1;
