'use client'
import React from "react"
import { Box } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ConfigurationContent from "./configurationContent/configurationContent";

export default function ConfigurationComponent({configuration}: {configuration: any}) {
  return (
    <Box sx={{
      mt: '1rem',
      width: '100%',
    }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            bgcolor: 'var(--border-dark)',
            color: 'var(--muted-text)',
            pl: '1rem',
            '& .MuiAccordionSummary-expandIconWrapper': {
              color: 'var(--muted-text)',
            },

            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              color: 'var(--primary)',
            },
          }}
        >
          <Typography component='span' sx={{color: 'var(--primary)', mr: '.5rem'}}>{configuration.icon}</Typography>
          <Typography component="span" sx={{textTransform: 'uppercase', fontWeight: '600'}}>
            {configuration.title} Configuration
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor: 'var(--card-suface)'}}>
          <ConfigurationContent configuration={configuration}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Box>

  )
}
