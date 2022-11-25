const EMPTY_HEART = '🤍';
const FULL_HEART = '💖';

const CAT1 =
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/ss_ee0d56a44bfd75006aebd4e2c84c875d68b68647.1920x1080.jpg?t=1666835591';
const CAT2 =
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/ss_3bb48e7309ec845d0a69cef05f901085a4714c53.1920x1080.jpg?t=1666835591';
const CAT3 =
  'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/08/lies-of-p-game-pass-tease-snitch-580x334.jpg';

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = 'https://cataas.com';
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};
