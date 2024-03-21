import React from 'react'
import Layout from './../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:'center',
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify"
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.5rem'
          }
        }
        }}>
        <Typography variant='h4'>Welcome To My Resturant</Typography>
          <p>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus
             sit inventore labore iste, libero eveniet impedit illo 
             minima. Autem dolore ipsa, nulla quas adipisci saepe 
             voluptatem maxime, commodi doloribus dignissimos enim eum
              culpa. Repellat eveniet, beatae ad hic, facilis perferendis
               sint rem quae placeat voluptas tempora fugiat corporis 
               sapiente, blanditiis tempore excepturi reiciendis 
               laudantium earum alias cum. Voluptate dolores vel numquam
                facere voluptatibus natus? Ut aliquid dicta eveniet earum,
                 quidem deleniti saepe nemo laboriosam dolorem vero ipsa eum totam ducimus repellendus incidunt dolores culpa qui distinctio minima inventore error! Dolorum, cupiditate modi! Debitis aliquid unde
            fugit corporis molestiae? Aut, esse.
            <br /><br/>
            
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus
             sit inventore labore iste, libero eveniet impedit illo 
             minima. Autem dolore ipsa, nulla quas adipisci saepe 
             voluptatem maxime, commodi doloribus dignissimos enim eum
              culpa. Repellat eveniet, beatae ad hic, facilis perferendis
               sint rem quae placeat voluptas tempora fugiat corporis 
               sapiente, blanditiis tempore excepturi reiciendis 
               laudantium earum alias cum. Voluptate dolores vel numquam
                facere voluptatibus natus? Ut aliquid dicta eveniet earum,
                 quidem deleniti saepe nemo laboriosam dolorem vero ipsa eum totam ducimus repellendus incidunt dolores culpa qui distinctio minima inventore error! Dolorum, cupiditate modi! Debitis aliquid unde
            fugit corporis molestiae? Aut, esse.
            <br/>
            <br/>
            Doloribus
             sit inventore labore iste, libero eveniet impedit illo 
             minima. Autem dolore ipsa, nulla quas adipisci saepe 
             voluptatem maxime, commodi doloribus dignissimos enim eum
              culpa. Repellat eveniet, beatae ad hic, facilis perferendis
               sint rem quae placeat voluptas tempora fugiat corporis 
               sapiente, blanditiis tempore excepturi reiciendis 
               laudantium earum alias cum. 
          </p>
        
      </Box>
    </Layout>
  )
}

export default About
