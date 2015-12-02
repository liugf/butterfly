var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.less('common/**/*.less', 'public/css/common.css')
        .less('articles/**/*.less', 'public/css/articles.css')
		.copy('resources/assets/css', 'public/css')

	mix.scripts('common/**/*.js', 'public/js/common.js')
		.scripts('articles/**/*.js', 'public/js/articles.js')
		.copy('resources/assets/js/libs', 'public/js/libs')

	mix.copy('resources/assets/img', 'public/img');

	mix.copy('resources/assets/font', 'public/font');

	mix.version(['css/**/*.css', 'js/**/*.js', 'img/**/*.*']);
});