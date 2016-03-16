import React, { PropTypes, Component } from 'react';
import Link from '../Containers/Link';

class GameBoard extends Component {
	render () {
		let { links } = this.props;
		
		const style = {
			height: 400,
			overflowY: 'auto',
			backgroundColor: '#eee',
			borderRadius: 6,
			padding: 30
		};

		return (
			<div className="col-md-6" style={{marginBottom: 20}}>
				{ links[0] && <div>
					<div style={style}>
						<h3 style={{marginTop: 0}}>Links</h3>
						<ul style={{margin: 0, padding: 0}}>
						{
							links.map(function (link, index) {
								return (
									<li style={{listStyle: 'none'}} key={index}>
										<Link title={link.title} />
									</li>
								);
							})
						}
						</ul>
					</div>
				</div> }
			</div>
		);
	}
};

GameBoard.propTypes = {
	links: PropTypes.array.isRequired
};

export default GameBoard;