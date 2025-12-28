'use client'
import { Box, Button, Typography, Grid } from "@mui/material";
import HeaderText from "./components/header_text";
import SelectActionCard from "./components/cards";
import Preview from "./components/preview";
import React from "react";
import ConfigurationComponent from "./components/configuration";
import LinkIcon from '@mui/icons-material/Link';

export default function Home() {
  const [configuration, setConfiguration] = React.useState<any>({id: 1, icon: <LinkIcon />,title: 'Url'});
  return (
    <div className="bg-[var(--background)] ">
      <Box
        sx={{
          width: '100%',
          p: '2rem',
        }}>
        <HeaderText />
        <Grid container spacing={4}>
          <Grid size={8} sx={{
            pt: '2rem'
          }}>
            <SelectActionCard setConfiguration={setConfiguration}/>
            <ConfigurationComponent configuration={configuration}/> 
          </Grid>
          <Grid size={4}>
            <Preview />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
} 
