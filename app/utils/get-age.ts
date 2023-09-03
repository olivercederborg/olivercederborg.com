export const getAge = () => {
  const birthday = new Date(1997, 6, 21)
  const today = new Date()
  const age = today.getFullYear() - birthday.getFullYear()
  const month = today.getMonth() - birthday.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    return age - 1
  }
  return age
}
