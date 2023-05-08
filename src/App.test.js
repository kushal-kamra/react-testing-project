import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
    test("Check Page Heading, Hello World", () => {
        render(<App />);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/hello world/i);
    });

    test("Check Page Heading after user clicks button", () => {
        render(<App />);
        const button = screen.getByRole("button", { name: "Update Heading" });
        userEvent.click(button);
        expect(screen.getByRole("Hweading", { level: 1 })).toHaveTextContent(/hello project/i);
    });
});
