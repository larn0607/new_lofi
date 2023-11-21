export type Scene = {
  thumbnail: HTMLImageElement | string;
  wallpaper: string;
  variants: {
    [key: string]: string;
  }
  actions: {
    position: number[];
    title: string;
    type: string;
    effect?: string;
  }[];
}

export type SceneSet = {
  _id: string,
  thumbnail: HTMLImageElement | string;
  name: string;
  scenes: Scene[];
  effects: string[];
}

export type SoundEffect = {
  type: string;
  name: string;
  url: string;
  [key: string]: unknown;
}

export type SoundTrack = {
  url: string;
}

export enum SoundTrackMood {
  chill = "chill",
  jazzy = "jazzy",
  sleepy = "sleepy"
}