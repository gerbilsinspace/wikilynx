import { connect } from 'react-redux';
import GameBoard from '../Components/GameBoard';

const mapStateToProps = (state) => {
	return {
		firstTitle: state.firstPage,
		lastTitle: state.lastPage,
		links: state.currentPage.links
	};
};

const GameBoardContainer = connect(mapStateToProps)(GameBoard);

export default GameBoardContainer;