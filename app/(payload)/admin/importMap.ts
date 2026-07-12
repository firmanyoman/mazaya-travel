import type { ImportMap } from 'payload'

import { MazayaHeaderBadge } from './components/MazayaHeaderBadge'
import { MazayaIcon } from './components/MazayaIcon'
import { MazayaLoginIntro } from './components/MazayaLoginIntro'
import { MazayaLogo } from './components/MazayaLogo'
import { MazayaNavNote } from './components/MazayaNavNote'

export const importMap: ImportMap = {
  './components/MazayaHeaderBadge#MazayaHeaderBadge': MazayaHeaderBadge,
  './components/MazayaIcon#MazayaIcon': MazayaIcon,
  './components/MazayaLoginIntro#MazayaLoginIntro': MazayaLoginIntro,
  './components/MazayaLogo#MazayaLogo': MazayaLogo,
  './components/MazayaNavNote#MazayaNavNote': MazayaNavNote,
}
