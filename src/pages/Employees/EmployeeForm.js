import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/grid';
import Controls from "../../components/controls/Controls";
import { useForm} from '../../components/useForm';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import parse from "date-fns/parse";
import { makeStyles } from "@material-ui/core/styles";
import { validate } from '@material-ui/pickers';

    const initialFValues = {
        id: 0,
        fullName: '',
        email: '',
        phone: '',
        salary: '',
        employeeId: '',
        cpf: '',
        hireDate: new Date(),
    }

let SignupSchema = Yup.object().shape({
    fullName: Yup.string()
                        .required('Nome é obrigatório'),
                    email: Yup.string()
                        .required('Email é obrigatório')    
                        .email('Email invalido'),
                    employeeId: Yup.number()
                        .required('EmployeeId é obrigatório')
                        .typeError('EmployeeId precisa ser um número')
                        .positive()
                        .integer(),
                    cpf: Yup.number()
                        .required('CPF é obrigatório')
                        .typeError('CPF precisa ser um número')
                        .positive()
                        .integer()
                        .min(11),
                    salary: Yup.number()
                        .required('Telefone é obrigatório')
                        .typeError('Salary precisa ser um número')
                        .positive()
                        .integer(),    
                    phone: Yup.string()
                        .required('Telefone é obrigatório'),
                        hireDate: Yup.date()
                        .transform(function (value, originalValue) {
                          if (this.isType(value)) {
                            return value;
                          }
                          const result = parse(originalValue, "MM/dd/yyyy", new Date());
                          return result;
                        })
                        .typeError("please enter a valid date")
                        .required()
  });

  const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        margin: theme.spacing(1)
      },
    Input: {
        marginTop: '16px',
        minWidth: '120%',
    },
}));

export default function EmployeeForm(props) {

    const classes = useStyles();
    const {addEdit,recordForEdit} = props



    const {
        values,
        setValues,
        resetForm,
    } = useForm(true,validate,initialFValues);

    const handleSubmit = e => {
        e.preventDefault()
            addEdit(values, resetForm);
    }

    return (
    <Formik
        initialValues={{initialFValues}}
                validationSchema={SignupSchema}
                > 
                {({ errors, handleChangeInput, touched}) => (        
        <Form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={2} sm={10} >
                <Controls.Input className={classes.Input}
                        name="employeeId"
                        label="EmployeeId"
                        value={values.employeeId}
                        onChange={handleChangeInput}
                        error={errors.employeeId && touched.employeeId}
                    />
                    <Controls.Input className={classes.Input}
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleChangeInput}
                        error={errors.fullName && touched.fullName}
                    />
                    <Controls.Input className={classes.Input}
                        name="cpf"
                        label="CPF"
                        value={values.cpf}
                        onChange={handleChangeInput}
                        error={errors.cpf && touched.cpf}
                    />
                    <Controls.Input className={classes.Input}
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChangeInput}
                        error={errors.email && touched.email}
                    />
                    <Controls.Input className={classes.Input}
                        label="Phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChangeInput}
                        error={errors.phone && touched.phone}
                    />
                    <Controls.Input className={classes.Input}
                        label="Salary"
                        name="salary"
                        value={values.salary}
                        onChange={handleChangeInput}
                        error={errors.salary && touched.salary}
                    />
                </Grid>
                <Grid item xs={2} sm={10} >
                    <Controls.DatePicker className={classes.Input}
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleChangeInput}
                    />
                    <div class="button-form">
                        <Controls.Button className={classes.Input}
                            type="submit"
                            text="Submit" />
                        <Controls.Button className={classes.Input}
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
       )}
    </Formik>
  )
}
