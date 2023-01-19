
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './pages/home-page';
import { RootStateType } from './redux/store';


function App() {

  const authState = useSelector((state:RootStateType)=>{
    return state.auth
  })
  return (
    <>
  <BrowserRouter>   
    <Header/>

    <Routes>
     <Route index element={<HomePage/>} />
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
