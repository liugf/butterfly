@extends('layouts.default')

@section('content')

	<h2>创建新文章</h2>

	<hr/>

	<form method="POST" action="{{ route('articles.store') }}">
		@include('articles.form')

		<button type="submit" class="btn btn-primary">发表</button>

	</form>

@endsection