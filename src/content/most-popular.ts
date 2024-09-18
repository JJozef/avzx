import { SITE_CONFIG } from '@/config'

const DEFAULT_PATH = `${SITE_CONFIG.url}/name`

export const MOST_POPULAR_CODE = {
  default: {
    tip: `// This is the default path.\n// Replace “name” with your app name.`,
    path: DEFAULT_PATH
  },
  text: {
    tip: `// You can use your own text.
// This must not be longer than 2 characters.
// If you can use text as a full name e.g.: Jhon Doe
// This will be transformed to: JD`,
    examples: [`${DEFAULT_PATH}?text=JD`, `${DEFAULT_PATH}?text=Jhon Doe`]
  },
  type: {
    tip: '// You can use “png” or “svg” as the type.',
    path: `${DEFAULT_PATH}?type=png`
  },
  size: {
    tip: '// Per default, the size is 120px.',
    path: `${DEFAULT_PATH}?size=120`
  }
}

export const SPECIAL_CODE = {
  rounded: `${DEFAULT_PATH}?rounded=true`,
  color: {
    tip: '// You can use a hexadecimal color, do not include the “#” symbol.',
    path: `${DEFAULT_PATH}?color=3742fa`
  },
  pattern: `${DEFAULT_PATH}?pattern=true`,
  emoji: {
    tip: '// Support emoji at the same time as text.',
    path: `${DEFAULT_PATH}?emoji=🚀`
  }
}
