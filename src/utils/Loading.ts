import {
  LoadingIndicator,
  Mode,
  OptionsCommon,
} from "@nstudio/nativescript-loading-indicator";

export const indicator = new LoadingIndicator();

export const options: OptionsCommon = {
  message: "Loading...",
 
  progress: 0.2,
  margin: 10,
  dimBackground: true,
  color: "#4B9ED6", // color of indicator and labels
  // background box around indicator
  // hideBezel will override this if true
  backgroundColor: "yellow",
  userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
  hideBezel: true, // default false, can hide the surrounding bezel
  mode: Mode.AnnularDeterminate, // see options below
  
};
