@extends('layouts.default')

@section('content')

	<h2>{{ $article->title }}</h2>

	<hr/>

	{{ $article->content }}

@endsection