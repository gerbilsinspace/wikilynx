import React from 'react';

const Footer = React.createClass({
	render: () => {
		return (
			<div style={{paddingTop: 20, marginTop: 40, borderTop: '1px solid #eee', fontSize: 11}}>
				<p>Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization</p>
				<p><a href="http://wikimediafoundation.org/wiki/Support_Wikipedia/en">Please Donate</a> to support Wikipedia</p>
			</div>
		);
	}
});

export default Footer;