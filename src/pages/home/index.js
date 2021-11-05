import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import PropTypes from 'prop-types';

function Item(props) {
    const { sx, ...other } = props;
    return (
        
      <Box
        sx={{
          bgcolor: '#d3d3d3',
          color: 'white',
          p: 20,
          m: 1,
          borderRadius: 1,
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
function Home () {
    return (
        <>
        <h1> Home </h1>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          width: '80%',
          height: '800px',
          marginLeft: '10%'

        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
      </Box>
 
        </>
    )
}

export default Home;