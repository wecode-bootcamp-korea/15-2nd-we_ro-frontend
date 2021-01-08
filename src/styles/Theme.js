import { css } from "styled-components";

const theme = {
  fontColor: "black",
  mainColorBlue: "#3F3FFF",
  greyText: "#A5A5A5",
  fontColor: "black",
  mainColorBlue: "#3F3FFF",
  greyText: "#A5A5A5",
  playBarColor: "#000000",
  mainColorWhite: "#ffffff",
  boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.4)",
};

export const flexcenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const PlayBarSize = css`
  width: 375px;
  height: 100%;
`;

export default theme;
