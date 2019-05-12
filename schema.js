const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLUnionType,
  GraphQLScalarType
} = require("graphql");
const axios = require("axios");

const myCustomScalarType = new GraphQLScalarType({
  name: "MyCustomScalar",
  description: "Description of my custom scalar type",
  serialize(value) {
    let result;
    console.log("value 1:", value);
    if (value === "") {
      result = 0;
    } else {
      result = value;
    }
    // Implement your own behavior here by setting the 'result' variable
    return result;
  },
  parseValue(value) {
    let result;
    if (value === "") {
      result = 0;
    } else {
      result = value;
    }

    // Implement your own behavior here by setting the 'result' variable
    return result;
  },
  parseLiteral(ast) {
    console.log("ast :", ast);
    switch (
      ast.kind

      // Implement your own behavior here by returning what suits your needs
      // depending on ast.kind
    ) {
    }
  }
});

var ValueType = new GraphQLUnionType({
  name: "Value",
  types: [GraphQLString, GraphQLFloat],
  resolveType(value) {
    console.log("calue :", value);
  }
});

// coinMarketCap Type
const coinMarketCapType = new GraphQLObjectType({
  name: "coinMarketCap",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    symbol: { type: GraphQLString },
    rank: { type: GraphQLInt },
    price_usd: { type: GraphQLFloat },
    price_btc: { type: GraphQLFloat },
    market_cap_usd: { type: GraphQLFloat },
    available_supply: { type: GraphQLFloat },
    total_supply: { type: GraphQLFloat },
    max_supply: { type: GraphQLFloat },
    volume: { type: GraphQLFloat },
    percent_change_1h: { type: GraphQLFloat },
    percent_change_24h: { type: GraphQLFloat },
    percent_change_7d: { type: GraphQLFloat },
    last_updated: { type: GraphQLInt }
  })
});

// coinMarketCapGlobal Type
const coinMarketCapGlobalType = new GraphQLObjectType({
  name: "coinMarketCapGlobal",
  fields: () => ({
    total_market_cap_usd: { type: GraphQLFloat },
    total_24h_volume_usd: { type: GraphQLFloat },
    bitcoin_percentage_of_market_cap: { type: GraphQLFloat },
    active_currencies: { type: GraphQLInt },
    active_assets: { type: GraphQLInt },
    active_markets: { type: GraphQLInt },
    last_updated: { type: GraphQLInt }
  })
});

// cryptoCompare Type
const cryptoCompareType = new GraphQLObjectType({
  name: "cryptoCompare",
  fields: () => ({
    Id: { type: GraphQLString },
    Url: { type: GraphQLString },
    ImageUrl: { type: GraphQLString },
    Name: { type: GraphQLString },
    Symbol: { type: GraphQLString },
    CoinName: { type: GraphQLString },
    FullName: { type: GraphQLString },
    Algorithm: { type: GraphQLString },
    ProofType: { type: GraphQLString },
    FullyPremined: { type: GraphQLInt },
    TotalCoinSupply: { type: GraphQLInt },
    BuiltOn: { type: GraphQLString },
    SmartContractAddress: { type: GraphQLString },
    PreMinedValue: { type: GraphQLFloat },
    TotalCoinsFreeFloat: { type: GraphQLFloat },
    SortOrder: { type: GraphQLInt },
    Sponsored: { type: GraphQLString },
    IsTrading: { type: GraphQLBoolean },
    TotalCoinsMined: { type: GraphQLFloat },
    BlockNumber: { type: GraphQLFloat },
    NetHashesPerSecond: { type: GraphQLFloat },
    BlockReward: { type: GraphQLFloat },
    BlockTime: { type: GraphQLFloat }
  })
});

// CoinSnap Type
const CoinSnapType = new GraphQLObjectType({
  name: "coinSnap",
  fields: () => ({
    CoinInfo: { type: CryptoCompareCoinInfoType },
    AggregatedData: { type: CryptoCompareAggregatedDataType },
    Exchanges: { type: new GraphQLList(ExchangeDataType) }
  })
});

