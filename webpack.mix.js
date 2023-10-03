let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('main.js', 'assets')
   .sass('main.scss', 'assets')
    .options({
      processCssUrls: false,
      postCss: [ tailwindcss('tailwind.config.js') ],
  });