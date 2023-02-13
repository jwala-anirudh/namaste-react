import '@testing-library/jest-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Body from '../Body';
import store from '../../redux/store';
import { RESTAURANT_DATA } from '../../mocks/data';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test('Shimmer should load on home page', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId('shimmer');

  expect(shimmer.children.length).toBe(10);
});

test('Restaurants should load on home page', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId('search-btn')));

  const resList = body.getByTestId('res-list');

  expect(resList.children.length).toBe(15);
});

test('Search for string(food) on home page', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId('search-btn')));

  const input = body.getByTestId('search-input');

  fireEvent.change(input, {
    target: {
      value: 'food',
    },
  });

  const searchBtn = body.getByTestId('search-btn');
  fireEvent.click(searchBtn);

  const resList = body.getByTestId('res-list');
  expect(resList.children.length).toBe(1);
});
