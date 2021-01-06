import PropTypes from 'prop-types';

import { Header } from './views/layout/header';
import { Footer } from './views/layout/footer';

const App = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
