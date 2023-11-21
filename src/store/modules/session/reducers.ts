import { sets } from "../../../assets/data/sets.data"
import { effects } from "../../../assets/data/audio.data";
import { SessionModuleState } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import { SceneSet, SoundEffect } from "../../../utils";

const Reducers = {
  setSceneAndSet(
    state: any, 
    action: PayloadAction<{ set: SceneSet; scene: number }>
  ) {
    const newSet = action.payload.set._id !== state.set.set._id;
    const pixelated = state.set.pixelated;
    const night = state.set.night;
    state.set = action.payload;
    state.set.night = night;
    state.set.pixelated = pixelated;
    if (!state.player.mix_mode && newSet) state.player.effects = effects;
  },

  setScenePixelated(state: any) {
    state.set.pixelated = !state.set.pixelated;
  },

  setSceneNight(state: any) {
    state.set.night = !state.set.night;
  },
}

export default Reducers;