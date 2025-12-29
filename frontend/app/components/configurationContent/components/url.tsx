'use client'
import { Box, TextField, Typography } from "@mui/material"
import React from "react"
import { InputAdornment } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

export default function UrlConfiguration() {
  return (
    <Box display="flex" flexDirection="column" gap={2} 
      sx={{
        p: '1rem'
      }}
      >
      <Typography sx={{
        fontWeight: '600',
        color: 'var(--text)',
      }}>Enter URL <span className="text-[var(--primary)]">*</span></Typography>
      <TextField
        variant="outlined"
        placeholder="https://example.com"
        sx={{
          bgcolor: '#0F0F0F',
          borderRadius: '.5rem',

          // text color
          '& input': {
            color: 'white',
          },

          // placeholder
          '& input::placeholder': {
            color: 'grey',
            opacity: 1, // MUI sets opacity by default
          },

          // hover border
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--primary)', // change this color to whatever you want
            borderRadius: '.5rem'
          },          

          // focused border
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--primary)',
            borderRadius: '.5rem'
          },

          '& .MuiOutlinedInput-root.Mui-focused .MuiSvgIcon-root': {
            color: 'var(--primary)',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkIcon sx={{ color: 'var(--muted-text)' }} />
            </InputAdornment>
          ),
        }}       
      /> 
    </Box>
  )
}
