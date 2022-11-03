module.exports = {
  IPAPI_URL: process.env.IPAPI_HOST || 'http://api.ipapi.com/api/',
  IPAPI_TOKEN: process.env.IPAPI_TOKEN || '6f481b3bce40279d7e07d2fcae251e4c',
  COUNTRYLAYER_URL: process.env.COUNTRYLAYER_URL || 'https://restcountries.com/v2/',
  COUNTRYLAYER_TOKEN: process.env.COUNTRYLAYER_TOKEN || 'ccf1981c8a00b92880b13073dd8a9615',
  FIXER_URL: process.env.FIXER_URL || 'https://api.apilayer.com/fixer/',
  FIXER_TOKEN: process.env.FIXER_TOKEN || 'OiY2YdMjbkp7bdbnZNMnprZu5k2EWpAi',
  MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://root:123@cluster0.yyvpo.mongodb.net/test',
  errorMsg: 'Servicio no disponible!, intente de nuevo mas tarde',
};
