var elixir = require('laravel-elixir');

elixir.config.sourcemaps = true;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('common/**/*.less', 'public/css/common.css')
        .less('articles/**/*.less', 'public/css/articles.css')
		.copy('resources/assets/css', 'public/css')
        .version('css/**/*.css');

	mix.scripts('common/**/*.js', 'public/js/common.js')
		.scripts('articles/**/*.js', 'public/js/articles.js')
		.copy('resources/assets/js/libs', 'public/js/libs')
		.version('js/**/*.js');

	mix.copy('resources/assets/img', 'public/img')
		.version('img/**/*.*');

	mix.copy('resources/assets/font', 'public/font');
});