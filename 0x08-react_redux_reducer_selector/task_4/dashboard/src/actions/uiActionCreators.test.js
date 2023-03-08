import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "./uiActionCreators";

import fetchMock from "fetch-mock";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("tests for UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "james@gmail.com";
    const password = "heheheh";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "james@gmail.com", password: "heheheh" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });

  describe("Async action creators tests", function () {
    afterEach(() => {
      fetchMock.restore();
    });

    it("should verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS", () => {
      // Return the promise
      const store = mockStore({});
      fetchMock.restore();

      const user = {
        email: "test@test.com",
        password: "123456",
      };

      fetchMock.get("http://localhost:8564/login-success.json", "{}");

      return store
        .dispatch(loginRequest(user.email, user.password))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(login(user.email, user.password));
          expect(actions[1]).toEqual(loginSuccess());
        });
    });

    it("should verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE", () => {
      // Return the promise
      const store = mockStore({});

      fetchMock.mock("http://localhost:8564/login-success.json", 500);

      const user = {
        email: "test@test.com",
        password: "123456",
      };

      return store
        .dispatch(loginRequest(user.email, user.password))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(login(user.email, user.password));
          expect(actions[1]).toEqual(loginFailure());
        });
    });
  });
});