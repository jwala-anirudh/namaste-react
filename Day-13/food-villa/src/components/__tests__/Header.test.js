import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Header from '../Header';
import store from '../../redux/store';

test('Logo should load on rendering header', () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);
  const logo = header.getAllByTestId('logo');
  // console.log(logo);

  // Check if logo is loaded
  expect(logo[0].src).toBe('http://localhost/dummy.svg');
});

test('Online status should be green on rendering header', () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId('online-status');
  // console.log(onlineStatus);

  // Check if checkmark is present
  expect(onlineStatus.innerHTML).toBe('✅');
});

test('Cart should have zero items on rendering header', () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId('cart');

  // Check if checkmark is present
  expect(cart.innerHTML).toBe('Cart - 0 items');
});
