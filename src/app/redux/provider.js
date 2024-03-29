"use client";
import { store } from "./store";

const { Provider } = require("react-redux");

export function Providers({ childern }) {
  return <Provider store={store}>{childern}</Provider>;
}
