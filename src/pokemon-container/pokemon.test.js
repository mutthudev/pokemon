import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PokeMon from ".";

configure({ adapter: new Adapter() });

describe("pokemon testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PokeMon />);
  });

  test("render welcome Title", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("#welcome").text()).toContain(
      "Welcome to Pokemon List"
    );
  });

  test("render Left Panel", () => {
    expect(wrapper.contains("#leftPanel")).toBe(false);
  });

  test("render Right Panel", () => {
    expect(wrapper.contains("#rightPanel")).toBe(false);
  });
});
