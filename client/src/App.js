import {
  Paper,
  InputBase,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { LocationSearching } from '@mui/icons-material';
import './App.css';
import Info from './components/Info/Info';
import ErrorAlert from './components/Alert/Alert';
import { useState } from 'react';
import instance from './api';


const App = () => {
  const [ip, setIp] = useState('');
  const [dataIp, setDataIp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currencyData, setCurrencyData] = useState(null);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    const { value } = e.target;
    setIp(value);
  };

  const getCurrency = async (to) => {
    const from = dataIp.currency.code;
    await instance.get(`currency/${from}/${to}`).then((result) => {
      const { data } = result;
      if (!data.success) {
        setError('Error al Consultar Conversiones');
      } else {
        setCurrencyData(data.data);
      }
    })
  }

  const getData = async () => {
    setLoading(true);
    const re = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
    const isValidIp = re.test(ip);
    if(!isValidIp) {
      setError('No es una dirección IP valida.');
      setLoading(false);
      return;
    }
    await instance.get(`locate/${ip}`).then((response) => {
      const { data, success } = response.data;
      if (!success) {
        setError(data.message || data);
      } else {
        setDataIp(data);
      }
      setLoading(false);
    }).catch((err) => {
      setError(err);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={'/rurall.png'} className="App-logo" alt="logo" />
        <Paper sx={{ marginBottom: '50px' }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={'Ubicar Dirección IP'}
            onChange={handleInput}
          />
          <IconButton onClick={getData} disabled={loading || !ip}>
            {loading ? <CircularProgress size={20} /> : <LocationSearching color='primary' />}
          </IconButton>
        </Paper>
        {dataIp
          ?
          <Info
            data={dataIp}
            getCurrency={getCurrency}
            currencyData={currencyData}
          />
          : null}
        {error
          ? <ErrorAlert error={error} sx={{ marginTop: '50px' }} />
          : null}
      </header>
    </div>
  );
};

export default App;
