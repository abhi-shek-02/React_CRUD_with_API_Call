import {orange} from '@material-ui/core/colors';
import { Typography, Box , makeStyles ,Grid , TableContainer, Table , TableBody ,TableCell, TableHead, TableRow ,
 Paper , IconButton , Tooltip , TextField , Button  } from '@material-ui/core';
 const useStyles=makeStyles({
    stuListColor:{
        backgroundColor:orange[400],
        color:"white"
    },
    tableHeadCell:{
         fontWeight:"bold",
         fontSize:16,
        color:"white"
    }
 })
const View = () => {
    const classes = useStyles();
    return (
        <>
          <Box textAlign="center" p={2} className={classes.stuListColor}>
                <Typography variant="h4">Student Details</Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#616161"}}>
                                <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">Krishna</TableCell>
                                <TableCell align="center">Krishna@gmail.com</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>  
                <Box m={3} textAlign="center">
                <Button variant="contained" color="primary">Back To Home</Button>
                </Box>
        </>
    )
}

export default View
