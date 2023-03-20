import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/general/store';
import { BrowserRouter } from 'react-router-dom';
import Main from '../components/pages/Main';

window.scrollTo = jest.fn();

describe('render artwork', () => {
  it('should render main correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>,
    );
  });
});