// SocialInfo Type
const CryptoCompareSocialInfoType = new GraphQLObjectType({
  name: "cryptoCompareCoinInfo",
  fields: () => ({
    Id: { type: GraphQLString },
    Name: { type: GraphQLString },
    FullName: { type: GraphQLString },
    Internal: { type: GraphQLString },
    ImageUrl: { type: GraphQLString },
    Url: { type: GraphQLString },
    Algorithm: { type: GraphQLString },
    ProofType: { type: GraphQLString },
    TotalCoinsMined: { type: GraphQLFloat },
    BlockNumber: { type: GraphQLFloat },
    NetHashesPerSecond: { type: GraphQLFloat },
    BlockReward: { type: GraphQLFloat },
    BlockTime: { type: GraphQLFloat },
    TotalVolume24H: { type: GraphQLFloat }
  })
});
// CoinInfo Type
const CryptoCompareCoinInfoType = new GraphQLObjectType({
  name: "cryptoCompareCoinInfo",
  fields: () => ({
    Id: { type: GraphQLString },
    Name: { type: GraphQLString },
    FullName: { type: GraphQLString },
    Internal: { type: GraphQLString },
    ImageUrl: { type: GraphQLString },
    Url: { type: GraphQLString },
    Algorithm: { type: GraphQLString },
    ProofType: { type: GraphQLString },
    TotalCoinsMined: { type: GraphQLFloat },
    BlockNumber: { type: GraphQLFloat },
    NetHashesPerSecond: { type: GraphQLFloat },
    BlockReward: { type: GraphQLFloat },
    BlockTime: { type: GraphQLFloat },
    TotalVolume24H: { type: GraphQLFloat }
  })
});

// AggregatedData Type
const CryptoCompareAggregatedDataType = new GraphQLObjectType({
  name: "cryptoCompareAggregatedData",
  fields: () => ({
    TYPE: { type: GraphQLInt },
    MARKET: { type: GraphQLString },
    FROMSYMBOL: { type: GraphQLString },
    TOSYMBOL: { type: GraphQLString },
    FLAGS: { type: GraphQLInt },
    PRICE: { type: GraphQLFloat },
    LASTUPDATE: { type: GraphQLFloat },
    LASTVOLUME: { type: GraphQLFloat },
    LASTVOLUMETO: { type: GraphQLFloat },
    LASTTRADEID: { type: GraphQLInt },
    VOLUMEDAY: { type: GraphQLFloat },
    VOLUMEDAYTO: { type: GraphQLFloat },
    VOLUME24HOUR: { type: GraphQLFloat },
    VOLUME24HOURTO: { type: GraphQLFloat },
    OPENDAY: { type: GraphQLFloat },
    HIGHDAY: { type: GraphQLFloat },
    LOWDAY: { type: GraphQLFloat },
    OPEN24HOUR: { type: GraphQLFloat },
    HIGH24HOUR: { type: GraphQLFloat },
    LOW24HOUR: { type: GraphQLFloat },
    LASTMARKET: { type: GraphQLString },
    VOLUMEHOUR: { type: GraphQLFloat },
    VOLUMEHOURTO: { type: GraphQLFloat },
    OPENHOUR: { type: GraphQLFloat },
    HIGHHOUR: { type: GraphQLFloat },
    LOWHOUR: { type: GraphQLFloat },
    CHANGE24HOUR: { type: GraphQLFloat },
    CHANGEPCT24HOUR: { type: GraphQLFloat },
    CHANGEDAY: { type: GraphQLFloat },
    CHANGEPCTDAY: { type: GraphQLFloat }
  })
});

