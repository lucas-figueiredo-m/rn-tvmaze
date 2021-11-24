import { format } from 'date-fns'

export const removeHtml = (text: string) : string => {
  return text
    .replace('<p>', '')
    .replace('</p>', '')
    .replace('<b>', '')
    .replace('</b>', '')
}

export const formatDate = (date: Date): string => {
  return format(new Date(date), 'MMM do, yyyy')
} 