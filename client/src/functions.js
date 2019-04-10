import overrideData from "./assets/coin_override.json";

export const mergeList = (a, b) => {
  let filtered = [];

  a.map(coin => {
    b.map(coin2 => {
      if (coin2.Symbol === coin.symbol) {
        coin.ImageUrl = coin2.ImageUrl;
        filtered.push(coin);
      }
      return "";
    });
    return "";
  });

  return filtered;
};

export const filterList = (list, rule) => {
  let filteredList = list.filter(val => {
    if (
      val.name.toLowerCase().slice(0, rule.length) === rule.toLowerCase() ||
      val.symbol.toLowerCase().slice(0, rule.length) === rule.toLowerCase()
    ) {
      return val;
    }
    return "";
  });
  return filteredList;
};

// Finds Best Exchange for Each Coin
export const findExchange = (tradingViewExchanges, coinExchanges) => {
  if (tradingViewExchanges == "none" || coinExchanges == "none") {
    return "";
  }
  let commonExchanges = [];
  let bestExchange = "";

  coinExchanges.map(current => {
    if (tradingViewExchanges.includes(current.MARKET)) {
      commonExchanges.push(current.MARKET);
    }
  });

  if (commonExchanges.includes("Binance")) {
    bestExchange = "Binance";
  } else if (commonExchanges.includes("Bitfinex")) {
    bestExchange = "Bitfinex";
  } else if (commonExchanges.includes("BitTrex")) {
    bestExchange = "Bittrex";
  } else if (commonExchanges.includes("Poloniex")) {
    bestExchange = "Poloniex";
  } else {
    bestExchange = commonExchanges[0];
  }

  return bestExchange;
};

// Updated Window Dimensions
export const updateDimensions = e => {
  var w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName("body")[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
    height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
  e.setState({ width: width, height: height });
};

export const getBio = description => {
  var element = document.createElement("div");
  element.innerHTML = description;

  //  descendents = ancestor.getElementsByTagName('*');

  let divChildren = element.childNodes;
  let bio = divChildren;

  var l = []; // Will hold the array of Node's
  for (var i = 0, ll = bio.length; i != ll; l.push(bio[i++]));
  let realBio = l.map(current => {
    return current.innerText;
  });

  return realBio;
};

// Checks Override Data
export const getOverrideData = symbol => {
  let coins = overrideData.coins;
  for (let coin in coins) {
    if (coin === symbol) {
      return coins[coin];
    }
  }
  return "No Info Found!";
};
