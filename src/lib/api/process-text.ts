import { SITE_CONFIG } from '@/config'
import { DEFAULT_AVATAR_CONFIG } from '@/lib/constants'

export function processText(text: string): string {
  if (!text || text.trim() === '') return DEFAULT_AVATAR_CONFIG.text

  const trimmedText = String(text).trim()

  if (trimmedText.toLowerCase() === SITE_CONFIG.name.toLowerCase())
    return SITE_CONFIG.name

  const words = trimmedText.split(/\s+/).filter((word) => word.length > 0)

  let result: string

  if (words.length > 1) {
    result = words
      .map((word) => word.charAt(0))
      .join('')
      .slice(0, 2)
  } else {
    result = trimmedText.slice(0, 2)
  }

  result = result.toUpperCase()

  return result.length === 0 ? SITE_CONFIG.name : result
}
