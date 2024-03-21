import React from 'react'
import Layout from './../Components/Layout/Layout'
import { Box,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant='h4'>
          Contact My Restaurants 
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur
           adipisicing elit. Explicabo totam at exercitationem distinctio
            perspiciatis. Illo porro doloribus cupiditate, corporis sint totam 
            assumenda cum praesentium incidunt molestias pariatur maxime minima
            impedit quam? Repellendus magni voluptate cumque, odio sapiente 
            magnam odit expedita. Temporibus, excepturi delectus, magnam,
            provident placeat nam aspernatur soluta facilis ipsam ducimus
            impedit dolorum nihil. suscipit voluptate accusantium!
      
        </p>
      </Box>
      <Box sx={{m:3,width:'600px', ml:10, "@media(max-width:600px)":{
        width:'300px'
      }}}>
        <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>
                    Contact Details
                </TableCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon  sx={{color:'red' ,pt:1}}/>1800-00-0000(tofree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon  sx={{color:'skyblue' ,pt:1}}/>help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon  sx={{color:'green' ,pt:1}}/>7821951770
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
