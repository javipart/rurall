import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import {
  Euro,
  AttachMoney,
} from '@mui/icons-material';
import { useEffect, useLayoutEffect, useState } from 'react';


const Info = ({ data, getCurrency, currencyData }) => {
  const [currency, setCurrency] = useState('USD');
  const [value, setValue] = useState(currencyData);

  const handleCurrency = (e, value) => {
    setCurrency(value);
    getCurrency(value);
  };

  useEffect(() => {
    getCurrency('USD');
  }, []);

  useLayoutEffect(() => {
    setValue(currencyData);
  }, [currencyData]);

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: '10px',
      }}
    >
      <CardMedia
        component={'img'}
        height={150}
        image={data.flag}
        alt={'country'}
      />
      <CardContent sx={{ backgroundColor: 'lightgray' }}>
        <Typography gutterBottom variant={'h5'} component={'div'}>
          {data.name}
        </Typography>
        <Typography variant="body2">
          {`Modena Local: ${data.currency.name}`}
        </Typography>
        <ToggleButtonGroup
          sx={{ backgroundColor: 'white' }}
          value={currency}
          onChange={handleCurrency}
          exclusive
        >
          <ToggleButton value={'USD'}>
            <AttachMoney />{currency === 'USD' ? value : ''}
          </ToggleButton>
          <ToggleButton value={'EUR'}>
            <Euro />{currency === 'EUR' ? value : ''}
          </ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
    </Card>
  );
};

export default Info;