import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { Header } from "./Header";

afterEach(() => {
  cleanup();
});

describe("Header component for DEX CDC Portal", () => {
  it("should render seven buttons with the correct text", () => {
    const { container } = render(<Header />);

    expect(container.getElementsByTagName("button").length).toBe(7);
    expect(screen.getByText("Your Profile")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
