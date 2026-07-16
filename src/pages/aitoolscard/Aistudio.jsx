import playground from "../../assets/images/playground.PNG";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.5.PNG";
import img5 from "../../assets/images/5.PNG";
import img1 from "../../assets/images/1.png";
import historyicon from "../../assets/images/history.PNG";
import newappicon from "../../assets/images/newapp.PNG";
import myappsicon from "../../assets/images/myapps.PNG";
import galleryicon from "../../assets/images/gallery.PNG";
import dashboardicon from "../../assets/images/dashboard.PNG";
import apikeyicon from "../../assets/images/apikey.PNG";
import upgradeicon from "../../assets/images/upgrade.PNG";
import documentationicon from "../../assets/images/documentation.PNG";



import Seo from "../../Components/Seo";

const Aistudio = () => {
  return (
    <>
      <Seo
        title="Google AI Studio Guide for Beginners"
        description="Learn how to use Google AI Studio step by step with beginner-friendly guides for prompts, apps, history, API keys, and more."
        keywords="Google AI Studio, Gemini, AI guide, AI tools, beginner guide, AI API"
        canonical="https://naukriq.me/aistudio"
        ogTitle="Google AI Studio Guide for Beginners"
        ogDescription="A practical beginner guide to Google AI Studio features, apps, and API tools."
        ogImage="https://naukriq.me/og-image.svg"
      />

      <div className="min-h-screen bg-slate-400 py-10">
        <div className="mx-auto w-[95%] rounded-xl bg-slate-200 p-8 shadow-lg md:w-[80%]">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          Google AI Studio
        </h1>

        <p className="text-slate-600 mb-10">
          Complete beginner guide to Google AI Studio.
        </p>

        {/* Section 1 */}
        <div className="mb-16">

          <h2 className=" text-green-500 font-bold mb-5">
            Step 1 : - search "Google AI Studio" in Google and click on the first link.
            https://aistudio.google.com/

          </h2>
          <img
            src={img1}
            alt="Google AI Studio"
            className="w-full lg:w-auto rounded-xl border shadow-lg"
          />

          <h2 className=" text-green-500 font-bold mt-8">
            Step 2 : - this is the official website of Google AI Studio. You can access all the features of Google AI Studio from here.
          </h2>
          <img
            src={playground}
            alt="Playground"
            className="w-full lg:w-auto rounded-xl mt-5 border shadow-lg"
          />

          <div className="mt-6 space-y-3 text-lg text-gray-700 ">

            <p className="text-green-500 font-bold">
              Step 3 : -Left Sidebar
            </p>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <img
                src={img3}
                alt="Google AI Studio left sidebar menu"
                className="w-full max-w-[320px] lg:w-1/6 lg:max-w-none rounded-xl border shadow-lg"
              />
              <div className="flex-1">
                <p className="text-green-500 font-bold pb-3">
                  Step 3.1: Playground inside Google AI Studio has almost all the available features.
                </p>
                <img
                  src={img4}
                  alt="Google AI Studio playground feature options"
                  className="w-full max-w-[320px] lg:w-auto lg:max-w-none  rounded-xl border shadow-lg"
                />
                <ul className="list-disc pl-6 space-y-2">
                  <li>Image Generate</li>
                  <li>Video Generate</li>
                  <li>Code Generate</li>
                  <li>Website Banana</li>
                  <li>Business Ideas</li>
                  <li>Chatbot Banana</li>
                  <li>Question Answer</li>
                  <li>Speech to Text</li>
                  <li>Text to Speech</li>
                  <li>Aur bahut kuch...</li>
                </ul>
              </div>

            </div>

          </div>
        </div>


        <div className="mt-12" >
          <p className="text-green-500 font-bold pb-3">
            Step 3.2: History inside Google AI Studio has all the previous chats and prompts saved. If you have written any prompt or made any project, you can open it again from here.
          </p>
          <img
            src={historyicon}
            alt="Google AI Studio history page with saved prompts"
            className="w-full max-w-[360px] lg:w-auto lg:max-w-none  rounded-xl border shadow-lg"
          />

          <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700 ">
            <li>all previous prompts and chats can be accessed from here.
            </li>
            <li>previous AI chats can be continued.
            </li>
            <li>any old project can be edited.
            </li>
            <li>previously generated code can be viewed.
            </li>
            <li>image generation history can be checked.
            </li>
            <li>previous responses can be copied.
            </li>
            <li>any prompt can be reused.
            </li>
            <li>you can maintain a record of your AI work.
            </li>
            <li>time can be saved without rewriting prompts.
            </li>
            <li>previous conversations can be referenced.
            </li>
          </ul>
        </div>



{/* Step 3.3 */}
<div className="mt-12">
  <p className="text-green-500 font-bold pb-3">
    Step 3.3: New App inside Google AI Studio allows you to create your own AI application. You can build chatbots, AI assistants, and custom AI-powered tools for personal or business use.
  </p>

  <img
    src={newappicon}
    alt="Google AI Studio page for creating a new app"
    className="w-full max-w-[360px] lg:w-auto lg:max-w-nonerounded-xl border shadow-lg"
  />

  <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700">
    <li>Create your own AI chatbot.</li>
    <li>Build a custom AI assistant.</li>
    <li>Develop AI applications for business.</li>
    <li>Create customer support bots.</li>
    <li>Integrate AI into websites.</li>
    <li>Build prompt-based AI tools.</li>
    <li>Use Gemini API in applications.</li>
    <li>Customize AI projects.</li>
    <li>Test and improve AI apps.</li>
    <li>Create AI-powered startup products.</li>
  </ul>
</div>

{/* Step 3.4 */}
<div className="mt-12">
  <p className="text-green-500 font-bold pb-3">
    Step 3.4: My Apps inside Google AI Studio stores all the AI applications you have created. From here, you can manage, edit, and reopen your existing AI projects anytime.
  </p>

  <img
    src={myappsicon}
    alt="Google AI Studio My Apps dashboard"
    className="w-full max-w-[360px] lg:w-auto lg:max-w-none  rounded-xl border shadow-lg"
  />

  <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700">
    <li>View all your AI applications.</li>
    <li>Open previously created apps.</li>
    <li>Edit existing AI projects.</li>
    <li>Update application settings.</li>
    <li>Test and improve AI apps.</li>
    <li>Manage multiple AI projects.</li>
    <li>Duplicate existing applications.</li>
    <li>Share apps with team members.</li>
    <li>Delete unused projects.</li>
    <li>Continue working on saved AI apps.</li>
  </ul>
</div>

{/* Step 3.5 */}
<div className="mt-12">
  <p className="text-green-500 font-bold pb-3">
    Step 3.5: Gallery inside Google AI Studio provides ready-made AI examples, prompt templates, and demos that help you understand how different AI features work.
  </p>

  <img
    src={galleryicon}
    alt="Google AI Studio gallery with AI examples"
    className="w-full lg:w-auto rounded-xl border shadow-lg"
  />

  <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700">
    <li>Explore ready-made AI examples.</li>
    <li>Learn prompt writing techniques.</li>
    <li>Use built-in prompt templates.</li>
    <li>View image generation examples.</li>
    <li>Explore coding prompts.</li>
    <li>Learn chatbot prompt examples.</li>
    <li>Get inspiration for AI projects.</li>
    <li>Reuse high-quality prompts.</li>
    <li>Discover AI use cases.</li>
    <li>Learn Gemini model capabilities.</li>
  </ul>
</div>

{/* Step 3.6 */}
<div className="mt-12">
  <p className="text-green-500 font-bold pb-3">
    Step 3.6: Dashboard inside Google AI Studio lets you manage your account, API usage, projects, quotas, and other important settings from one place.
  </p>

  <img
    src={dashboardicon}
    alt="Google AI Studio dashboard overview"
    className="w-full lg:w-auto rounded-xl border shadow-lg"
  />

  <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700">
    <li>Create and manage API keys.</li>
    <li>Monitor API usage.</li>
    <li>Check request limits.</li>
    <li>View billing information.</li>
    <li>Track project performance.</li>
    <li>Monitor resource usage.</li>
    <li>Manage account settings.</li>
    <li>Check quota status.</li>
    <li>Access development credentials.</li>
    <li>Manage AI Studio account efficiently.</li>
  </ul>
</div>

{/* Step 3.7 */}
<div className="mt-12">
  <p className="text-green-500 font-bold pb-3">
    Step 3.7: Documentation inside Google AI Studio contains official guides, tutorials, API references, and coding examples to help developers build AI applications.
  </p>

  <img
    src={documentationicon}
    alt="Google AI Studio documentation resources"
    className="w-full lg:w-auto rounded-xl border shadow-lg"
  />

  <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700">
    <li>Learn how to use Gemini API.</li>
    <li>Understand API integration.</li>
    <li>View coding examples.</li>
    <li>Read official tutorials.</li>
    <li>Learn prompt engineering.</li>
    <li>Understand AI Studio features.</li>
    <li>Find solutions for API errors.</li>
    <li>Learn about SDKs and libraries.</li>
    <li>Configure authentication.</li>
    <li>Follow best development practices.</li>
  </ul>
</div>

{/* Step 3.8 */}
<div className="mt-12">
  <p className="text-green-500 font-bold pb-3">
    Step 3.8: Upgrade to Unlock More allows you to access advanced Gemini models, higher usage limits, and premium features for professional AI development.
  </p>

  <img
    src={upgradeicon}
    alt="Google AI Studio upgrade and premium plan options"
    className="w-full lg:w-auto rounded-xl border shadow-lg"
  />

  <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700">
    <li>Access advanced AI models.</li>
    <li>Increase API usage limits.</li>
    <li>Work on larger AI projects.</li>
    <li>Get faster AI responses.</li>
    <li>Unlock premium features.</li>
    <li>Build commercial AI applications.</li>
    <li>Handle higher workloads.</li>
    <li>Generate more AI content.</li>
    <li>Access latest AI capabilities.</li>
    <li>Improve professional productivity.</li>
  </ul>
</div>

{/* Step 3.9 */}
<div className="mt-12">
  <p className="text-green-500 font-bold pb-3">
    Step 3.9: Get API Key inside Google AI Studio lets you generate a secure Gemini API Key to connect AI models with your website, app, or software.
  </p>

  <img
    src={apikeyicon}
    alt="Google AI Studio API key generation page"
    className="w-full lg:w-auto rounded-xl border shadow-lg"
  />

  <ul className="list-disc pl-6 pt-5 space-y-2 text-gray-700">
    <li>Generate a Gemini API key.</li>
    <li>Connect AI with websites.</li>
    <li>Integrate AI into mobile apps.</li>
    <li>Use AI with Python or JavaScript.</li>
    <li>Build AI chatbots.</li>
    <li>Create AI automation tools.</li>
    <li>Manage API keys securely.</li>
    <li>Regenerate or delete API keys.</li>
    <li>Authenticate API requests.</li>
    <li>Deploy AI applications.</li>
  </ul>
</div>

        </div>
      </div>
    </>
  );
};

export default Aistudio;