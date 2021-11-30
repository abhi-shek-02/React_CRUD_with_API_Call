import React from 'react'
import { deepPurple , green , orange} from '@material-ui/core/colors';
import { Typography, Box , makeStyles ,Grid , TableContainer, Table , TableBody ,TableCell
, TableHead, TableRow , Paper , IconButton , Tooltip , TextField , Button  } from '@material-ui/core';
// import VisibilityIcon from '@material-ui/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Visibility } from '@mui/icons-material';
// import EditIcon from '@material-ui/Edit';
import { Edit } from '@mui/icons-material';
// import DeleteIcon from '@material-ui/Delete';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import { ClassNames } from '@emotion/react';
import  List  from '../student/List';
const useStyle = makeStyles({
    headingColor:{
        backgroundColor:deepPurple[400],
        color:"white"
    },
    addStuColor:{
        backgroundColor: orange[400],
        color:"white"
    },
    stuListColor:{
        backgroundColor:green[400],
        color:"white"
    },
    tableHeadCell:{
         fontWeight:"bold",
         fontSize:16,
        color:"white"
    }
})
const Home = () => {
    const classes = useStyle();
    return (
        <>
            <Box textAlign="center" className={classes.headingColor} p = {2} mb={2}>
                <Typography variant="h2">React CRUD with API Call</Typography>
            </Box>
            <Grid container justify="center" spacing={4}>
                <Grid item md={6} xs={12}>
                <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                    <Typography variant="h4">Add Student</Typography>
                </Box>
                <form noValidate>
                    <Grid container spacing = {2}>
                        <Grid item xs={12} >
                        <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id = "stuname"
                        label="Name" autoFocus />
                        </Grid> 

                        <Grid item xs={12} >
                        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id = "email"
                        label="Email Address"  />
                        </Grid>
                    </Grid>
                    <Box m={1}>
                        <Button type="submit" variant="contained"
                        color="primary" fullWidth>Add</Button>
                    </Box>
                </form>
                </Grid>

                <Grid item md={6} xs={12}>
                <List/>
                </Grid>
              </Grid>
        </>
    )
}

export default Home
