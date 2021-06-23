const quotes = [
  {
    quote: "To infinity, and beyond!",
    movie: "Toy-story",
  },
  {
    quote:
      "The happiest man on earth would look into the mirror and see only himself exactly as he is. ",
    movie: "Harry Potter",
  },
  {
    quote: "Sometimes the right path is not the easiest one ",
    movie: "Pocahontas",
  },
  {
    quote: "Remember, you are the one who can fill the world with sunshine",
    movie: "Snow white",
  },
  {
    quote: "Some people are worth melting for",
    movie: "Frozen 2",
  },
  {
    quote:
      "If you don't know where you want to go, then it doesn't matter which path you take.",
    movie: "Alice in the wonderland",
  },
  { quote: "To make each day count", movie: "Titanic" },
  {
    quote: "Knowing is the easy part, saying it out loud is the hard part",
    movie: "Laboum",
  },
  {
    quote:
      "When you do decide to try it, it won't be any good. You shold take a chance. Got nothing to lose",
    movie: "Home Alone",
  },
  {
    quote:
      "The past can hurt. But the way i see it, you can either run from it or learn from it",
    movie: "Lion King",
  },
];

// "#quote span:first-child" 에서 :과 first 뒤에 띄어쓰기 금지
const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

// random함수로 숫자를 뽑아내는데 소숫점이 출력됨. 따라서 floor로 내림을 해줌
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
movie.innerText = todayQuote.movie;
