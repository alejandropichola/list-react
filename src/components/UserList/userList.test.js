import React from "react";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";

import UserList from "@/components/UserList/UserList";
import { store } from "@/store";

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("Render UserList", () => {
  const history = createMemoryHistory();
  beforeEach(() =>
    render(
      <Router history={history}>
        <UserList />
      </Router>,
      { wrapper: Wrapper }
    )
  );

  it("Render Header Name Table", () => {
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("Render Header Email Table", () => {
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("Render Header Phone Table", () => {
    expect(screen.getByText("Phone")).toBeInTheDocument();
  });

  it("Render Header Country Table", () => {
    expect(screen.getByText("Country")).toBeInTheDocument();
  });
});
