import './content.css';
import {
   Menu,
   MenuButton,
   MenuList,
   MenuItem
 } from '@chakra-ui/react';
 import { HamburgerIcon } from '@chakra-ui/icons';
 import { ChakraProvider, Button } from '@chakra-ui/react';
 import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
 import React, { useState, useEffect } from 'react';

 const avatars = [
   "https://images.unsplash.com/photo-1698671114686-86de2d58aa2e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDQwfHx8ZW58MHx8fHx8",
   "https://images.unsplash.com/photo-1598886221209-99421ca9452e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhlYWRzaG90fGVufDB8fDB8fHww",
   "https://images.unsplash.com/photo-1698254064308-4ccbbc5dacc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDYwfHx8ZW58MHx8fHx8",
   "https://images.unsplash.com/photo-1698778755079-a76db5955d2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDUwfHx8ZW58MHx8fHx8",
   "https://images.unsplash.com/photo-1698681375999-8faa3e824cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDQ5fHx8ZW58MHx8fHx8"
 ]

function Content() {
   const [time, setTime] = useState('');

   useEffect(() => {
      function currentTime() {
         let date = new Date();
         let hour = date.getHours();
         let minutes = date.getMinutes();
         let session = "AM";
      
         if (hour == 0) {
            hour = 12;
         }
         if (hour > 12) {
            hour = hour - 12;
            session = "PM";
         }
      
         hour = (hour < 10) ? "0" + hour : hour;
         minutes = (minutes < 10) ? "0" + minutes : minutes;
      
         let currentTime = hour + ":" + minutes + " " + session;
         setTime(currentTime);
      }

      currentTime();

      let timer = setInterval(currentTime, 1000);

      return () => clearInterval(timer);
   }, []);
    return(
        <div className='container'>
           <div className='navigation'>
            <p className='clock'>{time}</p>
           <ChakraProvider>
           <Menu>
               <MenuButton
                  px={4}
                  py={3}
                  _hover={{bg: "green.100"}}
                  borderRadius='xl'>
                  Menu <HamburgerIcon />
               </MenuButton>
               <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create an account</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
               </MenuList>
            </Menu>
           </ChakraProvider>
           </div>
           <div className="message">
             <p className="hosting_location">Hosted and encrypted in EU</p>
             <h1 className="title">Your repository in a dream land</h1>
             <p className="about">
                Camocopy brings you the essential, powerful features you'd expect from any AI assistant, just like ChatGPT, but with one key difference: an unwavering commitment to your privacy.
             </p>
             <div className="cta">
                <a href="#" className="book_demo">Book a Demo</a>
                <a href="#" className="watch_video">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                Watch launch video
                </a>
             </div>
             <div className="users">
                <ChakraProvider>
                  <AvatarGroup size='md' max={5}>
                     <Avatar name='Tom Morbey' src={avatars[0]}borderColor="green.400" />
                     <Avatar name='Anna Marquez' src={avatars[1]} borderColor="green.400" />
                     <Avatar name='Hans Isaacson' src={avatars[2]} borderColor="green.400" />
                     <Avatar name='Michiel Annaert' src={avatars[3]} borderColor="green.400" />
                     <Avatar name='Dmitriy Ivanov' src={avatars[4]} borderColor="green.400" />
                  </AvatarGroup>
                </ChakraProvider>
                <p>used by 10,000+ people</p>
             </div>
           </div> 
        </div>
      );
}

export default Content;