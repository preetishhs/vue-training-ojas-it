const storeConfig = {
  modules: {
    auth: {
      namespaced: true,
      state: {
        auth: {
          email: 'phs@gmail.com',
          password: '1234',
          status: true,
        },
      },
      getters: {
        isLoggedIn: () => true,
      },
      actions: {
        logoutUser: jest.fn(),
        loginUser: jest.fn(
          Promise.resolve({
            message: 'successful',
            status: true,
          })
        ),
      },
    },
    articles: {},
  },
}

export default storeConfig
