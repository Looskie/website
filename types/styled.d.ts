import "styled-components";

type Hex = `#${string}`;
declare module "styled-components" {
  export interface DefaultTheme {
    type: "light" | "dark";
    background: Hex;
    textPrimary: Hex;
    accent: Hex;
  }
}
