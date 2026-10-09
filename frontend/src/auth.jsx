import {createContext,useContext,useState,useEffect} from 'react';
import {api} from './api';
const AuthContext=createContext();
export function AuthProvider({children}){const [user,setUser]=useState(null),[loading,setLoading]=useState(true);useEffect(()=>{const expired=()=>{localStorage.removeItem('skillsetu.token');setUser(null);};window.addEventListener('skillsetu:expired',expired);if(localStorage.getItem('skillsetu.token'))api('/auth/me').then(setUser).catch(expired).finally(()=>setLoading(false));else setLoading(false);return()=>window.removeEventListener('skillsetu:expired',expired);},[]);const signIn=data=>{localStorage.setItem('skillsetu.token',data.token);setUser(data.user);};const logout=async()=>{try{await api('/auth/logout',{method:'POST'});}finally{localStorage.removeItem('skillsetu.token');setUser(null);}};return <AuthContext.Provider value={{user,loading,signIn,logout}}>{children}</AuthContext.Provider>;}
export const useAuth=()=>useContext(AuthContext);
