import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs';

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
