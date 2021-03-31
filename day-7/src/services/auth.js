export function login(data) {
  return new Promise((resolve, reject) => {
    if (data.email === 'phs' && data.password === '1234') {
      return resolve({
        message: 'successful',
        status: true,
        ...data,
      })
    } else {
      return reject({ message: 'failed', status: false })
    }
  })
}
