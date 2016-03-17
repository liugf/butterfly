import React from 'react';
import $ from 'jquery';

class Comment extends React.Component {
	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
        		{this.props.children}
			</div>
		);
	}
}

class CommentList extends React.Component {
	render() {
		const commentNodes = this.props.data.map( (comment) => {
			return (
				<Comment author={comment.author} key={comment.id}>
          			{comment.content}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
}

export default class Comments extends React.Component {
	constructor() {
		super();
		this.state = {data: []};
	}
	componentDidMount() {
		$.ajax({
			url: '/api/comments.php',
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		});
	}
	render() {
		return (
			<div className="container">
				<CommentList data={this.state.data} />
			</div>
		);
	}
}