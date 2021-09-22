import React, { Component } from 'react'
import GaloreDrawer from "../util/GaloreDrawer"
import Grid from "@material-ui/core/Grid";

class news extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={3}>
              <Grid item xs={12}>
                  <GaloreDrawer/>
              </Grid> 
              <Grid item xs={12}>
                  <h1>News </h1>
              </Grid> 
             
             </Grid>
            </div>
        )
    }
}

export default news