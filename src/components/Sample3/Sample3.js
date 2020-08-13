import React from "react";
import BoxLayout from "./BoxLayout/BoxLayout";
import Grid from "@material-ui/core/Grid";

const data = [
  {
    outerlabel: "Section A",
    innerfirsttype: "date",
    innerfirstlabel: "DATE 1",
    innersecondtypetype: "date",
    innersecondlabel: "DATE 2",
  },
  {
    outerlabel: "Section B",
    innerfirstlabel: "TIME 1",
    innersecondlabel: "TIME 2",
    placeholder1:'9:30 AM',
    placeholder2:'9:40 AM',
    multiselectonly:'true',
    // options:[
    //   {time:'11 AM'},
    //   {time: '12PM'}
    // ]
  },
 
  {
    outerlabel: "Section C",
    innerfirstlabel: "TIME 1",
    innersecondlabel: "TIME 2",
    placeholder1:'9:30 AM',
    placeholder2:'9:40 AM',
    multiselectonly:'true',
  },
  {
    outerlabel: "Section D",
    innerfirsttype: "text",
    innerfirstlabel: "PERCENT 1",
    innersecondtypetype: "text",
    innersecondlabel: "PERCENT 2",
    placeholder1:'0.30%',
    placeholder2:'0.40%'

  },
  {
    outerlabel: "Section E",
    innerfirsttype: "text",
    innerfirstlabel: "PERCENT 1",
    innersecondtypetype: "text",
    innersecondlabel: "PERCENT 2",
    placeholder1:'0.60%',
    placeholder2:'0.50%' 
   },
  {
    outerlabel: "Section F",
    innerfirstlabel: "OPTION 1",
    innersecondlabel: "OPTION 2",
    multiselectonly:'true'
   },
  {
    outerlabel: "Section G",
    innerfirstlabel: "OPTION 1",
    innersecondlabel: "OPTION 2",
    multiselectonly:'true'
   },
  {
    outerlabel: "Section H",
    innerfirsttype: "text",
    innerfirstlabel: "PERCENT 1",
    innersecondtypetype: "text",
    innersecondlabel: "PERCENT 2",
    placeholder1:'0.50%',
    placeholder2:'0.10%'  },
  {
    outerlabel: "Section I",
    innerfirsttype: "text",
    innerfirstlabel: "BOX 1",
    innersecondtypetype: "text",
    innersecondlabel: "BOX 2",
    placeholder1:'0.50%',
    placeholder2:'0.80%'  },

];

const sample3 = () => {

    return (
        <React.Fragment>
         <Grid container >
          {data.map((data) => (
              <Grid item xs={12} sm={6}>
                <BoxLayout
                  outerlabel={data.outerlabel}
                  innerfirsttype={data.innerfirsttype}
                  innerfirstlabel={data.innerfirstlabel}
                  innersecondtypetype={data.innersecondtypetype}
                  innersecondlabel={data.innersecondlabel}
                  placeholder1={data.placeholder1}
                  placeholder2={data.placeholder2}
                  multiselectonly={data.multiselectonly}
                  // options={data.options.time}
                />
              </Grid>
             
          ))}
        </Grid>
        </React.Fragment>
      );
   
};

export default sample3;
