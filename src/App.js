
import './App.css';
import CoinList from './components/CoinList/CoinList.jsx'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header.jsx';
import axios from 'axios';
import AccountBalance from './components/AccountBalance/AccountBalance.jsx'

const coinsToBeDisplayed=10;
const formatPrice = price => price.toFixed(2);
function App (props) {

  const  [balance, setBalance] = useState(10000);
  const [showBalance, setShowbalance]=  useState(true);
  const [coinData, setCoinData]= useState([]);

  const componentDidMount = async () => {                                 
    let response = await axios.get ('https://api.coinpaprika.com/v1/coins');
     const coinIds=response.data.slice(0,coinsToBeDisplayed).map(coin =>coin.id);
     const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
     const promises = coinIds.map(id => axios.get(tickerUrl + id));       // the map method returns an array, so the promises variable holds an array of urls , which we will pass to the Promises.all()
     const coinData = await Promise.all(promises);
     const coinPricesData = coinData.map( function (response)  {
       let coin=response.data;
         return {
             key:coin.id,
             name: coin.name,
             ticker:coin.symbol,
             balance:0,
             price:formatPrice(coin.quotes.USD.price),
 
         };
 
     });
     
     setCoinData(coinPricesData);
   
 }

  useEffect(function () {
    if (coinData.length ==0) {
      componentDidMount ();
       // if the coindata array is empty, it means that we are in the componentDidmount stage
    }
  });




  
    // upon mounting the component, we fetch all the coins from Coinpaprika's API via axios's get method. Since axios does not require a json()method to the response object, but requires .data, we create  a constant equal to response.data.slice (we want the array of object to be limited to the coinsToBeDisplayed variable)

 /* what we did  in componentDidMount -
  1. We got  all the coins from the coins API of coinpaprika. 
 2. We received an array of objects  which we bindend to the coinIds variable and then sliced up to the top 10 coins and out of every coin in the array, we got only the coin ID via the map function
 3.  then we cretaed an array of promises which we passed to the promiseall method, in order to get the ticker links for every coin
 
 */

 const addBalance=() => {
    setBalance(oldvalue=>oldvalue+1200)
 }

  const hideBalance= () => {
  setShowbalance(oldValue=>!oldValue);
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice=formatPrice(response.data.quotes.USD.price);
    const newCoinData= coinData.map(function(values){
      let newValues = {...values};
      
      if (valueChangeId === values.key ){
        newValues.price=newPrice;
      }
      return newValues;   
    });
  
    setCoinData(newCoinData);
  }

  return (
    <div className="App">
      <Header/>
      <AccountBalance amount={balance} addBalance={addBalance}  showBalance={showBalance} hideBalance={hideBalance}/>
      <CoinList coinData={coinData} handleRefresh={handleRefresh} showBalance={showBalance}/>
    </div>
  );



};
export default App;
