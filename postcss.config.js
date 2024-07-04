const path = require('path');

module.exports = {
    plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...(process.env.NODE_ENV === 'production'
            ? [
                require('cssnano')({
                    preset: 'default',
                }),
            ]
            : []),
    ],
    input: 'assets/styles/main.css',  // Adjust path as per your restored structure
    output: {
        path: path.resolve(__dirname, 'build/assets/styles/'),
        filename: 'main.min.css',
    },
};
