import {
    Box,
    InputLabel,
    FormControl,
    MenuItem,
    Typography,
    Select,
  } from "@mui/material";
  
  const DropDown = ({ type, handleChange, types }) => {
    return (
      <Box mt={5}>
        <Typography variant="h4" mb={3}
          sx={{ color: 'white', fontWeight: 'bold' }}
        >
          Tipo de pokemones
        </Typography>
        <FormControl fullWidth
          sx={{ backgroundColor: 'grey' }}
        >
          <InputLabel
            sx={{ color: 'white', fontWeight: 'bold', fontSize: '22px' }}
          >Tipos</InputLabel>
          <Select value={type} label="Tipos" onChange={handleChange}
          sx={{ color: 'white', fontWeight: 'bold' }}>
            {types.length > 0 &&
              types.map(({ url, name }) => (
                <MenuItem value={url}>{name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    );
  };
  
  export default DropDown;