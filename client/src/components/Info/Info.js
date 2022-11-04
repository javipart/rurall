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
        boxShadow: '5px 5px 5px 5px rgba(0.1, 0.4, 0.1, 0.2)',
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
          {`${data.name} (${data.iso})`}
        </Typography>
        <Typography variant="body2">
          {`Modena Local: ${data.currency.name} ${data.currency.symbol} (${data.currency.code})`}
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