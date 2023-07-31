'use client'
import React, {useState, useEffect} from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './firebase';

export default function Home() {
  const [items, setItems] = useState([
    {name: 'Coffee', price: 4.95},
    {name: 'Movie Ticket', price: 12.95},
    {name: 'candy', price: 1.99},
  ])
 
const [newItem, setNewItem] = useState({name: '', price: ''})
 const [total, setTotal] = useState(0)

  //Add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.price !== '') {
      setItems([...items, newItem]); // Create a new array with existing items and the new item
      setNewItem({ name: '', price: '' }); // Reset the newItem state for the next entry

      await addDoc(collection(db, 'items'), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem({ name: '', price: ''});
    }
  };
  

  //Read items from databse

  //Delete items from database


  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
       <h1 className='text-4xl p-4 text-center'> Expense Tracker </h1>
       <div className='bg-slate-800 p-4 rounded-r-lg'>
        <form className='grid grid-cols-6 items-center text-black'>
          <input
            value={newItem.name}
            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            className='col-span-3 p-3 border' 
            type='text' placeholder='Enter Item' /> 
          <input 
            value={newItem.price}
            onChange={(e) => setNewItem({...newItem, price: e.target.value})}
            className='col-span-2 p-3 border mx-3' 
            type='number' 
            placeholder='Enter $' /> 
          <button 
          onClick={addItem}
          className='text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl' 
          type='submit'> + </button>
        </form>
        <ul>
          {items.map((item, id) => (
            <li key={id} className='my-4 w-full flex justify-between bg-slate-950'>
              <div className='p-4 w-full flex justify-between'>
                <span className='capitalize'>{item.name}</span>
                <span>${item.price}</span> 
              </div>
              <button className='ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16'> 
                X 
              </button>
            </li>
          ))}
        </ul>
        {items.length < 1 ? ('') : (
          <div className='flex justify-between p-3'>
            <span>Total</span>
            <span>${total}</span>
          </div>
        )}
      </div>
      </div> 
    </main>
  )
}
