import React, { useEffect, useState } from 'react';
import appFirebase from '../firebase/conect.js';
import { getFirestore,collection,getDocs,deleteDoc,doc,where,query } from 'firebase/firestore';
const db=getFirestore(appFirebase)
const useContext = (data) => {
  const [database,setDatabase]=useState([])

  useEffect(()=>{
const getdatabase = async () =>{
  try{
    const q = query(collection(db, "dbimage"), where("name", "==",data));
    const querySnapshot = await getDocs(q)
    const docs=[]
    querySnapshot.forEach((doc)=>{
      docs.push({...doc.data()})
    })
    setDatabase(docs[0].url)
  }catch(error){
    console.log(error)}
}
getdatabase()
},[database,data])
  return {database}
};

export default useContext;