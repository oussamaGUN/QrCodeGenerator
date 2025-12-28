'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import LinkIcon from '@mui/icons-material/Link';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { title } from 'process';
import { Pagination, PaginationItem } from '@mui/material';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

const cards_1 = [
  {
    id: 1,
    icon: <LinkIcon />,
    title: 'URL',
  },
  {
    id: 2,
    icon: <WifiOutlinedIcon />,
    title: 'WIFI',
  },
  {
    id: 3,
    icon: <ContactPageOutlinedIcon />,
    title: 'vCard',
  },
  {
    id: 4,
    icon: <MailOutlineIcon />,
    title: 'E-mail',
  },
  {
    id: 5,
    icon: <ContactPhoneOutlinedIcon />,
    title: 'Phone',
  },
  {
    id: 6,
    icon: <TextsmsOutlinedIcon />,
    title: 'SMS',
  },
  {
    id: 7,
    icon: <LocationOnOutlinedIcon />,
    title: 'Location',
  },
  {
    id: 8,
    icon: <NotesIcon />,
    title: 'Text',
  },
  {
    id: 9,
    icon: <CalendarMonthOutlinedIcon />,
    title: 'Event',
  },
  {
    id: 10,
    icon: <InstallMobileOutlinedIcon />,
    title: 'App Store',
  },
  {
    id: 11,
    icon: <CurrencyBitcoinOutlinedIcon />,
    title: 'Bitcoin',
  },
  {
    id: 12,
    icon: <FacebookOutlinedIcon />,
    title: 'Facebook',
  },
  {
    id: 13,
    icon: <CameraAltOutlinedIcon />,
    title: 'Instagram',
  },
  {
    id: 14,
    icon: <AlternateEmailOutlinedIcon />,
    title: 'Twitter',
  },
  {
    id: 15,
    icon: <SubscriptionsOutlinedIcon />,
    title: 'Youtube',
  },
];

const cards_2 = [
  {
    id: 1,
    icon: <PictureAsPdfOutlinedIcon />,
    title: 'PDF',
  },
  {
    id: 2,
    icon: <ImageOutlinedIcon />,
    title: 'Image',
  },
  {
    id: 3,
    icon: <VideocamOutlinedIcon />,
    title: 'Video',
  },
  {
    id: 4,
    icon: <MusicNoteOutlinedIcon />,
    title: 'MP3',
  },
  {
    id: 5,
    icon: <CropFreeOutlinedIcon />,
    title: 'Barcode',
  },
  {
    id: 6,
    icon: <ThumbsUpDownOutlinedIcon />,
    title: 'Feedback',
  },
  {
    id: 7,
    icon: <StarHalfOutlinedIcon />,
    title: 'Rating',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const [page, setPage] = React.useState(1);
  let cards: any[] = [];
  cards = page === 1 ? cards_1 : cards_2;
  const handleChange = (_: any, value: number) => {
    setPage(value);
  };
  return (
    <Box>
      <Box
        sx={{
          minHeight: '55vh',
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(140px, 100%), 1fr))',
            gap: 2,
            animation: 'fadeIn 0.4s ease-in-out',
            '@keyframes fadeIn': {
              from: {
                opacity: 0,
                transform: 'translateY(10px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
          key={page}
        >
          {cards.map((card, index) => (
            <Card key={index}
              sx={{
                borderRadius: '1rem',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                } 
              }}
            >
              <CardActionArea
                onClick={
                  () => { 
                    setSelectedCard(index)
                    console.log(index)
                  }
                }
                data-active={selectedCard === index ? '' : undefined}
                sx={{
                  height: '100%',
                  color: 'var(--primary)' 
                }} 
              >
                <CardContent sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  bgcolor: 'var(--card-suface)',
                  borderRadius: '1rem',
                  border: selectedCard === index
                    ? '2px solid var(--primary)'
                    : '2px solid transparent',
                  color: selectedCard === index ? 'var(--primary)' : 'var(--muted-text)',
                  '&:hover': {
                    color: 'var(--primary)',
                  },
                }}>
                  <Typography>
                    {React.cloneElement(card.icon, { sx: { fontSize: 32 } })}
                  </ Typography>
                  <Typography 
                    sx={{
                      fontSize: '.9rem',
                      fontWeight: '600',
                      pt: '1rem'
                    }} 
                    component="div">
                    {card.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
        }}
      >
        <Pagination
          count={2}
          page={page}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                color: 'var(--text)',
                borderRadius: '8px',

                '&.Mui-selected': {
                  bgcolor: 'var(--primary)',
                  color: 'var(--text)',
                },

                '&:hover': {
                  bgcolor: 'rgba(99, 102, 241, 0.2)',
                },
              }}
            />
          )}
        />   
      </Box>
    </Box>
  );
}

export default SelectActionCard;
