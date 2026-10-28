const LIVE_FEED =
  "https://endearing-profiterole-e5ace9.netlify.app/.netlify/functions/recent-track";

export async function handler() {
  const key = process.env.LASTFM_KEY;

  if (!key) {
    return proxyLiveFeed();
  }

  const user = "ill_pill";
  const baseURL =
    "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks";
  const url = `${baseURL}&user=${user}&api_key=${key}&format=json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to fetch from Last.fm" }),
      };
    }

    const result = await response.json();
    const track = result.recenttracks.track[0];

    const data = {
      isPlaying: track["@attr"]?.nowplaying === "true",
      title: track.name,
      artist: track.artist["#text"],
      coverArt: track.image?.[1]?.["#text"] || "",
      playedAt: track.date?.uts || null,
      url: track.url,
    };

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}

async function proxyLiveFeed() {
  try {
    const response = await fetch(LIVE_FEED);
    const body = await response.text();

    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json" },
      body,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
