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

export const formatNumber = (value: number): string => {
  if (value <= 9)
    return `0${value}`

  return `${value}`
}