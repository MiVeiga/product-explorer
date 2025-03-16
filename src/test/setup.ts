import { server } from "./server"; 
import { beforeAll, afterEach, afterAll } from "vitest";
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});