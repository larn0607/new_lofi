
import { digitalOcean } from "../../common/resources";
import { SoundEffect, SoundTrack, SoundTrackMood } from "../../utils";
import Noises from "../noises";
import Chill from "../musics/chill"
import Jazzy from "../musics/jazzy"
import Sleepy from "../musics/sleepy"

const { ALARMS_ROOT_URL } = digitalOcean;

const effects: SoundEffect[] = [
  {
    type: "fire",
    name: "Campfire",
    url: Noises.campfire,
  },
  {
    type: "forest",
    name: "Forest",
    url: Noises.forestNight
  },
  {
    type: "rain_forest",
    name: "Forest Rain",
    url: Noises.rainForest
  },
  {
    type: "waves",
    name: "Waves",
    url: Noises.waves
  },
  {
    type: "fan",
    name: "Fan",
    url: Noises.fan
  },
  {
    type: "city",
    name: "City traffic",
    url: Noises.cityTraffic
  },
  {
    type: "storm",
    name: "Summer Storm",
    url: Noises.summerStorm
  },
  {
    type: "rain_street",
    name: "City Rain",
    url: Noises.rainCity
  },
  {
    type: "river",
    name: "River",
    url: Noises.river
  },
  {
    type: "birds",
    name: "Bird Chirping",
    url: Noises.birds
  },
  {
    type: "people",
    name: "People Talking",
    url: Noises.peopleTalkInside
  },
  {
    type: "wind",
    name: "Wind",
    url: Noises.wind
  },
  {
    type: "ocean",
    name: "Ocean",
    url: Noises.ocean
  },
  {
    type: "fireplace",
    name: "Fireplace",
    url: Noises.fireplace
  },
  {
    type: "snow",
    name: "Blizzard",
    url: Noises.snow
  },
  {
    type: "keyboard",
    name: "Keyboard",
    url: Noises.keyboard
  },
  {
    type: "underwater",
    name: "Underwater",
    url: Noises.underwater
  },
  {
    type: "space",
    name: "Deep Space",
    url: Noises.space
  },
  {
    type: "window_rain",
    name: "Window Rain",
    url: Noises.windowRain
  },
  {
    type: "train_noise",
    name: "Train",
    url: Noises.train
  },
  // {
  //   type: "thunders",
  //   name: "Thunders",
  //   url: Noises.
  // },
  // {
  //   type: "plane",
  //   name: "Plane",
  //   url: Noises.
  // }
];
const playlistsBase: { [key in SoundTrackMood]: SoundTrack[] } = {
  chill: [
    {
      url: Chill.chill1,
    },
    {
      url: Chill.chill2,
    },
    {
      url: Chill.chill3,
    },
    {
      url: Chill.chill4,
    },
    {
      url: Chill.chill5,
    },
    {
      url: Chill.chill6,
    },
    {
      url: Chill.chill7,
    },
    {
      url: Chill.chill8,
    },
    {
      url: Chill.chill9,
    },
    {
      url: Chill.chill10,
    },
    {
      url: Chill.chill11,
    },
    {
      url: Chill.chill12,
    },
    {
      url: Chill.chill13,
    },
    {
      url: Chill.chill14,
    },
    {
      url: Chill.chill15,
    },
    {
      url: Chill.chill16,
    },
    {
      url: Chill.chill17,
    },
    {
      url: Chill.chill18,
    },
    {
      url: Chill.chill19,
    },
    {
      url: Chill.chill20,
    },
    {
      url: Chill.chill21,
    },
    {
      url: Chill.chill22,
    },
    {
      url: Chill.chill23,
    },
    {
      url: Chill.chill24,
    },
  ],
  jazzy: [
    {
      url: Jazzy.jazzy1,
    },
    {
      url: Jazzy.jazzy2,
    },
    {
      url: Jazzy.jazzy3,
    },
    {
      url: Jazzy.jazzy4,
    },
    {
      url: Jazzy.jazzy5,
    },
    {
      url: Jazzy.jazzy6,
    },
    {
      url: Jazzy.jazzy7,
    },
    {
      url: Jazzy.jazzy8,
    },
    {
      url: Jazzy.jazzy9,
    },
    {
      url: Jazzy.jazzy10,
    },
    {
      url: Jazzy.jazzy11,
    },
    {
      url: Jazzy.jazzy12,
    },
    {
      url: Jazzy.jazzy13,
    },
    {
      url: Jazzy.jazzy14,
    },
    {
      url: Jazzy.jazzy15,
    },
    {
      url: Jazzy.jazzy16,
    },
    {
      url: Jazzy.jazzy17,
    },
    {
      url: Jazzy.jazzy18,
    },
    {
      url: Jazzy.jazzy19,
    },
    {
      url: Jazzy.jazzy20,
    },
    {
      url: Jazzy.jazzy21,
    },
    {
      url: Jazzy.jazzy22,
    },
    {
      url: Jazzy.jazzy23,
    },
    {
      url: Jazzy.jazzy24,
    },
    {
      url: Jazzy.jazzy25,
    },
  ],
  sleepy: [
    {
      url: Sleepy.sleepy1,
    },
    {
      url: Sleepy.sleepy2,
    },
    {
      url: Sleepy.sleepy3,
    },
    {
      url: Sleepy.sleepy4,
    },
    {
      url: Sleepy.sleepy5,
    },
    {
      url: Sleepy.sleepy6,
    },
    {
      url: Sleepy.sleepy7,
    },
    {
      url: Sleepy.sleepy8,
    },
    {
      url: Sleepy.sleepy9,
    },
    {
      url: Sleepy.sleepy10,
    },
    {
      url: Sleepy.sleepy11,
    },
    {
      url: Sleepy.sleepy12,
    },
    {
      url: Sleepy.sleepy13,
    },
    {
      url: Sleepy.sleepy14,
    },
    {
      url: Sleepy.sleepy15,
    },
    {
      url: Sleepy.sleepy16,
    },
    {
      url: Sleepy.sleepy17,
    },
    {
      url: Sleepy.sleepy18,
    },
    {
      url: Sleepy.sleepy19,
    },
  ],
};
const playlistsSpotify = {
  chill: {
    url: "https://open.spotify.com/embed/playlist/0iepisLXvVe5RxB3owHjlj?utm_source=generator",
  },
  jazzy: {
    url: "https://open.spotify.com/embed/playlist/4dJSLiR8n2ZQUccpyXYKvE?utm_source=generator",
  },
  sleepy: {
    url: "https://open.spotify.com/embed/playlist/1lVoSF8Bd6bQJaoEHFGegX?utm_source=generator",
  },
};
const alarms: string[] = [
  ALARMS_ROOT_URL + "Digital.mp3",
  ALARMS_ROOT_URL + "Easy+Tone.mp3",
  ALARMS_ROOT_URL + "Piano.mp3",
  ALARMS_ROOT_URL + "Ringtone.mp3",
  ALARMS_ROOT_URL + "Soft.mp3",
];
export { playlistsBase, playlistsSpotify, effects, alarms };
