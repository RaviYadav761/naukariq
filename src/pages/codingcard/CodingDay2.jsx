import React from "react";
import Seo from "../../Components/Seo";
import mainImg from "./codingimg/codingday2-main.svg";

const CodingDay2 = () => {

  return (
    <>
       <Seo
        title="Frontend, Backend and Database Explained for Beginners"
        description="Learn what Frontend, Backend and Database are with a simple restaurant example. Understand how websites work and how all three parts connect."
        keywords="frontend, backend, database, frontend kya hai, backend kya hai, database kya hai, frontend backend database, web development, website development, coding for beginners, how websites work"
        canonical="https://naukriq.me/codingday2"
        ogTitle="Frontend, Backend and Database Explained Simply"
        ogDescription="Understand Frontend, Backend and Database with an easy restaurant example. A beginner-friendly guide to how websites work."
        // ogImage="https://naukriq.me/og-image.svg"
        ogType="article"
      />

      <main className="bg-slate-400 min-h-screen py-10">
        <article className="w-[90%] md:w-[80%] mx-auto bg-slate-200 rounded-xl shadow-lg p-5 md:p-8">
          <header className="py-8 md:py-14">
            <div className="mb-6 flex justify-center">
              <img
                src={mainImg}
                alt="Frontend, Backend and Database illustration"
                className="w-full max-w-4xl rounded-xl object-cover shadow-lg"
                loading="eager"
              />
            </div>

            <span className="text-blue-600 font-semibold uppercase">
              Web Development Basics
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
              Frontend, Backend aur Database Kya Hote Hain?
            </h1>

            <p className="mt-4 text-gray-600">
              Restaurant ke simple example se samjho ki ek website kaise
              kaam karti hai.
            </p>
          </header>

          <div className="text-lg text-gray-700 leading-9">
            <p>
              Agar aap <strong>Web Development</strong> ya Coding seekhna
              start kar rahe ho, to sabse pehle ye samajhna important hai ki
              ek website actually kaam kaise karti hai.
            </p>

            <p className="mt-5">
              Basically, har website ke 3 major parts hote hain —
              <strong> Frontend, Backend aur Database</strong>.
            </p>

            <p className="mt-5">
              Agar aap in teeno ka role samajh gaye, to website kaise work
              karti hai iska basic concept aapko easily samajh aa jayega.
              Chalo ise ek simple <strong>Restaurant Example</strong> se
              samajhte hain.
            </p>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Frontend Kya Hota Hai?
              </h2>

              <p className="mt-4">
                Frontend ko aap restaurant ke{" "}
                <strong>Dining Area</strong> ki tarah samajh sakte ho.
              </p>

              <p className="mt-4">
                Restaurant mein customer dining area mein baithta hai, menu
                dekhta hai aur available options ke saath interact karta hai.
                Same way, website par user ko jo kuch bhi screen par dikhai
                deta hai aur jiske saath user directly interact karta hai,
                use <strong>Frontend</strong> kehte hain.
              </p>

              <p className="mt-4">
                Frontend mein Buttons, Text, Images, Menus, Forms,
                Navigation, Website Layout aur Design jaisi cheezein include
                hoti hain.
              </p>

              <p className="mt-4">
                Simple words mein,{" "}
                <strong>
                  website ka jo part user directly dekhta aur use karta hai,
                  wahi Frontend hai.
                </strong>
              </p>

              <p className="mt-4">
                Frontend Development ke liye commonly{" "}
                <strong>HTML, CSS aur JavaScript</strong> ka use kiya jata
                hai.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Backend Kya Hota Hai?
              </h2>

              <p className="mt-4">
                Backend ko restaurant ke <strong>Kitchen</strong> ki tarah
                samjho.
              </p>

              <p className="mt-4">
                Restaurant mein customer ko kitchen ke andar kya ho raha hai,
                wo directly dikhai nahi deta. Lekin order prepare karne ka
                main kaam kitchen mein hi hota hai.
              </p>

              <p className="mt-4">
                Exactly isi tarah website ka Backend bhi user ko directly
                dikhai nahi deta. Backend website ke peeche hone wali{" "}
                <strong>processing, functionality aur logic</strong> ko
                handle karta hai.
              </p>

              <p className="mt-4">
                Backend User Login aur Authentication handle karta hai,
                Orders aur Requests process karta hai, Database se
                information leta hai aur required data ko Frontend tak
                pahunchata hai.
              </p>

              <p className="mt-4">
                Suppose aap kisi website par email aur password enter karke{" "}
                <strong>Login</strong> button click karte ho. Frontend aapki
                information Backend ko send karta hai. Backend check karta
                hai ki entered details correct hain ya nahi aur uske
                according response deta hai.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Database Kya Hota Hai?
              </h2>

              <p className="mt-4">
                Database ko restaurant ke{" "}
                <strong>Store Room aur Records Register</strong> ki tarah
                samajh sakte ho.
              </p>

              <p className="mt-4">
                Restaurant ke store room mein important ingredients store
                hote hain aur records mein orders ya customers se related
                information maintain ki ja sakti hai.
              </p>

              <p className="mt-4">
                Same way, website ka important data{" "}
                <strong>Database</strong> mein store aur manage kiya jata
                hai.
              </p>

              <p className="mt-4">
                Database mein <strong>User Details, Login Information,
                Products, Orders aur Customer Details</strong> jaise records
                store ho sakte hain.
              </p>

              <p className="mt-4">
                Simple words mein,{" "}
                <strong>
                  Database wo jagah hai jahan website ki important information
                  store hoti hai.
                </strong>
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Frontend, Backend aur Database Kaise Kaam Karte Hain?
              </h2>

              <p className="mt-4">
                Suppose aap kisi <strong>Food Ordering Website</strong> par
                jaate ho. Sabse pehle aap Frontend par menu aur food items
                dekhte ho.
              </p>

              <p className="mt-4">
                Aap apna favourite food select karke{" "}
                <strong>Order Now</strong> button par click karte ho. Ab
                aapki request Backend ke paas jaati hai.
              </p>

              <p className="mt-4">
                Backend request ko process karta hai aur Database se required
                information check karta hai, jaise product available hai ya
                nahi, price kya hai aur order ki details kya hain.
              </p>

              <p className="mt-4">
                Database se information milne ke baad Backend result ko
                Frontend par show kar deta hai.
              </p>

              <div className="mt-6 p-5 bg-white rounded-xl text-center font-bold text-gray-900 overflow-x-auto">
                User → Frontend → Backend → Database → Backend → Frontend →
                User
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Frontend, Backend aur Database Mein Difference
              </h2>

              <p className="mt-4">
                <strong>Frontend:</strong> Website ka visible part hota hai
                jiske saath user directly interact karta hai.
              </p>

              <p className="mt-4">
                <strong>Backend:</strong> Website ke peeche ka logic,
                processing aur functionality handle karta hai.
              </p>

              <p className="mt-4">
                <strong>Database:</strong> Website ki information ko store
                aur manage karta hai.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Frontend, Backend aur Database Kyun Important Hain?
              </h2>

              <p className="mt-4">
                Ek website sirf attractive design se complete nahi hoti. Agar
                Frontend accha hai lekin Backend properly kaam nahi karta, to
                website ki functionality affect hogi.
              </p>

              <p className="mt-4">
                Agar Backend strong hai lekin Database properly manage nahi
                hai, to data related problems aa sakti hain. Isi tarah agar
                functionality acchi hai lekin Frontend difficult hai, to{" "}
                <strong>User Experience</strong> kharab ho sakta hai.
              </p>
            </section>

            {/* FAQ content */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Frontend ka simple meaning kya hai?
              </h3>
              <p className="mt-2">
                Frontend website ka wo part hai jo user ko screen par dikhai
                deta hai aur jiske saath user directly interact karta hai.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Backend ka kaam kya hota hai?
              </h3>
              <p className="mt-2">
                Backend website ka logic, authentication, requests, data
                processing aur Database ke saath communication handle karta
                hai.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Database kya store karta hai?
              </h3>
              <p className="mt-2">
                Database users, products, orders aur website se related
                important information ko store aur manage karta hai.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Frontend ke liye kya seekhna chahiye?
              </h3>
              <p className="mt-2">
                Frontend Development start karne ke liye HTML, CSS aur
                JavaScript important technologies hain.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Kya Backend aur Database same hote hain?
              </h3>
              <p className="mt-2">
                Nahi. Backend processing aur logic handle karta hai, jabki
                Database information ko store aur manage karta hai.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Conclusion
              </h2>

              <p className="mt-4">
                Basically, kisi bhi modern website ko smoothly run karne ke
                liye <strong>Frontend, Backend aur Database</strong> ka ek
                saath kaam karna important hai.
              </p>

              <p className="mt-4">
                Frontend user ko website dikhata hai, Backend website ke
                peeche ki processing aur logic handle karta hai, aur Database
                important information ko store karta hai.
              </p>

              <p className="mt-4">
                Agar aap <strong>Coding aur Web Development zero se
                seekhna</strong> chahte ho, to in concepts ko samajhna aapki
                Web Development journey ka ek strong starting point hai.
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
};

export default CodingDay2;