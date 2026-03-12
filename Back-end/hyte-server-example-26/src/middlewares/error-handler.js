const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Palvelimella tapahtui virhe.';

  res.status(statusCode).json({message});
};

export default errorHandler;
