import md5 from 'md5'

const generateAuthString = (password: string): string => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const authString = `${password}_${timestamp}`
  return md5(authString)
}

export { generateAuthString }
