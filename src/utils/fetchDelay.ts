export const delay = (ms: number): any => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
