@extends('layouts.default')


@section('content')

	<h2>用户注册</h2>

	<hr/>

	<form class="form-horizontal" method="POST" action="/auth/register">
		@if(count($errors) > 0)
			<div class="alert alert-danger">
				<ul>
					@foreach($errors->all() as $error)
						<li>{{ $error }}</li>
					@endforeach
				</ul>
			</div>
		@endif

		{!! csrf_field() !!}
		<div class="form-group">
			<label for="name" class="col-sm-2 control-label">Name</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="name" name="name" placeholder="Name" value="{{ old('name') }}">
			</div>
		</div>
		<div class="form-group">
			<label for="email" class="col-sm-2 control-label">Email</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="email" name="email" placeholder="Email" value="{{ old('email') }}">
			</div>
		</div>
		<div class="form-group">
			<label for="password" class="col-sm-2 control-label">Password</label>
			<div class="col-sm-10">
				<input type="password" class="form-control" id="password" name="password" placeholder="Password">
			</div>
		</div>
		<div class="form-group">
			<label for="password_confirmation" class="col-sm-2 control-label">Password Conformation</label>
			<div class="col-sm-10">
				<input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Password">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<button type="submit" class="btn btn-primary">注册</button>
			</div>
		</div>
	</form>

@endsection