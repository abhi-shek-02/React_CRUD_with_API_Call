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
const List = () => {
    const classes = useStyle();
    return (
        <>
          <Box textAlign="center" p={2} className={classes.stuListColor}>
                <Typography variant="h4">Student List</Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#616161"}}>
                                <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">Krishna</TableCell>
                                <TableCell align="center">Krishna@gmail.com</TableCell>
                                <TableCell align="center">
                                    <Tooltip title="view">
                                        <IconButton><Link to="/view/1"> <VisibilityIcon color="primary"></VisibilityIcon></Link></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit">
                                        <IconButton><Link to="/edit/1"> <EditIcon/></Link></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton><DeleteIcon color="secondary"/></IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>  
        </>
    )
}

export default List
