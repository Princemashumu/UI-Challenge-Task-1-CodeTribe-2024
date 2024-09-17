import React from 'react';
import { Container, Grid } from '@mui/material';

function MainContent() {
  return (
    <Container 
      className='mainContent' 
      maxWidth={false}  // Ensures full width
      sx={{ 
        backgroundColor: '#FFFDD1', 
        height: '100vh',  // Full viewport height
        width: '100%',    // Full width
        display: 'flex',  // Helps with layout
        justifyContent: 'center',  // Centers content horizontally
        alignItems: 'center',       // Centers content vertically
      }}
    >
      {/* Inner Content with margin */}
      <Container 
        className='content' 
        maxWidth={false}  // Ensures full width
        sx={{ 
          backgroundColor: 'white', 
          height: 'calc(100vh - 160px)',  // Adjust height to accommodate margins
          width: 'calc(100% - 40px)',     // Adjust width to accommodate margins
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderLeft: '5px solid orange', // Border on the left side
          // padding: '16px'                // Uncomment if padding is needed
        }}
      >
        <Grid container spacing={1} sx={{ height: '100%' }}>
          <Grid item xs={12} sm={6} md={4}>
            <div style={{ 
              height: '100%', 
              backgroundColor: 'white',  // Background color for visual separation
              borderRight: '1px solid grey', // Right border for visual separation
              display: 'flex', 
              flexDirection: 'column', // Column layout for header and content
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '16px', // Padding around the content
            }}>
              <h2 style={{ marginLeft: '20px' }}>Medora</h2> {/* Header for Item 1 */}
              <div style={{ 
                backgroundColor: 'white',  
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '100%',
              }}>
                Item 1
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div style={{ 
              height: '100%', 
              backgroundColor: 'white',  // Background color for visual separation
              borderRight: '1px solid orange', // Right border for visual separation
              display: 'flex', 
              flexDirection: 'column', // Column layout for header and content
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '16px', // Padding around the content
            }}>
                <div className='headertwo'>
                <h2 style={{ margin: 0 }}>About Us</h2> {/* Header for Item 2 */}
              <h2 style={{ margin: 0 }}>Furniture</h2> {/* Header for Item 2 */}
                </div>
             
              <div style={{ 
                backgroundColor: 'white',  
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '100%',
              }}>
                Item 2
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div style={{ 
              height: '100%', 
              backgroundColor: 'white',  // Background color for visual separation
              display: 'flex', 
              flexDirection: 'column', // Column layout for header and content
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '16px', // Padding around the content
            }}>
              <h2 style={{ margin: 0 }}>Our Stores</h2> {/* Header for Item 3 */}
              <div style={{ 
                backgroundColor: 'white',  
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '100%',
              }}>
                Item 3
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default MainContent;
