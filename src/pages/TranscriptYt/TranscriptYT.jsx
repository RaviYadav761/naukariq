import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const TranscriptYT = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [transcript, setTranscript] = useState("");
  const [copied, setCopied] = useState(false);

  // =====================================
  // Get Transcript
  // =====================================

  const handleGetTranscript = async () => {
    setError("");

    if (!youtubeUrl.trim()) {
      setError("Please paste a YouTube URL.");
      return;
    }

    setLoading(true);

    try {
      const apiBaseUrl =
        import.meta.env.VITE_API_URL ||
        (window.location.hostname === "localhost"
          ? "http://localhost:5000"
          : "");

      const response = await fetch(
        `${apiBaseUrl ? `${apiBaseUrl}/api/transcript` : "/api/transcript"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: youtubeUrl,
          }),
        }
      );

      const responseText = await response.text();
      let data = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch (parseError) {
          console.error("Invalid JSON response from transcript API:", parseError);
          throw new Error(
            "The transcript API is unavailable or returned an invalid response."
          );
        }
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Transcript could not be fetched."
        );
      }

      setVideoId(data.videoId);
      setTranscript(data.transcript);
      setShowResult(true);

      setTimeout(() => {
        document
          .getElementById("transcript-result")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    } catch (error) {
      console.error(error);

      setError(
        error.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // Copy Transcript
  // =====================================

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcript);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  // =====================================
  // Back To Top
  // =====================================

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================================= */}
      {/* SEO */}
      {/* ================================= */}

      <Helmet>
        <title>
          Free YouTube Transcript Generator – Convert YouTube Videos to Text
        </title>

        <meta
          name="description"
          content="Generate free YouTube transcripts instantly. Paste a YouTube video URL and get the video transcript as searchable text."
        />

        <meta
          name="keywords"
          content="YouTube Transcript, YouTube Transcript Generator, YouTube to Text, Free YouTube Transcript, YouTube Video to Text, YouTube Subtitle Extractor"
        />

        <link
          rel="canonical"
          href="https://naukriq.me/transcript"
        />
      </Helmet>

      {/* ================================= */}
      {/* MAIN */}
      {/* ================================= */}

      <div className="min-h-screen bg-[radial-gradient(circle_at_15%_15%,#ddd6ff_0%,#aaa0f5_30%,#6654f2_68%,#4f35e8_100%)] px-4 py-6 sm:px-6 lg:px-10">

        <div className="mx-auto w-full max-w-[1100px]">

          {/* ============================= */}
          {/* SEARCH */}
          {/* ============================= */}

          <div
            className={`mx-auto w-full max-w-[1000px] ${
              showResult
                ? "pt-0"
                : "flex min-h-[calc(100vh-48px)] items-start justify-center pt-10 sm:pt-16"
            }`}
          >
            <div className="w-full">

              <div className="rounded-[22px] border border-white/40 bg-white/10 p-3 shadow-lg backdrop-blur-md sm:p-4">

                <div className="flex flex-col gap-3 sm:flex-row">

                  {/* URL INPUT */}

                  <input
                    type="text"
                    value={youtubeUrl}
                    onChange={(e) => {
                      setYoutubeUrl(e.target.value);
                      setError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleGetTranscript();
                      }
                    }}
                    placeholder="Paste YouTube URL here..."
                    className="h-14 flex-1 rounded-xl border border-gray-200 bg-white px-5 text-base text-gray-700 outline-none placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  />

                  {/* BUTTON */}

                  <button
                    onClick={handleGetTranscript}
                    disabled={loading}
                    className="h-14 rounded-xl bg-orange-500 px-7 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading
                      ? "Getting Transcript..."
                      : "Get Free Transcript"}
                  </button>

                </div>

                {/* ERROR */}

                {error && (
                  <p className="px-2 pt-2 text-sm font-medium text-red-200">
                    {error}
                  </p>
                )}

              </div>

            </div>
          </div>

          {/* ============================= */}
          {/* RESULT */}
          {/* ============================= */}

          {showResult && videoId && (
            <section
              id="transcript-result"
              className="mx-auto max-w-[710px] pb-10 pt-10"
            >

              {/* TITLE */}

              <div className="mb-7 text-center">

                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  YouTube Video Transcript
                </h1>

                <p className="mt-3 text-sm text-white">
                  Generate transcript from YouTube video
                </p>

              </div>

              {/* CARD */}

              <div className="rounded-[22px] border border-white/70 bg-white/95 p-4 shadow-2xl sm:p-6">

                {/* VIDEO */}

                <h2 className="mb-5 text-xl font-bold text-gray-900">
                  YouTube Video
                </h2>

                <div className="aspect-video overflow-hidden rounded-[14px] bg-black">

                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />

                </div>

                {/* COPY */}

                <button
                  onClick={handleCopy}
                  className="mt-5 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-green-500 text-base font-semibold text-white transition hover:bg-green-600"
                >
                  <span className="text-xl">
                    ▣
                  </span>

                  {copied ? "Copied!" : "Copy"}
                </button>

                {/* TRANSLATE */}

                <button
                  className="mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-lg border-2 border-orange-400 bg-white text-base font-semibold text-orange-500 transition hover:bg-orange-50"
                >
                  <span className="text-xl">
                    文
                  </span>

                  Translate
                </button>

                {/* TRANSCRIPT */}

                <div className="mt-3 rounded-xl bg-white p-3">

                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    Transcript
                  </h3>

                  <p className="whitespace-pre-line text-[15px] leading-[1.7] text-gray-800 sm:text-[16px]">
                    {transcript}
                  </p>

                </div>

                {/* BACK TO TOP */}

                <button
                  onClick={handleBackToTop}
                  className="mt-4 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-purple-500 text-base font-semibold text-white transition hover:bg-purple-600"
                >
                  <span className="text-xl">
                    ↑
                  </span>

                  Back to Top
                </button>

              </div>

            </section>
          )}

        </div>

      </div>
    </>
  );
};

export default TranscriptYT;