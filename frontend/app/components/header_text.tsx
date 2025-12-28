'use client'
import { Box, Typography } from "@mui/material"
export default function HeaderText() {
  return (
    <>
      <Box className="">
        <Typography
          sx={{
            color: 'var(--text)',
            fontSize: '2rem',
            fontWeight: '700'
          }}>
          Create QR Code 
        </Typography>
        <Typography
          sx={{
            color: 'var(--muted-text)'
          }}>
          Select a content type and fill in the details to generate your custom QR code. 
        </Typography>
      </Box>
    </>
  )
}
