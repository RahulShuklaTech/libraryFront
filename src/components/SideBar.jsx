import React from 'react'
import CategoryIcon from '@material-ui/icons/Category';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex",
        width: "auto",
        height: "40px",
        marginRight: "20px",
        gap: "1rem",
        alignItems: 'center'
    },
   


}));


export const SideBar = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.item}>
            
            <LibraryBooksIcon /><h3 ><Link to = "/books">Books </Link></h3>
            
            </div>
           
            <div className={classes.item}>
            <CategoryIcon />
                <h3><Link to ="/categories">Categories</Link></h3>
            </div>
            <div className={classes.item}>

             <CardMembershipIcon/>   <h3><Link to = "/members">Members</Link></h3>
            </div>
            <div className={classes.item}>

            <AccountBalanceIcon/> <h3><Link to ="/inventory">Inventory</Link></h3>
            </div>
        </>
    )
}
