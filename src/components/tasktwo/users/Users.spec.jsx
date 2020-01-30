import React from "react";
import { shallow } from "enzyme";
import Users from "@components/tasktwo/users/Users";
import usersDataMock from "@testUtils/usersDataMock";
import todosDataMock from "@testUtils/todosDataMock";

const render = props => shallow(<Users {...props} />);

describe("User component", () => {
  it("should match snapshot", () => {
    const wrapper = render({
      users: usersDataMock,
      todos: todosDataMock
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should render users", () => {
    const wrapper = render({
      users: usersDataMock,
      todos: todosDataMock
    });

    const users = wrapper.find("User");

    expect(users.length).toBe(2);
  });

  it("should serialize and pass todos to the User component", () => {
    const wrapper = render({
      users: usersDataMock,
      todos: todosDataMock
    });

    const firstUser = wrapper.find("User").first();

    expect(firstUser.props().todos).toEqual([
      { completed: false, id: 1, title: "delectus aut autem", userId: 1 },
      { completed: false, id: 2, title: "et officia qui", userId: 1}
    ]);
  });
});
