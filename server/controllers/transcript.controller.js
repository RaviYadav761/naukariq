import { fetchTranscript } from "youtube-transcript-plus";

// ======================================
// Get YouTube Video ID
// ======================================

function getYouTubeVideoId(url) {
  try {
    const trimmedUrl = String(url).trim();

    if (!trimmedUrl) {
      return null;
    }

    // Accept direct video id values too
    if (/^[A-Za-z0-9_-]{11}$/.test(trimmedUrl)) {
      return trimmedUrl;
    }

    const parsedUrl = new URL(trimmedUrl);
    const hostname = parsedUrl.hostname.toLowerCase();

    if (
      hostname.includes("youtube.com") ||
      hostname.includes("youtu.be") ||
      hostname.includes("youtube-nocookie.com") ||
      hostname.includes("m.youtube.com")
    ) {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId)) {
        return videoId;
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        return parsedUrl.pathname.split("/shorts/")[1].split("/")[0].split("?")[0];
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/embed/")[1].split("/")[0].split("?")[0];
      }

      if (parsedUrl.pathname.startsWith("/live/")) {
        return parsedUrl.pathname.split("/live/")[1].split("/")[0].split("?")[0];
      }

      if (hostname.includes("youtu.be")) {
        return parsedUrl.pathname.substring(1).split("/")[0].split("?")[0];
      }
    }

    return null;
  } catch (error) {
    return null;
  }
}


// ======================================
// Decode Transcript Text
// ======================================

function cleanTranscriptText(text) {
  if (!text) {
    return "";
  }

  return text
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#160;/g, " ");
}


// ======================================
// Get Transcript
// ======================================

export async function getTranscript(req, res) {
  try {
    const { url } = req.body;

    // Check URL
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "YouTube URL is required.",
      });
    }


    // Get Video ID
    const videoId = getYouTubeVideoId(url);

    if (!videoId) {
      return res.status(400).json({
        success: false,
        message: "Invalid YouTube URL.",
      });
    }


    console.log(
      `Fetching transcript for video: ${videoId}`
    );


    // ======================================
    // Fetch Real YouTube Transcript
    // ======================================

    const result = await fetchTranscript(videoId);


    // Check transcript
    if (!result || result.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Transcript is not available for this video.",
      });
    }


    // ======================================
    // Convert Transcript To Text
    // ======================================

    const transcript = result
      .map((item) => cleanTranscriptText(item.text))
      .join(" ");


    // ======================================
    // Send Response
    // ======================================

    return res.status(200).json({
      success: true,
      videoId: videoId,
      transcript: transcript,
      segments: result,
    });


  } catch (error) {
    console.error(
      "Transcript Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to fetch transcript. This video may not have captions.",
    });
  }
}