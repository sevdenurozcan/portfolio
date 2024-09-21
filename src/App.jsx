import Header from './components/Header';
import './App.css'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './pages/AboutMe';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Provider>
  )
}

export default App
