import './Photo.css';
// import '../../App.css'
import Header from './components/Header';
import SectioDesc from './components/SectionDesc';
import SectionLinee from './components/SectionLine';
import SectionMe from './components/SectionMe';
import { Slider } from './components/slide';

import {useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import HeaderBut from './components/HeaderBut';
import NotesList from './components/NoteList';
import Search from './components/Search';
import Form from './components/Form';
import By from './components/By';



function Photo() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is me first note!',
      date: '15/04/2023' 
    },
    {
      id: nanoid(),
      text: 'This is me second note!',
      date: '20/04/2023' 
    },
    {
      id: nanoid(),
      text: 'This is me third note!',
      date: '23/04/2023' 
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '30/04/2023' 
    }
]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);   
    setNotes(newNotes)
  }

  const [searchText, setSearchText] = useState ('');
  const [darkSide, setDarkSide] = useState (false);

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes')
    );  

    if(savedNotes){
      setNotes(savedNotes)
    }
    
  }, []);


  useEffect(()=>{
    localStorage.setItem('react-notes', JSON.stringify(notes))
  }, [notes]);


  return (
    <>
    
    <Header />
    <SectionMe />
    <SectionLinee />
    <SectioDesc />
    <SectionLinee />
    <Slider />
    <SectionLinee />

    <Search  handleSearchNote= {setSearchText} />
        <NotesList 
          notes = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          handleDeleteNote = {deleteNote}
        />


    <SectionLinee />
    <Form />
    <SectionLinee />
    <By />
    
    </>
  );
}

export default Photo;
