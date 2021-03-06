import React from 'react';
import PropTypes from 'prop-types';

import './RankingRow.css';

const RankingRow = ({ position }) => {
	const name = position.name.split(' ', 1);
	const {
		score,
		correct
	} = position;

	return (
		<tr className={`RankingRow ${position.self ? 'user' : ''}`}>
			<td>{position.position}</td>
			<td>{name}</td>
			<td>{score}</td>
			<td>{correct}</td>
		</tr>
	);
};

export default RankingRow;

RankingRow.propTypes = {
	position: PropTypes.shape({
		position: PropTypes.number,
		name: PropTypes.string,
		self: PropTypes.bool,
		score: PropTypes.number,
		correct: PropTypes.number
	}).isRequired
};
