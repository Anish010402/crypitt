import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from 'tss-react/mui';


function App() {
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
         </Routes>
      </div>
    </Router> 
    
  );
}

export default App;
