import React from 'react'
import { Typography, Radio, Grid } from '@material-ui/core';
import OptionTable from '../../OptionTable/OptionTable';
import OptionFooter from '../../OptionFooter/OptionFooter';
import './Opt3CreateNew.css';

const Opt3CreateNew = () => {
    return (
        <section className="opt3CreateNewWarper">
            <div className="header">
                <Typography variant="h6" align="center">Select A Dataset</Typography>
            </div>
            <div className="opt3CreateNew">
                <Grid container>
                    <Grid container item xs={12} md={6}>
                        <Typography className="text1" variant="subtitle1">Step 1 - Select A Dataset</Typography>
                        <br />
                        <br />
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={6} className="source">
                                <Radio className="radio" />
                                <Typography variant="subtitle2">Source Option 1</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} className="source">
                                <Radio className="radio" />
                                <Typography variant="subtitle2">Source Option 2</Typography>
                            </Grid>
                        </Grid>
                        <OptionTable xs={10} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography className="text1" variant="subtitle1">Step 1 - Select A Dataset</Typography>
                        <br />
                        <Typography variant="subtitle1" className="text2">
                            Keyword
                        </Typography>
                        <Grid item xs={12}>
                            <Grid item sx={12}>
                                <textarea></textarea>
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle1" className="text2">
                            Time Periods
                        </Typography>
                        <Grid item container xs={12}>
                            <Grid item xs={12} sm={6} className="date">
                                <label>From</label>
                                <input type="date" />
                            </Grid>
                            <Grid item xs={12} sm={6} className="date">
                                <label>To</label>
                                <input type="date" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <OptionFooter />
        </section>
    );
};

export default Opt3CreateNew;
