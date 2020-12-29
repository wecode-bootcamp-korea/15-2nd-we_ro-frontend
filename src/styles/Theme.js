import { css } from "styled-components";

const theme = {
  mainColor: "black",
  dangerColor: "black",
  successColor: "black",
  fontColor: "black",
  mainColorBlue: "#3F3FFF",
  greyText: "#A5A5A5",
  playBarColor: "#000000",
  mainColorWhite: "#ffffff",
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
