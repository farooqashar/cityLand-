import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import styles from './app.module.css';

export default function App() {

  return (
    
    <div>

      <Head>
        <title>City Land</title>
      </Head>

      <main>
        
    <Card variant="outlined">

          <CardHeader 
          className = {styles.cardLight}

          avatar={
            <Avatar className = {styles.cardLight} aria-label="">
              CL
            </Avatar>
          } 

          action={
            <IconButton aria-label="City Land">
            </IconButton>
          }
          title="City Land"
          subheader="CL"
        ></CardHeader>

        <CardActionArea>
          <CardContent>

            <Typography className = {styles.cardLarge} variant="h1" component="h2" color="blue" gutterBottom>
                <center>Welcome to City Land</center>        
            </Typography>

            <Typography className = {styles.cardMain} variant="h4" component="h2" color="blue" gutterBottom>
                <center>This is a simple interface for finding basic life information about San Francisco!</center>        
            </Typography>

          </CardContent>
        </CardActionArea>


        <CardActions style={{justifyContent: 'center'}}>

          <Link href={{ pathname: '/cityMain'}}>
            <Button variant="contained" color="primary">City Land</Button>
          </Link>

      </CardActions>

    </Card>

   </main>

    </div>
  )

}
