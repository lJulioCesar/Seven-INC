import React, { useState } from 'react'
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        overflowX: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '50px'
    },
    searchInput: {
        width: '75%'
    },
    newButton : {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone' },
    { id: 'salary', label: 'Salary' },
    { id: 'hireDate', label: 'hireDate'},
    { id: 'actions', label:'Actions', disableSorting: true}
]

function createData(
    fullName: string,
    email: string,
    phone: number,
    salary: number,
    hireDate: Date,
  ) {
    return { fullName, email, phone, salary, hireDate };
  }

const data = [
    createData('Júlio César','juliocspm100@gmail.com','(85)999711016','2000','05/09/2022'),
    createData('Gabriela','juliocspm200@gmail.com','(85)998836482','1500','03/10/2019'),
]

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [openPopup,setOpenPopup] = useState (false)
    const [recordForEdit, setRecordsForEdit] = useState(null)
    
    const {
        TblContainer,
        TblHead,
        TblPagination,
    } = useTable(records, headCells);

    const addEdit = () =>{
            setOpenPopup(false)
    }

    const openInPopup = data =>{
        setOpenPopup(true)
    }

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                    />
                    <Controls.Button
                    text = "Add New"
                    variant = "outlined"
                    startIcon = {<AddIcon/>} 
                    className ={classes.newButton}
                    onClick = {() => {setOpenPopup(true);}}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                            {data.map((data) => (
                                (<TableRow key={data.fullName}>
                                    <TableCell>{data.fullName}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.phone}</TableCell>
                                    <TableCell>{data.salary}</TableCell>
                                    <TableCell>{data.hireDate}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                        color="primary" 
                                        onClick = {() => {openInPopup()}}>
                                        <EditOutlinedIcon fontSize="small"/>
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                        color="secondary">
                                        <CloseIcon fontSize="small"/>
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                                ))}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title = "Employee Form"
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                <EmployeeForm recordForEdit={recordForEdit} addEdit={addEdit}/>
            </Popup>
        </>
    )
}
