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

    const deleteBook = async (title) => {
        console.log("funct",title)
        try{
            const action = await fetch("http://localhost:3300/books/"+title,{
                method: 'DELETE',
                
            })

            // const response = await action.json();
            console.log("delete",action)
        }catch(e){
            console.log(e.message)
        }

    }

    const [open, setOpen] = React.useState(false);
    const [books, setBooks]  = useState([]);
    const [loading,setLoading] = useState(true);
    const [deleteConfirmYes,setDeleteConfirmYes] = useState(false)
   
    useEffect(() => {
       
        getData()
        
    }, [])
    
    const handleDelete = async (index) => {
        console.log(books[index])
        setOpen(true);
        if(deleteConfirmYes){
           await deleteBook(books[index].title)
        }else{
            console.log(deleteConfirmYes)
        }
        

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
           
            <SimpleDialog open={open} onClose={handleClose} deleteYes = {setDeleteConfirmYes} />
        </Container>
    )
}
