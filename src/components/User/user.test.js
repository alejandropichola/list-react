import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import User from "./User";
import { store } from "@/store";
const data = {
  name: "Juan",
  email: "arg@gmail.com",
  phone: "+543242343",
  country: "AR",
  id: 1,
};

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("Render User", () => {
  const history = createMemoryHistory();

  beforeEach(() =>
    render(
      <Router history={history}>
        <User
          name={data.name}
          email={data.email}
          phone={data.phone}
          country={data.country}
          id={data.id}
        />
      </Router>,
      { wrapper: Wrapper }
    )
  );

  it("Render Name", () => {
    expect(screen.getByText(data.name)).toBeInTheDocument();
  });
  it("Render Email", () => {
    expect(screen.getByText(data.email)).toBeInTheDocument();
  });
  it("Render Phone", () => {
    expect(screen.getByText(data.phone)).toBeInTheDocument();
  });
  it("Render Country", () => {
    expect(screen.getByText(data.country)).toBeInTheDocument();
  });
});
