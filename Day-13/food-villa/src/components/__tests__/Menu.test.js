import '@testing-library/jest-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Header from '../Header';
import RestaurantMenu from '../RestaurantMenu';
import store from '../../redux/store';
import { MENU_DATA } from '../../mocks/data';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test('Add items to cart', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId('menu')));

  const addBtns = body.getAllByTestId('addBtn');

  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[2]);

  const cart = body.getByTestId('cart');
  expect(cart.innerHTML).toBe('Cart - 2 items');
});
