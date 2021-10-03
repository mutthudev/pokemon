import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act, render } from "@testing-library/react";
import PokeMon from ".";
import { Card } from "@mui/material";
import PokemonOptions from "./components/pokemonOptions";

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

  test("Render Pagination", () => {
    expect(wrapper.contains("<Pagination")).toBe(false);
  });  
});

// describe("API Test", () => {
//   it("Invoke API", async () => {
//     await act(async () => render(<PokeMon />));        
//   });
// });

describe("Card testing", () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Card />);
    });    
  
    test("Render Card", () => {
      expect(wrapper.contains("#card")).toBe(false);
    });  

    test("Render Weight", () => {
        expect(wrapper.contains("#weight")).toBe(false);      
      });  

      test("Render Height", () => {
        expect(wrapper.contains("#height")).toBe(false);      
      });

      test("Render Abilities", () => {
        expect(wrapper.contains("#abilities")).toBe(false);      
      });
  });

  describe("Pokemon Options", () => {  
  
    test("Render pokemon options", () => {
      const wrapper = shallow(<PokemonOptions />);

      expect(wrapper.find("#sort").text()).toContain("Sort By");
  
      expect(wrapper.find("#filter").text()).toContain("Filter By");
    });
  });
