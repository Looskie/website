import "styled-components";

type Hex = `#${string}`;
declare module "styled-components" {
  export interface DefaultTheme {
    type: "light" | "dark";
    background: Hex;
    secondaryBackground: Hex;
    textPrimary: Hex;
    textSecondary: Hex;
    accent: Hex;
  }
}
