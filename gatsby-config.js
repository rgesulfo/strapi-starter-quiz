module.exports = {
    plugins: [
       'gatsby-plugin-postcss',
       {
        resolve: `gatsby-source-strapi`,
        options: {
          apiURL: `http://localhost:1337`,
          queryLimit: 1000, // Default to 100
          contentTypes: [`quizzes`],
          // singleTypes: [`home-page`, `contact`],
          // Possibility to login with a strapi user, when content types are not publically available (optional).
          loginData: {
            identifier: "",
            password: "",
          },
        },
      },
    ]
}