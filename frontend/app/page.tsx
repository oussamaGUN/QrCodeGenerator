'use client'
import { Box, Button, Typography, Grid } from "@mui/material";
import HeaderText from "./components/header_text";
import SelectActionCard from "./components/cards";
import Preview from "./components/preview";

export default function Home() {
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
            <SelectActionCard />
              <Box sx={{
                mt: '1rem',
                bgcolor: 'violet',
                width: '100%',
                height: '60vh'
              }}>
              </Box>
          </Grid>
          <Grid size={4}>
            <Preview />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
} 
