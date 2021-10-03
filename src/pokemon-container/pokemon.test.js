import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act, render } from "@testing-library/react";
import PokeMon from ".";

configure({ adapter: new Adapter() });

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: "Pidgey",
        url: "www.something.com",
      }),
  })
);

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

// describe("API Test", () => {
//   it("Invoke API", async () => {
//     await act(async () => render(<PokeMon />));        
//   });
// });
