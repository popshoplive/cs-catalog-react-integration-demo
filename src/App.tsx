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
      "shopId": "2nysxf2saeoppjv3bheelzrjm2j2",
      "isShopOwner": true,
      "isSuperAdmin": true,
      "shopOwnerInfo": {
        "name": "james0607 guo",
        "streetAddress": "2309 sparrow",
        "city": "forney",
        "state": "TX",
        "zip": "75126",
        "countryCode": "US",
        "email": "guoya0911@gmail.com",
        "phoneNumber": "2763252467"
      },
      "jwtToken": "K-0Nxeb_wW-IVa-tA7jgdKwE-xqHymbuIF_dUahrPrJyZjk80Zo5o1haRRRU9KXu7M9s19UshBQnnGTirf0M7ydewkwV-CiDCXHSVLJWYXaC3Dq26KxRF7MCjweraPJp2MYTGsgQzmpc_Hibb4FHNObNG5Wx5KzRhuTxLYOwC0SeblVVlE4iWA6riMIP77AfYHidg8V_tC22T4IA88eWApKHMCrTtUK3rpO_IgtzWqpWnFPDd1bwx95wJbGNd1djK9Dx-QgWJ86fd2NPdBk_S7NMV1-iwb5EksYGmxNrGFzj7Tr7dkey0fnE6-b8dJGFblI2PIH6aIz0Lk_rRf1S9A"
    });
  }, []);
  return (
    <div className="App" ref={containerElRef} />
  );
}

export default App;
