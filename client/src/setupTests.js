import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
};

const mockGeolocation = {
    getCurrentPosition: (func) => {
        return func({
            coords: {
                latitude: 32,
                longitude: 122
            }
        });
    }
};

global.navigator.geolocation = mockGeolocation;
