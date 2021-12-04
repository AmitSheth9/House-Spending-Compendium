import { screen, render } from '@testing-library/react'
import Filter from './Filter'

it('should render Filter component', () => {
    const {container} = render(<Filter />);
    const selectDisbursements = screen.getByText(/Disbursements/);
    const selectReceipts = screen.getByText(/Receipts/);
    

    expect(selectDisbursements).toBeInTheDocument();
    expect(selectReceipts).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});