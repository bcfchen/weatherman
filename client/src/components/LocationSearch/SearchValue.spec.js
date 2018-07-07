import React from "react";
import { shallow } from "enzyme";
import SearchValue from "./SearchValue";

describe("<SearchValue/>", () => {
    let component = null,
        deafultProps = {
            value: { label: "myLabel" },
            children: <div className="child-div">Child Div</div>
        };

    let render = (props = deafultProps) => {
        component = shallow(<SearchValue {...props} />);
    };
    beforeEach(() => { render(); });

    describe("on page load", () => {
        it("should render correctly", () => {
            expect(component).toMatchSnapshot();
        });

        it("should contain children components", () => {
            expect(component.find(".child-div").exists()).toEqual(true);
        });

        it("should contain display label correctly", () => {
            expect(component.find("WithStyles(Typography)").dive().dive().text()).toEqual("myLabel");
        });
    });
});