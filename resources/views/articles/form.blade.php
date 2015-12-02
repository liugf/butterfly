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
	<input type="text" class="form-control" id="title" name="title" value="{{ old('title') }}" placeholder="文章标题">
</div>
<div class="form-group">
	<label for="content">文章正文</label>
	<textarea class="form-control" rows="20" id="content" name="content" value="{{ old('content') }}"></textarea>
</div>