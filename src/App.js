import React,{useEffect} from 'react';
import { login, logout, selectUser} from './features/userSlice';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoginScreen from './components/LoginScreen/LoginScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth){
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email
            })
            
          )
        }else
        {
          dispatch((logout()));
        }
       
      })
      return unsubscribe;
  }, [dispatch]);
  
  return (
    <div className="app">
      {!user ? (<LoginScreen/>) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen/>} />
            <Route exact path="/" element={<HomeScreen/>} />
          </Routes>
       
      </BrowserRouter>
      )
      }
      
      

    </div>
  );
}

export default App;
