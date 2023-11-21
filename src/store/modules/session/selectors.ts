import { RootState } from "../../store";

export const getScene = (state: RootState) => {
  return state.session.set.set.scenes[state.session.set.scene];
};

export const getSetAndScene = (state: RootState) => {
  return state.session.set;
};

export const getSceneSource = (state: RootState) => {
  const scene = state.session.set.set.scenes[state.session.set.scene];
  const effect = state.session.player.effects
    ?.filter((e) => e.active && Object.keys(scene.variants).includes(e.type))
    .map((e) => e.type)?.[0];

  const name = effect ?? "default";

  const pixelated = state.session.set.pixelated;
  const night = state.session.set.night;

  const namePixel = name + (pixelated ? "_pixel" : "");
  const nameNight = name + (night ? "_night" : "");
  const nameNightPixel = name + (night && pixelated ? "_pixel_night" : "");
  if (pixelated && night)
    return (
      scene.variants[nameNightPixel ?? "default"] ??
      scene.variants[namePixel ?? "default"] ??
      scene.variants[nameNight ?? "default"] ??
      scene.variants[name] ??
      scene.variants.default
    );

  if (pixelated)
    return (
      scene.variants[namePixel ?? "default"] ??
      scene.variants[name] ??
      scene.variants.default
    );
  if (night)
    return (
      scene.variants[nameNight ?? "default"] ??
      scene.variants[name] ??
      scene.variants.default
    );
  else {
    return scene.variants[name] ?? scene.variants.default;
  }
};

export const getPlayerMixMode = (state: RootState) => {
  return state.session.player.mix_mode;
};

export const sceneMode = (state: RootState) => {
  return state.session.set.night;
};

export const sessionCompact = (state: RootState) => {
  const set_id = state.session.set.set._id;
  const { scene, pixelated, night } = state.session.set;

  const effects = state.session.player.effects.map((e) =>
    e.active && e.level ? `${((e.level as number ?? 0) * 9).toFixed(0)}${e.type}/` : ""
  );

  const playlist =
    state.session.player.playlist === "chill"
      ? 0
      : state.session.player.playlist === "jazzy"
        ? 1
        : 2;
  const level = ((state.session.player.level ?? 0) * 9).toFixed(0);
  const mixMode = state.session.player.mix_mode;

  const compact = `${set_id}&${scene}&${pixelated ? 1 : 0}${night ? 1 : 0}${
    mixMode ? 1 : 0
  }${level}${playlist}&${effects.join("")}`;

  return btoa(compact);
};