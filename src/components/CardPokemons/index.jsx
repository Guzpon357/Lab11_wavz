import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const CardPokemons = ({ pokemons }) => {
  return (
    <Box>
      <Grid container spacing={3} mt={3}>
        {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <Grid item xs={12} sm={4}>
              <Card 
                sx={{ borderRadius: '15%',backgroundColor: 'rgb(33, 46, 69)'  }}
              >
                <CardMedia
                  sx={{ borderRadius: '15%', backgroundColor: 'rgb(31, 31, 31)' }}
                  component="img"
                  height={450}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokemon.url.split("/")[6]
                  }.png`}
                />
                <CardContent>
                  <Typography variant="body1"
                  sx={{ color:'white', fontWeight: '900', fontSize: '20px' }}>{pokemon.name}</Typography>
                  
                  <Button
                    sx={{ color:'grey', fontWeight: 'bold' }}
                  >Ver detalle</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardPokemons;