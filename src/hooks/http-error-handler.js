import { useState, useEffect } from 'react';

export default (httpClient) => {
  const [error, setError] = useState(null);

  const reqInterceptor = httpClient.interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  // not interested in response only for error handling
  const resInterceptor = httpClient.interceptors.response.use(
    //short syntax to handle return response
    (res) => res,
    (err) => {
      setError(err);
    }
  );

  // if use effect for functional component
  // you would write code in return function for cleanup
  useEffect(() => {
    //cleanup function unmount
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.request.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
