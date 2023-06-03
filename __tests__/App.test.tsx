import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import HomePage from "@components/HomePage";
import { Provider } from "react-redux";
import store from "@store";
import MainRouter from "@components/MainRouter";
import * as actions from "@actions";
import * as router from "react-router";
import { characterInterface } from "@queries";
import Character from "@components/Character";
import { act } from "react-dom/test-utils";

describe("Route Test", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    jest.spyOn(actions, "fetch_data").mockImplementation(() => jest.fn());
    jest.spyOn(actions, "is_loading").mockImplementation(() => jest.fn());
    jest.spyOn(actions, "fetch_one").mockImplementation(async () => {
      return { character: {} as characterInterface };
    });
    window.scrollTo = jest.fn();
  });
  test("redirect to home page if route is not exist or is not a number", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/random"]}>
          <MainRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(navigate).toHaveBeenCalledWith("/");
  });
  test("open home page if route is in /", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <MainRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
  });
  test("open details for userId in route /1", async () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <MainRouter />
        </MemoryRouter>
      </Provider>
    );
    await act(async () => {
      expect(wrapper.find(Character)).toHaveLength(1);
    });
  });
});
