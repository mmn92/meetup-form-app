export const formatDate = input => {
  const dateString = input.slice(0, 8)
  if (dateString.length < 3) {
    return dateString
  }

  if (dateString.length < 6) {
    return dateString.slice(0, 2) + '/' + formatDate(dateString.slice(2))
  }

  return dateString.slice(0, 2) + '/' + dateString.slice(2, 4) + '/' + dateString.slice(4)
}