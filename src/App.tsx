import { useEffect, useRef } from 'react';
import { mountCSCatalog } from '@commentsold/cs-catalog';
import './App.css';

function App() {
  const containerElRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerElRef.current) return;
    mountCSCatalog(containerElRef.current, {
      apiUrl: 'https://openapi.commentsoldhotel.com',
      baseUrl: '/catalog',
      shopId: '14',
      isShopOwner: true,
      isSuperAdmin: true,
      shopOwnerInfo: {
        name: 'jim bob',
        streetAddress: '123 w test st',
        city: 'dayton',
        state: 'oh',
        zip: '45459',
        countryCode: '1',
        email: 'seth.white@commentsold.com',
        phoneNumber: '513-285-3365',
      },
      jwtToken: 'someToken',
    });
  }, []);
  return (
    <div className="App" />
  );
}

export default App;
