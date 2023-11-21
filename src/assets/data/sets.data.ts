import {
  cafeInPreview,
  cafeOutPreview,
  cafeThumb,
  forestInsidePreview,
  forestOutsidePreview,
  forestThumb,
  summerOutPreview,
  summerPreview,
  summerThumb,
  vanOutPreview,
  vanPreview,
  vanThumb,
  oceanPreview,
  oceanOutPreview,
  oceanThumb,
  chillVibes,
  livingRoom,
  bedRoom,
  lofi_desk,
  studyCity,
  studyBeach,
  studyMountain,
  cottage,
  cottageIn,
  cottageOut,
  bookCafe,
  bookOut,
  bookIn,
  kyoto,
  kyotoPark,
  kyotoStreet,
  dreamingScene,
  spacePW,
  underwaterPW,
  honoluluIn,
  honoluluOut,
  honoluluPW,
  trainJourney,
  trainJourneyCity,
  trainJourneyCountry,
  newYorkBedroom,
  newYorkCentralPark,
  newYorkPreview,
  greenHousePreview,
  greenHouse,
  backseat,
  backseatPreview,
  futurePreview,
  futureDesk,
  futureBedroom,
  slowGardenPreview,
  slowGarden,
  libraryPreview,
  library,
  artRoom,
  artRoomPreview,
  plane,
  planePreview,
  inthewoodsInside,
  inthewoodsOutside,
  inthewoodsPreview,
  fuji,
  fujiPreview,
  floatingPreview,
  floating,
  seaSideInside,
  seaSideOutside,
  seaSidePreview,
  sunsetCamping,
  sunsetCampingPreview,
  treeHouse,
  treeHousePreview,
  seoulInside,
  seoulOutside,
  seoulPreview
} from "../images";
import Videos from "../videos";
import { digitalOcean } from "../../common/resources";
import { Scene, SceneSet } from "../../utils";

const { SCENES_ROOT_URL, WALLPAPERS_ROOT_URL } = digitalOcean;

