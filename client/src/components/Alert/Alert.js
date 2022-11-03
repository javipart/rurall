import {
    Alert,
    AlertTitle,
} from '@mui/material';

const ErrorAlert = ({error}) => {
  return (
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
}

export default ErrorAlert;
