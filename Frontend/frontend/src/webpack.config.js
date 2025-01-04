module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Fixed missing comma
    alias: {
      'react-router-dom': require.resolve('react-router-dom'), // Correct alias syntax
    },
  }
}