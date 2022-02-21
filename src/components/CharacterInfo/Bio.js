import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const Bio = () => {
  return (
    <Box sx={{ margin: "5px", maxWidth: "700px" }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bio
          </Typography>
          <Divider />
          <Typography gutterBottom variant="subtitle" component="div">
            Pokemon Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            intelligence\n' + 'quotient is said\n' + 'to be 5,000.+Its brain can
            out­\n' + 'perform a super­\n' + 'computer.\fIts intelligence\n' +
            'quotient is said\n' + 'to be 5,000.+A POKéMON that can\n' +
            'memorize anything.\n' + 'It never forgets\fwhat it learns--\n' +
            "that's why this\n" + 'POKéMON is smart.+Closing both its\n' + 'eyes
            heightens all\n' + 'its other senses.\fThis enables it to\n' + 'use
            its abilities\n' + 'to their extremes.+Its brain cells\n' +
            'multiply continu­\n' + 'ally until it\fdies. As a result,\n' + 'it
            remembers\n' + 'everything.+It has an IQ of\n' + '5000. It calcu­\n'
            + 'lates many things\fin order to gain\n' + 'the edge in every\n' +
            'battle.+ALAKAZAM’s brain continually grows,\n' + 'making its head
            far too heavy to\n' + 'support with its neck.\fThis POKéMON holds
            its head up using\n' + 'its psychokinetic power instead.+ALAKAZAM’s
            brain continually grows,\n' + 'infinitely multiplying brain
            cells.\n' + 'This amazing brain gives this POKéMON\fan astoundingly
            high IQ of 5,000.\n'
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
