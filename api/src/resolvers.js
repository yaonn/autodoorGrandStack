import Qrcode from 'qrcode'

const createQrcode = () => {
  return new Promise((resolve, reject) => {
    Qrcode.toDataURL(
      'https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch',
      {},
      (err, url) => {
        if (err) return reject(err)
        resolve(url)
      }
    )
  })
}

export const resolvers = {
  Query: {
    qrcode: async () => {
      try {
        return await createQrcode()
      } catch (err) {
        return err
      }
    },
  },
}
