import {screen, render} from '@testing-library/react'
import Candidates from './Candidates'

it('should render our Candidates component', () => {
    const {container} = render(<Candidates candidateArr={[{name:'john', receipts: 30000, disbursements: 4000, party_full: 'pickle party', cycle: 2020, state: 'ca', cash_on_hand_end_period: 3000}]}/>)

expect(container).toMatchSnapshot();
});