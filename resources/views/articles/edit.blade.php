@extends('layouts.default')

@section('content')

	<h2>编辑文章</h2>

	<hr/>

	{{--{!! Form::open(['url' => '/']) !!}--}}
	{{--{!! Form::text('name', '', ['placeholder' => 'Name']) !!}--}}
	{{--{!! Form::submit('Register') !!}--}}
	{{--{!! Form::close() !!}--}}

	{!! Form::model($article, ['url' => route('articles.store', $article->id)]) !!}
		@include('articles.form')
	{!! Form::close() !!}

@endsection