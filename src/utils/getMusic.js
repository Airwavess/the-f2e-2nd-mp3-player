import Betterdays from '../assets/music/cover/betterdays.jpg'
import Dubstep from '../assets/music/cover/dubstep.jpg'
import Energy from '../assets/music/cover/energy.jpg'
import Epic from '../assets/music/cover/epic.jpg'
import Funnysong from '../assets/music/cover/funnysong.jpg'
import Onceagain from '../assets/music/cover/onceagain.jpg'
import Slowmotion from '../assets/music/cover/slowmotion.jpg'
import Sunny from '../assets/music/cover/sunny.jpg'
import Tenderness from '../assets/music/cover/tenderness.jpg'
import Tomorrow from '../assets/music/cover/tomorrow.jpg'
import Acousticbreeze from '../assets/music/cover/acoustic-acousticbreeze.jpg'
import Buddy from '../assets/music/cover/acoustic-buddy.jpg'
import Cute from '../assets/music/cover/acoustic-cute.jpg'
import Ukulele from '../assets/music/cover/acoustic-ukulele.jpg'

import MP3Betterdays from '../assets/music/all-betterdays.mp3'
import MP3Dubstep from '../assets/music/all-dubstep.mp3'
import MP3Energy from '../assets/music/all-energy.mp3'
import MP3Epic from '../assets/music/all-epic.mp3'
import MP3Funnysong from '../assets/music/all-funnysong.mp3'
import MP3Onceagain from '../assets/music/all-onceagain.mp3'
import MP3Slowmotion from '../assets/music/all-slowmotion.mp3'
import MP3Sunny from '../assets/music/all-sunny.mp3'
import MP3Tenderness from '../assets/music/all-tenderness.mp3'
import MP3Tomorrow from '../assets/music/all-tomorrow.mp3'
import MP3Acousticbreeze from '../assets/music/acoustic-acousticbreeze.mp3'
import MP3Buddy from '../assets/music/acoustic-buddy.mp3'
import MP3Cute from '../assets/music/acoustic-cute.mp3'
import MP3Ukulele from '../assets/music/acoustic-ukulele.mp3'

const data = {
  betterdays: {
    cover: Betterdays,
    mp3: MP3Betterdays
  },
  buddy: {
    cover: Buddy,
    mp3: MP3Buddy
  },
  dubstep: {
    cover: Dubstep,
    mp3: MP3Dubstep
  },
  energy: {
    cover: Energy,
    mp3: MP3Energy
  },
  epic: {
    cover: Epic,
    mp3: MP3Epic
  },
  funnysong: {
    cover: Funnysong,
    mp3: MP3Funnysong
  },
  onceagain: {
    cover: Onceagain,
    mp3: MP3Onceagain
  },
  slowmotion: {
    cover: Slowmotion,
    mp3: MP3Slowmotion
  },
  sunny: {
    cover: Sunny,
    mp3: MP3Sunny
  },
  tenderness: {
    cover: Tenderness,
    mp3: MP3Tenderness
  },
  tomorrow: {
    cover: Tomorrow,
    mp3: MP3Tomorrow
  },
  acousticbreeze: {
    cover: Acousticbreeze,
    mp3: MP3Acousticbreeze
  },
  cute: {
    cover: Cute,
    mpe: MP3Cute
  },
  ukuletel: {
    cover: Ukulele,
    mp3: MP3Ukulele
  }
}

export const getMusic = name => {
  return data[name]
}
