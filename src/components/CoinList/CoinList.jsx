import React from 'react'
import Coin from '../coin/Coin.jsx'

export default function  CoinList (props) {
    
  
return (
    <table className='coin-table'>
    <thead>
        <tr className='coin-row'>
            <th>Name   </th>
            <th>Ticker  </th>
            <th>Price </th>
            {props.showBalance ? <th> Balance</th>:null}
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
      {props.coinData.map(({key,name,ticker,price,balance})=>
        <Coin key={key} 
        showBalance={props.showBalance}
        handleRefresh={props.handleRefresh}
          name={name}
          ticker = {ticker} 
          price = {price} 
          balance = {balance} 
          tickerId={key}/>)}

    </tbody>
  </table>
)
}

