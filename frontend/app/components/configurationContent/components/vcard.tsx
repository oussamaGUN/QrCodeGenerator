'use client'
import { Box, TextField, Typography, Grid  } from "@mui/material"
import React from "react"
import { InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneConfiguration from "./phone";
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
export default function VCardConfiguration() {
  return (
    <Box sx={{ p: '1rem' }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>First Name<span className="text-[var(--required-star)] pl-1">*</span></Typography>
          <TextField
            variant="outlined"
            placeholder="John"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <PersonIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          /> 
        </Grid>

        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>Last Name<span className="text-[var(--required-star)] pl-1">*</span></Typography>
          <TextField
            variant="outlined"
            placeholder="Doe"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <PersonIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          /> 
        </Grid>
        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>Phone Number</Typography>
          <TextField
            type="tel"
            name="tel"
            variant="outlined"
            placeholder="+ 212 666666666"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <LocalPhoneIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          /> 
        </Grid>
        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>Email</Typography>
          <TextField
            type='email'
            name='email'
            autoComplete="email"
            variant="outlined"
            placeholder="john@gmail.com"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <EmailIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          /> 
        </Grid>
        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>Company</Typography>
          <TextField
            variant="outlined"
            placeholder="Company Name"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <BusinessIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          /> 
        </Grid>
        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>Job Title</Typography>
          <TextField
            variant="outlined"
            placeholder="Position"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <WorkIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          /> 
        </Grid>
        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>Website</Typography>
          <TextField
            type="url"
            name="url"
            variant="outlined"
            placeholder="https://example.com"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <LanguageIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          /> 
        </Grid>
        <Grid size={6}>
          <Typography sx={{
            fontWeight: '600',
            color: 'var(--text)',
          }}>Addres</Typography>
          <TextField
            variant="outlined"
            placeholder="Street, City, Country"
            sx={{
              bgcolor: '#0F0F0F',
              borderRadius: '.5rem',
              width: '100%',
              mt: '1rem',

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
                  <LocationOnIcon sx={{ color: 'var(--muted-text)' }} />
                </InputAdornment>
              ),
            }}       
          />
        </Grid>
      </Grid>
    </Box>

  )
}
