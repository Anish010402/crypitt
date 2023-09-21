import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from 'tss-react/mui';
import Alert from './Components/Alert';
import Buy from './Components/Buy';


function App() {

const fetchData =()=>{
  console.log("clicked");
}

  const useStyles = makeStyles()(() => ({
    App: {
      backgroundColor: '#14161a',
      color: "white",
      minHeight: "100vh",
    },
  })); 
  
  const { classes } = useStyles()

  return (
    <Router>
       <div className={classes.App}>
       <Header />
         <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/coins/:id' element={<CoinPage/>} />
          <Route path="/https://www.binance.com/en-IN/buy-sell-crypto" element={<Buy/>} />
          
         </Routes>
      </div>
      
      <Alert />
    </Router> 
    
  );
}

export default App;
