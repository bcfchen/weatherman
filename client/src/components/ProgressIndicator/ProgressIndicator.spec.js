import React from 'react';
import { shallow } from 'enzyme';
import ProgressIndicator from './ProgressIndicator';

describe('<ProgressIndicator />', () => {
    const defaultProps = { classes: { progress: "progress-class" } };
    let component = null;
    const render = (props = defaultProps) => {
        component = shallow(<ProgressIndicator {...props} />);
    };

    describe("on load", () => {
        beforeEach(() => { render(); });

        it('renders correctly', () => {
            expect(component).toMatchSnapshot();
        });

        it("assigns the correct className", () => {
            expect(component.dive().find('.progress-class').exists()).toEqual(true);
        });
    });
});
