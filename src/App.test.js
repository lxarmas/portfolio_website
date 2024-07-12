import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import Bookingform from './BookingForm';
import BookingPage from './BookingPage';

test('Static Text', () => {
  render(<BookingPage />);
  const heading = screen.getByText("Book a Table");
  expect(heading).toBeInTheDocument();
});
