<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    public function __construct()
    {
        //
    }

	public function before($user, $ability)
	{
//		if (!$user->isMember()) {
//			return false;
//		}
	}

	public function update(User $user, Article $article)
	{
		return $user->id === $article->user_id;
	}
}
