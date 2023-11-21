import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";
import * as selectors from "./selectors";
import { sets } from "../../../assets/data/sets.data"
import { effects, playlistsBase } from "../../../assets/data/audio.data";
import { SceneSet, SoundEffect, SoundTrack, SoundTrackMood } from "../../../utils";

export type SessionModuleState = {
  human: boolean;
  player: {
    active: string;
    effects: SoundEffect[];
    level: number;
    current_track: SoundTrack;
    history_pointer: number;
    last_level: number;
    customPlaylist: {
      active: boolean,
      url: string
    };
    playlist: string;
    playing: boolean;
    history: SoundTrack[];
    mix_mode?: boolean;
  };
  youtube_url: string;
  custom_tracks: {
    [key in SoundTrackMood]: SoundTrack[];
  };
  set: {
    set: SceneSet;
    scene: number;
    [key: string]: unknown;
  }
}

const INITIAL_STATE: SessionModuleState = {
  human: false,
  player: {
    active: "native",
    effects: effects,
    level: 0.5,
    current_track: playlistsBase.chill[0],
    history_pointer: 0,
    last_level: 0.5,
    customPlaylist: {
      active: false,
      url: ""
    },
    playlist: "chill",
    playing: false,
    history: [playlistsBase.chill[0]],
  },
  youtube_url: "",
  custom_tracks: playlistsBase,
  set: { set: sets[0], scene: 0 },
}

const slice = createSlice({
  name: "Session",
  initialState: INITIAL_STATE,
  reducers: {
    ...reducers
  }
});

export const SessionAction = slice.actions;
export const SessionSelect = selectors;
export const SessionInitialState = INITIAL_STATE;
export default slice.reducer;