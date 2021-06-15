import { Box, Container,Paper,makeStyles } from '@material-ui/core';
import React from 'react'
import { useEffect,useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SimpleDialog from './SimpleDialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

let indexToDelete = null
export const Books = () => {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            flexDirection : "column",
            gap: '1rem',
            padding: '1rem',
            width: "50rem",
            margin: "10px auto"
            
        },
        
    })
    

    const getData = async () => {

        const response =  await axios.get("http://localhost:3300/books/")//fetch("http://localhost:3300/books/")
        const data = await response.json();
        setBooks(data);
        setLoading(false)
        
        
    }

    const deleteBook = async (title) => {
        console.log("funct",title)
        try{
            
            await fetch("http://localhost:3300/books/"+title,{
                method: 'DELETE',
                
            })

            // const response = await action.json();
            return true
        }catch(e){
            console.log(e.message)
        }
        return false

    }

    const [open, setOpen] = React.useState(false);
    const [books, setBooks]  = useState([]);
    const [loading,setLoading] = useState(true);
    
    let classes = useStyles(); 
   
    useEffect(() => {
       
        getData()
        
    }, [])

    const handleConfirmDelete = async () => {
        let reply = await deleteBook(books[indexToDelete].title);

        if(reply){
            let newBooks = [...books];
            newBooks.splice(indexToDelete,1);
            setBooks(newBooks)
        }
        
    }
    
    const handleDelete =  (index) => {
        
        setOpen(true);
        indexToDelete = index;
        console.log(indexToDelete,index)
    }
   
    
      const handleClose = (value) => {
        setOpen(false);
      };
    


    if(loading) return <div><h1>Getting Books</h1><CircularProgress /></div>
    return (
        
        <Container elevation={8} >
            <Paper className = {classes.container} elevation ={3} >
            <h1>Books List</h1>
            {
                books?.map((book,index) => <Box key ={index}
                     alignItems="center"
                     flexDirection="row"
                     display="flex"
                     justifyContent="space-between"
                     > <h3>{book.title}</h3>  <div className="delete-button"><DeleteForeverIcon onClick = {() => handleDelete(index)}/></div> </Box>)
            }
           
            <SimpleDialog open={open} onClose={handleClose} deleteYes = {handleConfirmDelete} />
            </Paper>
        </Container>
    )
}
