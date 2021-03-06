import React from 'react';

import ClubRankingTable from './ClubRankingTable';
import './ClubRanking.css';

const CLUBSRANK = [
	{
		position: 1, team: 'São Paulo', score: 50, games: 25, wins: 14, draw: 8, loses: 3, goalsfor: 36, goalsagainst: 19, goalsdifference: 17
	},
	{
		position: 2, team: 'Internacional', score: 49, games: 25, wins: 14, draw: 7, loses: 4, goalsfor: 32, goalsagainst: 15, goalsdifference: 17
	},
	{
		position: 3, team: 'Palmeiras', score: 47, games: 25, wins: 13, draw: 8, loses: 4, goalsfor: 37, goalsagainst: 17, goalsdifference: 20
	},
	{
		position: 4, team: 'Flamengo', score: 45, games: 25, wins: 13, draw: 6, loses: 6, goalsfor: 36, goalsagainst: 21, goalsdifference: 15
	},
	{
		position: 5, team: 'Grêmio', score: 44, games: 25, wins: 12, draw: 8, loses: 5, goalsfor: 31, goalsagainst: 12, goalsdifference: 19
	},
	{
		position: 6, team: 'Atlético-MG', score: 42, games: 25, wins: 12, draw: 6, loses: 7, goalsfor: 41, goalsagainst: 29, goalsdifference: 12
	},
	{
		position: 7, team: 'Cruzeiro', score: 34, games: 25, wins: 8, draw: 10, loses: 7, goalsfor: 19, goalsagainst: 19, goalsdifference: 0
	},
	{
		position: 8, team: 'Corinthians', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 9, team: 'Santos', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 10, team: 'Fluminense', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 11, team: 'Atletico-PR', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 12, team: 'Botafogo', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 13, team: 'America-MG', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 14, team: 'Bahia', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 15, team: 'Ceara', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 16, team: 'Vasco', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 17, team: 'Vitoria', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 18, team: 'Sport', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 19, team: 'Parana', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	},
	{
		position: 20, team: 'Chapecoense', score: 33, games: 25, wins: 9, draw: 6, loses: 10, goalsfor: 27, goalsagainst: 22, goalsdifference: 5
	}
];

const ClubRanking = () => (
	<div className="ClubRanking">
		<h1>Club ranking</h1>
		<ClubRankingTable clubrank={CLUBSRANK} />
	</div>
);

export default ClubRanking;
