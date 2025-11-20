export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs
    .filter(Boolean)
    .map(input => {
      if (typeof input === 'string') return input
      if (Array.isArray(input)) return input.filter(Boolean).join(' ')
      return ''
    })
    .filter(Boolean)
    .join(' ')
}