// ExchangeData Type
const ExchangeDataType = new GraphQLObjectType({
  name: "exchangeData",
  fields: () => ({
    TYPE: { type: GraphQLInt },
    MARKET: { type: GraphQLString },
    FROMSYMBOL: { type: GraphQLString },
    TOSYMBOL: { type: GraphQLString },
    FLAGS: { type: GraphQLInt },
    PRICE: { type: GraphQLFloat },
    LASTUPDATE: { type: GraphQLFloat },
    LASTVOLUME: { type: GraphQLFloat },
    LASTVOLUMETO: { type: GraphQLFloat },
    LASTTRADEID: { type: GraphQLString },
    VOLUME24HOUR: { type: GraphQLFloat },
    VOLUME24HOURTO: { type: GraphQLFloat },
    OPEN24HOUR: { type: GraphQLFloat },
    HIGH24HOUR: { type: GraphQLFloat },
    LOW24HOUR: { type: GraphQLFloat },
    CHANGE24HOUR: { type: GraphQLFloat },
    CHANGEPCT24HOUR: { type: GraphQLFloat },
    CHANGEDAY: { type: GraphQLFloat },
    CHANGEPCTDAY: { type: GraphQLFloat },
    SUPPLY: { type: GraphQLFloat },
    MKTCAP: { type: GraphQLFloat },
    TOTALVOLUME24H: { type: GraphQLFloat },
    TOTALVOLUME24HTO: { type: GraphQLFloat }
  })
});

// Twitter Type
const TwitterType = new GraphQLObjectType({
  name: "twitter",
  fields: () => ({
    account_creation: { type: GraphQLInt },
    lists: { type: GraphQLInt },
    link: { type: GraphQLString },
    favourites: { type: GraphQLInt },
    name: { type: GraphQLString },
    following: { type: GraphQLInt },
    statuses: { type: GraphQLInt },
    followers: { type: GraphQLInt },
    Points: { type: GraphQLInt }
  })
});

// Reddit Type
const RedditType = new GraphQLObjectType({
  name: "reddit",
  fields: () => ({
    active_users: { type: GraphQLInt },
    posts_per_hour: { type: GraphQLFloat },
    comments_per_hour: { type: GraphQLFloat },
    subscribers: { type: GraphQLInt },
    link: { type: GraphQLString },
    name: { type: GraphQLString },
    community_creation: { type: GraphQLInt },
    posts_per_day: { type: GraphQLFloat },
    comments_per_day: { type: GraphQLFloat },
    Points: { type: GraphQLInt }
  })
});

