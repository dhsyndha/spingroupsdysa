export function searchReference(topic) {
  const query = encodeURIComponent(topic);

  return [
    {
      name: "Google",
      icon: "🔍",
      url: `https://www.google.com/search?q=${query}`,
    },
    {
      name: "YouTube",
      icon: "📺",
      url: `https://www.youtube.com/results?search_query=${query}`,
    },
    {
      name: "GitHub",
      icon: "💻",
      url: `https://github.com/search?q=${query}`,
    },
    {
      name: "Wikipedia",
      icon: "📚",
      url: `https://en.wikipedia.org/wiki/Special:Search?search=${query}`,
    },
  ];
}