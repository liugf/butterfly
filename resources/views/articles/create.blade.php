@extends('layouts.default')

@section('content')

	<h2>创建新文章</h2>

	<hr/>

	{{--{!! Form::open(['url' => '/']) !!}--}}
	{{--{!! Form::text('name', '', ['placeholder' => 'Name']) !!}--}}
	{{--{!! Form::submit('Register') !!}--}}
	{{--{!! Form::close() !!}--}}

	{!! Form::open(['route' => 'articles.store']) !!}
		@include('articles.form')
	{!! Form::close() !!}

@endsection