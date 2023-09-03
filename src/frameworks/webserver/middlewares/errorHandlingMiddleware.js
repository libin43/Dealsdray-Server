export default function errorHandlingMiddleware(err, req, res, next) {
  console.log(err, 'GOT IN EHM');

  if (err.name === 'ValidationError') {
    const errorObject = {};
    err.inner.forEach((innerError) => {
      errorObject[innerError.path] = innerError.errors;
    });
    res.status(400).send({ error: errorObject });
  }
}
