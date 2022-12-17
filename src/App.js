// import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/home'
import Web3 from "web3/dist/web3.min";

function App() {
  // // Request account access if needed with useEffect
  // useEffect(() => {
  //   if(window.ethereum) {
  //     window.ethereum.request({ method: 'eth_requestAccounts' })
  //       .then((account) =>console.log(account))
  //   }
  // }, [])

  // Request account access if needed
  const web3 = new Web3(window.ethereum)
  web3.eth.requestAccounts()
    .then(console.log)

  return (
    <Routes>
      <Route
        path='/'
        element={ <Home /> }
      />
      </Routes>
  );
}

export default App;
