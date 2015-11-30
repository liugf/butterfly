<?php

use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Article;

class ArticleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		User::take(50)->get()->each(function($user) {
			$user->articles()->save(factory(Article::class)->make());
		});
    }
}
