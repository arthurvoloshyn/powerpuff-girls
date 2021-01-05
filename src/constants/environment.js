const { NODE_ENV } = process.env;

const ENV = {
  PROD: NODE_ENV === 'production',
  DEV: NODE_ENV === 'development',
};

export default ENV;