const scenes: { [key in string]: Scene } = {
  forestInside: {
    thumbnail: forestInsidePreview,
    wallpaper: forestInsidePreview,
    variants: {
      default: "" + Videos.forest.inside,
      rain_forest: SCENES_ROOT_URL + Videos.forest.insideRain,
      default_pixel: SCENES_ROOT_URL + Videos.forest.insidePix,
      rain_forest_pixel: SCENES_ROOT_URL + Videos.forest.insideRainPix,
    },
    actions: [
      {
        position: [70, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [15, 20],
        title: "Bird chirping",
        type: "sound",
        effect: "birds",
      }
    ],
  },
  forestOutside: {
    thumbnail: forestOutsidePreview,
    wallpaper: forestInsidePreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.forest.outside,
      rain_forest: SCENES_ROOT_URL + Videos.forest.outsideRain,
      default_pixel: SCENES_ROOT_URL + Videos.forest.outsidePix,
      rain_forest_pixel: SCENES_ROOT_URL + Videos.forest.outsideRainPix,
    },

    actions: [
      {
        position: [70, 70],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [10, 50],
        title: "Bird chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [67, 12],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
    ],
  },
  vanInside: {
    thumbnail: vanPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.van.in,
      rain_forest: SCENES_ROOT_URL + Videos.van.inRain,
    },

    wallpaper: vanPreview,
    actions: [
      {
        position: [50, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [55, 20],
        title: "Forest",
        type: "sound",
        effect: "forest",
      }
    ],
  },
  vanOutside: {
    thumbnail: vanOutPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.van.out,
      fire: SCENES_ROOT_URL + Videos.van.outFire,
    },
    wallpaper: vanOutPreview,
    actions: [
      {
        position: [10, 20],
        title: "Forest sound",
        type: "sound",
        effect: "forest",
      },
      {
        position: [42, 78],
        title: "Campfire sound",
        type: "sound",
        effect: "fire",
      }
    ],
  },
  library: {
    thumbnail: library,
    wallpaper: library,
    variants: {
      default: SCENES_ROOT_URL + Videos.library.outRain,
      window_rain: SCENES_ROOT_URL + Videos.library.inRain,
    },
    actions: [
      {
        position: [55, 25],
        title: "Thunders",
        type: "sound",
        effect: "thunders",
      },
      {
        position: [66, 24],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      },
      {
        position: [60, 56],
        title: "Fireplace",
        type: "sound",
        effect: "fireplace",
      }
    ],
  },
  artRoom: {
    thumbnail: artRoom,
    wallpaper: artRoom,
    variants: {
      default: SCENES_ROOT_URL + Videos.artRoom.inDay,
      rain_street: SCENES_ROOT_URL + Videos.artRoom.inDayRain,
      default_night: SCENES_ROOT_URL + Videos.artRoom.inNight,
      rain_street_night: SCENES_ROOT_URL + Videos.artRoom.inNightRain,
    },
    actions: [
      {
        position: [49, 36],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [56, 14],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [60, 29],
        title: "Wind",
        type: "sound",
        effect: "wind",
      }
    ],
  },

  cafeInside: {
    thumbnail: cafeInPreview,
    wallpaper: cafeInPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.cafe.inDay,
      default_night: SCENES_ROOT_URL + Videos.cafe.inNight,
      rain_street_night: SCENES_ROOT_URL + Videos.cafe.inNightRain,
      rain_street: SCENES_ROOT_URL + Videos.cafe.inDayRain,
    },

    actions: [
      {
        position: [20, 38],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [50, 70],
        title: "People Talks",
        type: "sound",
        effect: "people",
      }
    ],
  },
  cafeOutside: {
    thumbnail: cafeOutPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.cafe.outDay,
      rain_street: SCENES_ROOT_URL + Videos.cafe.outDayRain,
      default_night: SCENES_ROOT_URL + Videos.cafe.outNight,
      rain_street_night: SCENES_ROOT_URL + Videos.cafe.outNightRain,
    },
    wallpaper: cafeOutPreview,
    actions: [
      {
        position: [75, 80],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [35, 35],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      }
    ],
  },
  summerInside: {
    thumbnail: summerPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.summer.inside,
      storm: SCENES_ROOT_URL + Videos.summer.insideRain,
    },
    wallpaper: summerPreview,
    actions: [
      {
        position: [30, 25],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
      {
        position: [60, 45],
        title: "Fan",
        type: "sound",
        effect: "fan",
      },
    ],
  },
  summerOutside: {
    thumbnail: summerOutPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.summer.outside,
      storm: SCENES_ROOT_URL + Videos.summer.outsideRain,
      default_pixel: SCENES_ROOT_URL + Videos.summer.outsidePix,
      storm_pixel: SCENES_ROOT_URL + Videos.summer.outsideRainPix,
    },
    wallpaper: summerOutPreview,

    actions: [
      {
        position: [75, 80],
        title: "Sea Waves",
        type: "sound",
        effect: "waves",
      },
      {
        position: [85, 15],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      }
    ],
  },
  oceanInside: {
    thumbnail: oceanPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.ocean.in,
      storm: SCENES_ROOT_URL + Videos.ocean.inRain,
    },
    wallpaper: oceanPreview,

    actions: [
      {
        position: [8, 59],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
      {
        position: [59, 31],
        title: "Summer Storm",
        type: "sound",
        effect: "storm",
      },
    ],
  },
  oceanOutside: {
    thumbnail: oceanOutPreview,
    variants: {
      default: SCENES_ROOT_URL + Videos.ocean.out,
      storm: SCENES_ROOT_URL + Videos.ocean.outRain,
    },
    wallpaper: oceanOutPreview,

    actions: [
      {
        position: [8, 15],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
      {
        position: [42, 64],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
      {
        position: [48, 13],
        title: "Summer Storm",
        type: "sound",
        effect: "storm",
      },
    ],
  },
  lrBedRoom: {
    thumbnail: bedRoom,
    variants: {
      default: SCENES_ROOT_URL + Videos.chillVibes.bed,
      rain_street: SCENES_ROOT_URL + Videos.chillVibes.bedRain,
      default_night: SCENES_ROOT_URL + Videos.chillVibes.bedNight,
      rain_street_night: SCENES_ROOT_URL + Videos.chillVibes.bedRainNight,
    },
    wallpaper: bedRoom,
    actions: [
      {
        position: [82, 20],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [7, 18],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  lrLivingRoom: {
    thumbnail: livingRoom,
    variants: {
      default: SCENES_ROOT_URL + Videos.chillVibes.lr,
      rain_street: SCENES_ROOT_URL + Videos.chillVibes.lrRain,
      default_night: SCENES_ROOT_URL + Videos.chillVibes.lrNight,
      rain_street_night: SCENES_ROOT_URL + Videos.chillVibes.lrNightRain,
    },
    wallpaper: livingRoom,
    actions: [
      {
        position: [40, 14],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [4, 68],
        title: "Fireplace",
        type: "sound",
        effect: "fireplace",
      },
    ],
  },
  deskCity: {
    variants: { default: SCENES_ROOT_URL + Videos.study.city },
    thumbnail: studyCity,
    wallpaper: studyCity,
    actions: [
      {
        position: [44, 52.5],
        title: "Change place",
        type: "next-set",
      },
      {
        position: [40, 15],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  deskBeach: {
    variants: { default: SCENES_ROOT_URL + Videos.study.beach },
    thumbnail: studyBeach,
    wallpaper: studyBeach,
    actions: [
      {
        position: [44, 52.5],
        title: "Change place",
        type: "next-set",
      },
      {
        position: [40, 15],
        title: "Waves",
        type: "sound",
        effect: "waves",
      },
    ],
  },
  deskSnow: {
    variants: {
      default: SCENES_ROOT_URL + Videos.study.snow,
      snow: SCENES_ROOT_URL + Videos.study.snowBlizzard,
    },
    thumbnail: studyMountain,
    wallpaper: WALLPAPERS_ROOT_URL + "study/snow.jpg",
    actions: [
      {
        position: [44, 52.5],
        title: "Change place",
        type: "next-set",
      },
      {
        position: [40, 15],
        title: "Blizzard",
        type: "sound",
        effect: "snow",
      },
    ],
  },
  cottageIn: {
    variants: {
      default: SCENES_ROOT_URL + Videos.cottage.in,
      snow: SCENES_ROOT_URL + Videos.cottage.inSnow,
    },
    thumbnail: cottageIn,
    wallpaper: WALLPAPERS_ROOT_URL + "cottage/interior.png",
    actions: [
      {
        position: [10, 70],
        title: "Fireplace",
        type: "sound",
        effect: "fireplace",
      },
      {
        position: [30, 15],
        title: "Blizzard",
        type: "sound",
        effect: "snow",
      },
      {
        position: [50, 50],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  cottageOut: {
    variants: {
      default: SCENES_ROOT_URL + Videos.cottage.out,
      snow: SCENES_ROOT_URL + Videos.cottage.outSnow,
    },
    thumbnail: cottageOut,
    wallpaper: WALLPAPERS_ROOT_URL + "cottage/exterior.png",
    actions: [
      {
        position: [25, 45],
        title: "Blizzard",
        type: "sound",
        effect: "snow",
      },
    ],
  },

  bookCafeIn: {
    variants: {
      default: SCENES_ROOT_URL + Videos.bookCafe.in,
      default_night: SCENES_ROOT_URL + Videos.bookCafe.inNight,
      rain_street: SCENES_ROOT_URL + Videos.bookCafe.inRain,
      rain_street_night: SCENES_ROOT_URL + Videos.bookCafe.inRainNight,
    },
    thumbnail: bookIn,

    wallpaper: WALLPAPERS_ROOT_URL + "book-cafe/int.png",
    actions: [
      {
        position: [17, 20],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [84, 72],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  bookCafeOut: {
    variants: {
      default: SCENES_ROOT_URL + Videos.bookCafe.out,
      default_night: SCENES_ROOT_URL + Videos.bookCafe.outNight,
      rain_street: SCENES_ROOT_URL + Videos.bookCafe.outRain,
      rain_street_night: SCENES_ROOT_URL + Videos.bookCafe.outRainNight,
    },
    thumbnail: bookOut,
    wallpaper: WALLPAPERS_ROOT_URL + "book-cafe/ext.png",
    actions: [
      {
        position: [6, 40],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [30, 65],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [60, 60],
        title: "Enter",
        type: "next-set",
      },
    ],
  },
  kyotoPark: {
    variants: {
      default: SCENES_ROOT_URL + Videos.kyoto.park,
      default_night: SCENES_ROOT_URL + Videos.kyoto.parkNight,
    },
    thumbnail: kyotoPark,
    wallpaper: WALLPAPERS_ROOT_URL + "kyoto/kyoto-park.png",
    actions: [
      {
        position: [30, 20],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [50, 70],
        title: "River",
        type: "sound",
        effect: "river",
      },
    ],
  },
  kyotoStreet: {
    variants: {
      default: SCENES_ROOT_URL + Videos.kyoto.street,
      default_night: SCENES_ROOT_URL + Videos.kyoto.streetNight,
    },
    thumbnail: kyotoStreet,
    wallpaper: WALLPAPERS_ROOT_URL + "kyoto/kyoto-street.png",

    actions: [
      {
        position: [50, 27],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [30, 85],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  underwater: {
    variants: {
      default: SCENES_ROOT_URL + Videos.dreaming.underwater,
    },
    thumbnail: underwaterPW,
    wallpaper: WALLPAPERS_ROOT_URL + "am-i-dreaming/underwater-wp.png",

    actions: [
      {
        position: [40, 27],
        title: "Underwater",
        type: "sound",
        effect: "underwater",
      },
      {
        position: [67, 77],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  space: {
    variants: {
      default: SCENES_ROOT_URL + Videos.dreaming.space,
    },
    thumbnail: spacePW,
    wallpaper: WALLPAPERS_ROOT_URL + "am-i-dreaming/space-wp.png",

    actions: [
      {
        position: [40, 27],
        title: "Deep space",
        type: "sound",
        effect: "space",
      },
      {
        position: [67, 77],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  honoluluIN: {
    variants: {
      default: SCENES_ROOT_URL + Videos.honolulu.inside,
      storm: SCENES_ROOT_URL + Videos.honolulu.insideRain,
      default_night: SCENES_ROOT_URL + Videos.honolulu.insideNight,
      storm_night: SCENES_ROOT_URL + Videos.honolulu.insideNightRain,
    },
    thumbnail: honoluluIn,
    wallpaper: WALLPAPERS_ROOT_URL + "honolulu/honolulu-balcony.png",

    actions: [
      {
        position: [40, 27],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
      {
        position: [67, 82],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  honoluluOut: {
    variants: {
      default: SCENES_ROOT_URL + Videos.honolulu.outside,
      storm: SCENES_ROOT_URL + Videos.honolulu.outsideRain,
      default_night: SCENES_ROOT_URL + Videos.honolulu.outsideNight,
      storm_night: SCENES_ROOT_URL + Videos.honolulu.outsideNightRain,
    },
    thumbnail: honoluluOut,
    wallpaper: WALLPAPERS_ROOT_URL + "honolulu/honolulu-beach.png",

    actions: [
      {
        position: [40, 27],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
      {
        position: [67, 60],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
    ],
  },
  trainJourneyCity: {
    variants: {
      default: SCENES_ROOT_URL + Videos.train.cityDay,
      window_rain: SCENES_ROOT_URL + Videos.train.cityDayRain,
      default_night: SCENES_ROOT_URL + Videos.train.cityNight,
      window_rain_night: SCENES_ROOT_URL + Videos.train.cityNightRain,
    },
    thumbnail: trainJourneyCity,
    wallpaper: WALLPAPERS_ROOT_URL + "train/train-city.png",

    actions: [
      {
        position: [25, 27],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      },
      {
        position: [64, 68],
        title: "Train",
        type: "sound",
        effect: "train_noise",
      },
      {
        position: [16, 85],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  trainJourneyCountry: {
    variants: {
      default: SCENES_ROOT_URL + Videos.train.countryDay,
      window_rain: SCENES_ROOT_URL + Videos.train.countryRainDay,
      default_night: SCENES_ROOT_URL + Videos.train.countryNight,
      window_rain_night: SCENES_ROOT_URL + Videos.train.countryRainNight,
    },
    thumbnail: trainJourneyCountry,
    wallpaper: WALLPAPERS_ROOT_URL + "train/train-country.png",

    actions: [
      {
        position: [25, 27],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      },
      {
        position: [64, 68],
        title: "Train",
        type: "sound",
        effect: "train_noise",
      },
      {
        position: [16, 85],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  newYorkBedroom: {
    variants: {
      default: SCENES_ROOT_URL + Videos.newYork.bedRoomDay,
      default_night: SCENES_ROOT_URL + Videos.newYork.bedRoomNight,
      rain_street: SCENES_ROOT_URL + Videos.newYork.bedRoomDayRain,
      rain_street_night: SCENES_ROOT_URL + Videos.newYork.bedRoomNightRain,
    },
    thumbnail: newYorkBedroom,
    wallpaper: WALLPAPERS_ROOT_URL + "new-york/bedroom-day.png",

    actions: [
      {
        position: [57, 27],
        title: "City rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [8, 30],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ]
  },
  newYorkCentralPark: {
    variants: {
      default: SCENES_ROOT_URL + Videos.newYork.centralParkDay,
      default_night: SCENES_ROOT_URL + Videos.newYork.centralParkNight,
      rain_street: SCENES_ROOT_URL + Videos.newYork.centralParkDayRain,
      rain_street_night: SCENES_ROOT_URL + Videos.newYork.centralParkNightRain,
    },
    thumbnail: newYorkCentralPark,
    wallpaper: WALLPAPERS_ROOT_URL + "new-york/central-park.png",

    actions: [
      {
        position: [52, 20],
        title: "City rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [15, 32],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ]
  },
  greenHouse: {
    variants: {
      default: SCENES_ROOT_URL + Videos.greenHouse.greenHouseDay,
      default_night: SCENES_ROOT_URL + Videos.greenHouse.greenHouseNight,
      rain_forest: SCENES_ROOT_URL + Videos.greenHouse.greenHouseDayRain,
      rain_forest_night: SCENES_ROOT_URL + Videos.greenHouse.greenHouseNightRain,
    },
    thumbnail: greenHouse,
    wallpaper: WALLPAPERS_ROOT_URL + "green-house/garden.png",

    actions: [
      {
        position: [20, 20],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [43, 55],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [75, 20],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ]
  },
  seoulInside: {
    variants: {
      default: SCENES_ROOT_URL + Videos.seoul.insideDay,
      default_night: SCENES_ROOT_URL + Videos.seoul.insideNight,
      rain_street: SCENES_ROOT_URL + Videos.seoul.insideDayRain,
      rain_street_night: SCENES_ROOT_URL + Videos.seoul.insideNightRain,
    },
    thumbnail: seoulInside,
    wallpaper: WALLPAPERS_ROOT_URL + "seoul/seoul-indoor.png",

    actions: [
      {
        position: [39, 82],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [59, 44],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
    ]
  },
  seoulOutside: {
    variants: {
      default: SCENES_ROOT_URL + Videos.seoul.outsideDay,
      default_night: SCENES_ROOT_URL + Videos.seoul.outsideNight,
      rain_street: SCENES_ROOT_URL + Videos.seoul.outsideDayRain,
      rain_street_night: SCENES_ROOT_URL + Videos.seoul.outsideNightRain,
    },
    thumbnail: seoulOutside,
    wallpaper: WALLPAPERS_ROOT_URL + "seoul/seoul-outdoor.png",

    actions: [
      {
        position: [36, 28],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [85, 70],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      }
    ]
  },
  backseat: {
    variants: {
      default: SCENES_ROOT_URL + Videos.backseat.backseatNight,
      window_rain: SCENES_ROOT_URL + Videos.backseat.backseatNightRain,
    },
    thumbnail: backseat,
    wallpaper: WALLPAPERS_ROOT_URL + "backseat/drive.png",

    actions: [
      {
        position: [36, 20],
        title: "Thunders",
        type: "sound",
        effect: "thunders",
      },
      {
        position: [36, 60],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [60, 20],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      }
    ]
  },
  futureDesk: {
    variants: {
      default: SCENES_ROOT_URL + Videos.future.deskGalaxy,
      default_night: SCENES_ROOT_URL + Videos.future.deskCity,
    },
    thumbnail: futureDesk,
    wallpaper: WALLPAPERS_ROOT_URL + "future/desk-galaxy.png",

    actions: [
      {
        position: [78, 40],
        title: "Deep space",
        type: "sound",
        effect: "space",
      },
      {
        position: [40, 65],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [78, 40],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      }
    ]
  },
  futureBedroom: {
    variants: {
      default: SCENES_ROOT_URL + Videos.future.bedroomGalaxy,
      default_night: SCENES_ROOT_URL + Videos.future.bedroomCity,
    },
    thumbnail: futureBedroom,
    wallpaper: WALLPAPERS_ROOT_URL + "future/bedroom-galaxy.png",

    actions: [
      {
        position: [78, 40],
        title: "Deep space",
        type: "sound",
        effect: "space",
      },
      {
        position: [60, 54],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [78, 40],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      }
    ]
  },
  slowGarden: {
    variants: {
      default: SCENES_ROOT_URL + Videos.slowGarden.gardenDay,
      default_night: SCENES_ROOT_URL + Videos.slowGarden.gardenNight,
    },
    thumbnail: slowGarden,
    wallpaper: WALLPAPERS_ROOT_URL + "slowgarden/slowgarden.jpeg",

    actions: [
      {
        position: [40, 30],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [44, 80],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [27, 50],
        title: "Wind",
        type: "sound",
        effect: "wind"
      }
    ]
  },
  plane: {
    variants: {
      default: SCENES_ROOT_URL + Videos.aboveTheClouds.planeDay,
      default_night: SCENES_ROOT_URL + Videos.aboveTheClouds.planeNight,
    },
    thumbnail: plane,
    wallpaper: WALLPAPERS_ROOT_URL + "plane/plane.png",

    actions: [
      {
        position: [70, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [30, 50],
        title: "Plane",
        type: "sound",
        effect: "plane",
      },
      {
        position: [60, 70],
        title: "Brown noise",
        type: "sound",
        effect: "brown_noise"
      }
    ]
  },
  inTheWoodsInside: {
    variants: {
      default: SCENES_ROOT_URL + Videos.inTheWoods.insideSun,
      rain_forest: SCENES_ROOT_URL + Videos.inTheWoods.insideRain,
    },
    thumbnail: inthewoodsInside,
    wallpaper: WALLPAPERS_ROOT_URL + "inthewoods/inside.jpg",

    actions: [
      {
        position: [27, 20],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [58, 34],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ]
  },
  inTheWoodsOutside: {
    variants: {
      default: SCENES_ROOT_URL + Videos.inTheWoods.outsideSun,
      rain_forest: SCENES_ROOT_URL + Videos.inTheWoods.outsideRain,
    },
    thumbnail: inthewoodsOutside,
    wallpaper: WALLPAPERS_ROOT_URL + "inthewoods/outside.jpg",

    actions: [
      {
        position: [13, 47],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [44, 35],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [78, 40],
        title: "Forest sound",
        type: "sound",
        effect: "forest",
      },
    ]
  },
  fuji: {
    variants: {
      default: SCENES_ROOT_URL + Videos.fuji.day,
      default_night: SCENES_ROOT_URL + Videos.fuji.night,
    },
    thumbnail: fuji,
    wallpaper: WALLPAPERS_ROOT_URL + "Fuji/fuji2.jpg",

    actions: [
      {
        position: [4, 50],
        title: "Forest sound",
        type: "sound",
        effect: "forest",
      },
      {
        position: [44, 78],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [77, 45],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ]
  },
  floating: {
    variants: {
      default: SCENES_ROOT_URL + Videos.floating.day,
      default_night: SCENES_ROOT_URL + Videos.floating.night,
    },
    thumbnail: floating,
    wallpaper: WALLPAPERS_ROOT_URL + "floating/floating.jpg",

    actions: [
      {
        position: [10, 35],
        title: "Wind",
        type: "sound",
        effect: "wind"
      },
      {
        position: [25, 55],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
      {
        position: [70, 60],
        title: "Underwater",
        type: "sound",
        effect: "underwater",
      }
    ]
  },
  seaSideInside: {
    variants: {
      default: SCENES_ROOT_URL + Videos.seaSide.insideDay,
      default_night: SCENES_ROOT_URL + Videos.seaSide.insideNight,
      storm: SCENES_ROOT_URL + Videos.seaSide.insideDayRain,
      storm_night: SCENES_ROOT_URL + Videos.seaSide.insideNightRain,
    },
    thumbnail: seaSideInside,
    wallpaper: WALLPAPERS_ROOT_URL + "seaside/room.jpg",

    actions: [
      {
        position: [40, 50],
        title: "Waves",
        type: "sound",
        effect: "waves",
      },
      {
        position: [25, 20],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      }
    ]
  },
  seaSideOutside: {
    variants: {
      default: SCENES_ROOT_URL + Videos.seaSide.outsideDay,
      default_night: SCENES_ROOT_URL + Videos.seaSide.outsideNight,
      storm: SCENES_ROOT_URL + Videos.seaSide.outsideDayRain,
      storm_night: SCENES_ROOT_URL + Videos.seaSide.outsideNightRain,
    },
    thumbnail: seaSideOutside,
    wallpaper: WALLPAPERS_ROOT_URL + "seaside/outside.jpg",

    actions: [
      {
        position: [67, 60],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
      {
        position: [40, 60],
        title: "Waves",
        type: "sound",
        effect: "waves",
      },
      {
        position: [65, 25],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      }
    ]
  },
  sunsetCamping: {
    variants: {
      default: SCENES_ROOT_URL + Videos.sunsetCamping.sunny,
      rain_forest: SCENES_ROOT_URL + Videos.sunsetCamping.rainy,
    },
    thumbnail: sunsetCamping,
    wallpaper: WALLPAPERS_ROOT_URL + "sunset-camping/camping.png",

    actions: [
      {
        position: [63, 76],
        title: "Campfire sound",
        type: "sound",
        effect: "fire",
      },
      {
        position: [34, 38],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [77, 16],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ]
  },
  treeHouse: {
    variants: {
      default: SCENES_ROOT_URL + Videos.treeHouse.day,
      default_night: SCENES_ROOT_URL + Videos.treeHouse.night,
      rain_forest: SCENES_ROOT_URL + Videos.treeHouse.dayRain,
      rain_forest_night: SCENES_ROOT_URL + Videos.treeHouse.nightRain
    },
    thumbnail: treeHouse,
    wallpaper: WALLPAPERS_ROOT_URL + "treehouse/treehouse.jpg",

    actions: [
      {
        position: [32, 68],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [63, 45],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [72, 25],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      }
    ]
  }
};

const sets: SceneSet[] = [

  {
    _id: "lofi_cafe",
    thumbnail: cafeThumb,
    name: "Lofi cafè",
    scenes: [scenes.cafeOutside, scenes.cafeInside],
    effects: ["city", "rain_street", "people", "rain_window"],
  },

  {
    _id: "in_the_woods",
    thumbnail: inthewoodsPreview,
    name: "In the Woods",
    scenes: [scenes.inTheWoodsInside, scenes.inTheWoodsOutside],
    effects: ["rain_forest", "birds", "forest"]
  },

  {
    _id: "tree_house",
    thumbnail: treeHousePreview,
    name: "Tree House",
    scenes: [scenes.treeHouse],
    effects: ["rain_forest", "birds", "keyboard"],
  },

  {
    _id: "sunset_camping",
    thumbnail: sunsetCampingPreview,
    name: "Sunset Camping",
    scenes: [scenes.sunsetCamping],
    effects: ["rain_forest", "birds", "fire"],
  },

  {
    _id: "sea_side",
    thumbnail: seaSidePreview,
    name: "Sea Side",
    scenes: [scenes.seaSideInside, scenes.seaSideOutside],
    effects: ["ocean", "waves", "storm"],
  },

  {
    _id: "floating",
    thumbnail: floatingPreview,
    name: "Floating",
    scenes: [scenes.floating],
    effects: ["wind", "ocean", "underwater"],
  },

  {
    _id: "fuji",
    thumbnail: fujiPreview,
    name: "Fuji",
    scenes: [scenes.fuji],
    effects: ["forest", "river", "birds"],
  },

  {
    _id: "plane",
    thumbnail: planePreview,
    name: "Above the clouds",
    scenes: [scenes.plane],
    effects: ["keyboard", "plane", "brown_noise"],
  },

  {
    _id: "artroom",
    thumbnail: artRoomPreview,
    name: "Art room",
    scenes: [scenes.artRoom],
    effects: ["birds", "rain_street", "wind"],
  },

  {
    _id: "library",
    thumbnail: libraryPreview,
    name: "Library",
    scenes: [scenes.library],
    effects: ["thunders", "window_rain", "fireplace"],
  },

  {
    _id: "slowgarden",
    thumbnail: slowGardenPreview,
    name: "Slow Garden",
    scenes: [scenes.slowGarden],
    effects: ["river", "birds", "wind"],
  },

  {
    _id: "seoul",
    thumbnail: seoulPreview,
    name: "Seoul",
    scenes: [scenes.seoulInside, scenes.seoulOutside],
    effects: ["keyboard", "city", "rain_street"],
  },

  {
    _id: "future",
    thumbnail: futurePreview,
    name: "Future",
    scenes: [scenes.futureBedroom, scenes.futureDesk],
    effects: ["keyboard", "city", "space"],
  },

  {
    _id: "backseat",
    thumbnail: backseatPreview,
    name: "Backseat",
    scenes: [scenes.backseat],
    effects: ["city", "thunders", "window_rain"],
  },

  {
    _id: "green_house",
    thumbnail: greenHousePreview,
    name: "Green House",
    scenes: [scenes.greenHouse],
    effects: ["rain_forest", "river", "birds"],
  },

  {
    _id: "new_york",
    thumbnail: newYorkPreview,
    name: "New York",
    scenes: [scenes.newYorkBedroom, scenes.newYorkCentralPark],
    effects: ["city", "rain_street", "birds"],
  },

  {
    _id: "honolulu",
    thumbnail: honoluluPW,
    name: "Honolulu",
    scenes: [scenes.honoluluIN, scenes.honoluluOut],
    effects: ["keyboard", "storm", "ocean"],
  },

  {
    _id: "train_journey",
    thumbnail: trainJourney,
    name: "Train Journey",
    scenes: [scenes.trainJourneyCity, scenes.trainJourneyCountry],
    effects: ["window_rain", "train_noise", "keyboard"],
  },

  {
    _id: "dreaming",
    thumbnail: dreamingScene,
    name: "Am I Dreaming?",
    scenes: [scenes.space, scenes.underwater],
    effects: ["keyboard", "space", "underwater"],
  },
  {
    _id: "kyoto",
    thumbnail: kyoto,
    name: "Kyoto",
    scenes: [scenes.kyotoStreet, scenes.kyotoPark],
    effects: ["city", "birds", "river"],
  },
  {
    _id: "chill_vibes",
    thumbnail: chillVibes,
    name: "Chill Vibes",
    scenes: [scenes.lrBedRoom, scenes.lrLivingRoom],
    effects: ["city", "rain_street", "fireplace"],
  },

  {
    _id: "book_cafe",
    thumbnail: bookCafe,
    name: "Book Cafe",
    scenes: [scenes.bookCafeOut, scenes.bookCafeIn],
    effects: ["city", "rain_street", "keyboard"],
  },

  {
    _id: "cottage",
    thumbnail: cottage,
    name: "Northern Lights",
    scenes: [scenes.cottageIn, scenes.cottageOut],
    effects: ["snow", "keyboard", "fireplace"],
  },
  {
    _id: "desk_lofi",
    thumbnail: lofi_desk,
    name: "Lofi Desk",
    scenes: [scenes.deskCity, scenes.deskBeach, scenes.deskSnow],
    effects: ["city", "waves", "snow"],
  },
  {
    _id: "forest_house",
    thumbnail: forestThumb,
    name: "Forest House",
    scenes: [scenes.forestInside, scenes.forestOutside],
    effects: ["rain_forest", "birds", "river"],
  },
  {
    _id: "ocean_tale",
    thumbnail: oceanThumb,
    name: "Ocean Tales",
    scenes: [scenes.oceanInside, scenes.oceanOutside],
    effects: ["ocean", "wind", "storm"],
  },
  {
    _id: "van_life",
    thumbnail: vanThumb,
    name: "Van Life",
    scenes: [scenes.vanInside, scenes.vanOutside],
    effects: ["fire", "forest", "rain_forest"],
  },

  {
    _id: "summer_days",
    thumbnail: summerThumb,
    name: "Summer Days",
    scenes: [scenes.summerInside, scenes.summerOutside],
    effects: ["storm", "fan", "waves"],
  },
];

export { sets };
