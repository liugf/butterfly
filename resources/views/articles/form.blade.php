@if(count($errors) > 0)
	<div class="alert alert-danger">
		<ul>
			@foreach($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	</div>
@endif

{{ csrf_field() }}
<div class="form-group">
	<label for="title">文章标题</label>
	{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => '文章标题']) !!}
</div>
<div class="form-group">
	<label for="content">文章正文</label>
	{!! Form::textarea('content', null,	array('required', 'class'=>'form-control', 'placeholder'=>'Content', 'rows' => '20')) !!}
</div>

{!! Form::submit('保存', ['class' => 'btn btn-primary']) !!}