// Facebook Type
const FacebookType = new GraphQLObjectType({
  name: "facebook",
  fields: () => ({
    link: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

// Github Type
const GithubType = new GraphQLObjectType({
  name: "github",
  fields: () => ({
    closed_issues: { type: GraphQLInt },
    size: { type: GraphQLInt },
    open_pull_issues: { type: GraphQLInt },
    fork: { type: GraphQLBoolean },
    closed_pull_issues: { type: GraphQLInt },
    created_at: { type: GraphQLInt },
    forks: { type: GraphQLInt },
    subscribers: { type: GraphQLInt },
    stars: { type: GraphQLInt },
    last_update: { type: GraphQLInt },
    closed_total_issues: { type: GraphQLInt },
    open_total_issues: { type: GraphQLInt },
    last_push: { type: GraphQLInt },
    open_issues: { type: GraphQLInt },
    url: { type: GraphQLString },
    language: { type: GraphQLString }
  })
});

const RepoListType = new GraphQLObjectType({
  name: "list",
  fields: () => ({
    List: { type: new GraphQLList(GithubType) }
  })
});

// SocialSnap Type
const SocialSnapType = new GraphQLObjectType({
  name: "socialSnap",
  fields: () => ({
    Twitter: { type: TwitterType },
    Facebook: { type: FacebookType },
    Reddit: { type: RedditType },
    CodeRepository: { type: RepoListType }
  })
});

// CryptoNews Type
const CryptoNewsType = new GraphQLObjectType({
  name: "cryptoNews",
  fields: () => ({
    id: { type: GraphQLString },
    guid: { type: GraphQLString },
    published_on: { type: GraphQLInt },
    imageurl: { type: GraphQLString },
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    source: { type: GraphQLString },
    body: { type: GraphQLString },
    tags: { type: GraphQLString },
    categories: { type: GraphQLString },
    upvotes: { type: GraphQLString },
    downvotes: { type: GraphQLString },
    lang: { type: GraphQLString },
    source_info: { type: SourceInfoType }
  })
});

// CryptoNews Type
const SourceInfoType = new GraphQLObjectType({
  name: "source_info",
  fields: () => ({
    name: { type: GraphQLString },
    lang: { type: GraphQLString },
    img: { type: GraphQLString }
  })
});
// CoinSnapFull Type
const CoinSnapFullType = new GraphQLObjectType({
  name: "coinSnapFull",
  fields: () => ({
    Algorithm: { type: GraphQLString },
    BlockNumber: { type: myCustomScalarType },
    BlockReward: { type: myCustomScalarType },
    BlockTime: { type: GraphQLInt },
    Description: { type: GraphQLString },
    DifficultyAdjustment: { type: GraphQLString },
    Features: { type: GraphQLString },
    ImageUrl: { type: GraphQLString },
    LastBlockExplorerUpdateTS: { type: GraphQLInt },
    Name: { type: GraphQLString },
    NetHashesPerSecond: { type: GraphQLString },
    PreviousTotalCoinsMined: { type: GraphQLString },
    ProofType: { type: GraphQLString },
    StartDate: { type: GraphQLString },
    Symbol: { type: GraphQLString },
    Technology: { type: GraphQLString },
    TotalCoinSupply: { type: GraphQLString },
    TotalCoinsMined: { type: myCustomScalarType },
    Twitter: { type: GraphQLString },
    Website: { type: GraphQLString },
    WebsiteUrl: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    coinMarketCap: {
      type: new GraphQLList(coinMarketCapType),
      resolve(parent, args) {
        return axios
          .get("https://api.coinmarketcap.com/v1/ticker/?start=0&limit=10000")
          .then(res => {
            res.data.map(v => {
              v.volume = v["24h_volume_usd"];
            });
            return res.data;
          });
      }
    },
    coinMarketCapGlobal: {
      type: coinMarketCapGlobalType,
      resolve(parent, args) {
        return axios
          .get("https://api.coinmarketcap.com/v1/global/")
          .then(res => res.data);
      }
    },
    cryptoCompare: {
      type: new GraphQLList(cryptoCompareType),
      resolve(parent, args) {
        return axios
          .get("https://min-api.cryptocompare.com/data/all/coinlist")
          .then(res => {
            let data = [];
            Object.keys(res.data.Data).forEach(key => {
              data.push(res.data.Data[key]);
            });

            return data;
          });
      }
    },
    coinSnap: {
      type: CoinSnapType,
      args: { symbol: { type: GraphQLString } },
      resolve(parent, args) {
        let coinPath =
          "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=" +
          args.symbol +
          "&tsym=BTC";
        if (args.symbol == "BTC") {
          coinPath =
            "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=" +
            args.symbol +
            "&tsym=USDT";
        }

        return axios.get(coinPath).then(res => {
          return res.data.Data;
        });
      }
    },
    cryptoNews: {
      type: new GraphQLList(CryptoNewsType),
      resolve(parent, args) {
        return axios
          .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
          .then(res => {
            let data = [];
            Object.keys(res.data.Data).forEach(key => {
              data.push(res.data.Data[key]);
            });
            return data;
          });
      }
    },
    socialSnap: {
      type: SocialSnapType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return axios
          .get(
            "https://www.cryptocompare.com/api/data/socialstats/?id=" + args.id
          )
          .then(res => res.data.Data);
      }
    },
    coinSnapFull: {
      type: CoinSnapFullType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        if (!args.id) {
          return "no valid Id";
        }
        return axios
          .get(
            `https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${
              args.id
            }`
          )
          .then(res => {
            return res.data.Data.General;
          });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
