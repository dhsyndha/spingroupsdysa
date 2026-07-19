export function searchReference(topic) {
  const query = encodeURIComponent(topic);

  return [
    {
      name: "Google",
      icon: "🔍",
      url: `https://www.google.com/search?q=${query}`,
    },
    {
      name: "Google Scholar",
      icon: "📄",
      url: `https://scholar.google.com/scholar?q=${query}`,
    },
    {
      name: "YouTube",
      icon: "🎥",
      url: `https://www.youtube.com/results?search_query=${query}`,
    },
    {
      name: "ChatGPT",
      icon: "🤖",
      url: `https://chatgpt.com/?q=${query}`,
    },
    {
      name: "Perplexity",
      icon: "🌐",
      url: `https://www.perplexity.ai/search/new?q=${query}`,
    },
  ];
}