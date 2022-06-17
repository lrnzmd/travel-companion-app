import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { EventNote, LocationOnOutlined } from '@material-ui/icons'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = ({coordinates}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width: 600px)')


  return (
    <div className={classes.mapContainer}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GG_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onClick={''}
        onChildClick={''}
      >

      </GoogleMapReact> 
    </div>
  )
}

export default Map