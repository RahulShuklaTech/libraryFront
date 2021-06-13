import { Box, Container } from '@material-ui/core';
import React from 'react'
import { useEffect,useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SimpleDialog from './SimpleDialog';


export const Books = () => {
    const getData = async () => {
        const response =  await fetch("http://localhost:3300/books/")
        const data = await response.json();
        setBooks(data);
        setLoading(false)
        
    }

    const [open, setOpen] = React.useState(false);
    const [books, setBooks]  = useState([]);
    const [loading,setLoading] = useState(true);
   
    useEffect(() => {
       
        getData()
        
    }, [])
    
    const handleDelete = index => {
        console.log(books[index])
        setOpen(true);
    }

    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };
    
      const handleClose = (value) => {
        setOpen(false);
      };
    


    if(loading) return <h1>Getting Books</h1>
    return (
        <Container elevation={8} >
            <h1>Books List</h1>
            {
                books?.map((book,index) => <Box key ={index}
                     alignItems="center"
                     flexDirection="row"
                     display="flex"
                     justifyContent="space-between"
                     > <h3>{book.title}</h3>  <DeleteForeverIcon onClick = {() => handleDelete(index)}/> </Box>)
            }
           
            <SimpleDialog open={open} onClose={handleClose} />
        </Container>
    )
}
