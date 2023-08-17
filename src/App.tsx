import { useEffect, useRef } from 'react';
import { mountCSCatalog } from '@commentsold/cs-catalog';
import "@commentsold/cs-catalog/css";
import './App.css';

function App() {
  const containerElRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerElRef.current) return;
    mountCSCatalog(containerElRef.current, {
      "apiUrl": "https://openapi.commentsoldhotel.com/v1",
      "baseUrl": "/cs-inventory",
      "shopId": "qjbmexervtgkjur4ajd9mc4aa2g3",
      "isShopOwner": true,
      "isSuperAdmin": true,
      "shopOwnerInfo": {
        "name": "Test New",
        "streetAddress": "2390 Powell ST UNIT 2511",
        "city": "SAN FRANCISCO",
        "state": "CA-California",
        "zip": "94133-1442",
        "countryCode": "CA",
        "email": "north@qq.com",
        "phoneNumber": "2223334445"
      },
      "jwtToken": "TVRw8TCTA__8J4LfXQ0HRaNaKLxVzFinyQPePgulv_dccQKXnjQJBYeq82DAx23DdSCHiRZAqFe0I2AZnVBoOZkgTwSvK68DdUBmcHOY566r1LLnb0WZBhmGVXRQfTe4d8GCq83Zmm77NxotLGmJ9ToXQN_Twdpt1OAeDe01VXRohXEgi0TvRe-0kl8lFXvs77ghFLOY2I2HFNm1vDKhL_mpr641YPE6TQwDT6Bq_MLwBQspH4fdkqkaGecP1GzvQwFXhYOSJFYl6Rn14EUEIOU2AFh0cNvS2jBjetuAR1EeRPTKKl7Ez18mjyrJsfWg95xfxGhG0OdZccJJYHC7DA"
    });
  }, []);
  return (
    <div className="App" ref={containerElRef} />
  );
}

export default App;
