// .co.uk - GBP
// .com - USD
// .de - EUR
// .fr - EUR
// .it - EUR
// .es - EUR
// .co.jp - JPY
// .com.mx - MXN
// .com.br - BRL
// .ca - CAD

// import React from 'react';

const fetch = require('node-fetch');
const CurrencyHelper = function () {
}

CurrencyHelper.prototype.convert = async (domain, convertTo, price) => {
  const domainCurrencies = {
    ".co.uk": "GBP",
    ".com": "USD",
    ".de": "EUR",
    ".fr": "EUR",
    ".it": "EUR",
    ".es": "EUR",
    ".co.jp": "JPY",
    ".com.mx": "MXN",
    ".com.br": "BRL",
    ".ca": "CAD"
  }

  const url = `https://free.currencyconverterapi.com/api/v6/convert?q=${domainCurrencies[domain]}_${convertTo}&compact=ultra`
  const response = await fetch(url);
  const json = await response.json();
  const currencyRating = json[Object.keys(json)[0]];

  console.log(currencyRating * price);
  return currencyRating * price;
  // console.log(currencyRating);
  // return fetch(url)
  //   .then((response) => response.json());
}

module.exports = CurrencyHelper;
// export default CurrencyHelper;