const storeConfig = {
  modules: {
    articles: {
      namespaced: true,
      state: {
        articleList: [
          {
            title: 'abc',
            body: 'description 1',
          },
          {
            title: 'efg',
            body: 'description 2',
          },
          {
            title: 'hij',
            body: 'description 3',
          },
        ],
      },
      getters: {
        getArticleFiltered: jest.fn(() => [
          {
            title: 'abc',
            body: 'description 1',
          },
          {
            title: 'efg',
            body: 'description 2',
          },
        ]),
      },
      actions: {
        getArticleList: jest.fn(),
      },
    },
  },
}

export default storeConfig
