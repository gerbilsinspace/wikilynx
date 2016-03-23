import expect from 'expect';
import { createStore } from 'redux';
import gameApp from '../../app/Reducers';

import { 
	GET_FIRST_PAGE, 
	GET_LAST_PAGE, 
	GET_CURRENT_PAGE, 
	GET_VIEWER,
	ADD_BREADCRUMB,
	COMPLETE_GAME,
	RESET_BREADCRUMB,
	TOGGLE_VIEWER_LOADING,
	TOGGLE_GAME_BOARD_LOADING,
	TOGGLE_NEW_GAME,
	TOGGLE_NEW_GAME_LOADING
} from '../../app/Actions';

function stateBefore () {
	const store = createStore(gameApp);
	return store.getState();
}

describe('reducers', () => {
	describe('firstPage', () => {
		it('should set the firstPage to John Wayne', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_FIRST_PAGE,
				firstPage: 'John Wayne'
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: 'John Wayne',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should allow resetting firstPage to empty string', () => {
			const dirtyState = gameApp(stateBefore(), {
				type: GET_FIRST_PAGE,
				firstPage: 'J.K. Rowling'
			});

			const actual = gameApp(dirtyState, {
				type: GET_FIRST_PAGE,
				firstPage: ''
			});

			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('lastPage', () => {
		it('should set the lastPage to Superman', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_LAST_PAGE,
				lastPage: 'Superman'
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: 'Superman',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should allow resetting lastPage to empty string', () => {
			const dirtyState = gameApp(stateBefore(), {
				type: GET_LAST_PAGE,
				lastPage: 'Gandalf'
			});

			const actual = gameApp(dirtyState, {
				type: GET_LAST_PAGE,
				lastPage: ''
			});

			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('currentPage', () => {
		it('should set the currentPage title to Virtual Reality, no links', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_CURRENT_PAGE,
				currentPage: {
					title: 'Virtual Reality',
					links: []
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: 'Virtual Reality'
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should set the currentPage title to The Streets, with links', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_CURRENT_PAGE,
				currentPage: {
					title: 'The Streets',
					links: ['Adele', 'Fun.', 'The Streets']
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: ['Adele', 'Fun.', 'The Streets'],
					title: 'The Streets'
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should allow resetting currentPage', () => {
			const dirtyState = gameApp(stateBefore(), {
				type: GET_CURRENT_PAGE,
				currentPage: {
					title: 'Warioware',
					links: ['Mario 64', 'Games', 'Project Cars']
				}
			});

			const actual = gameApp(dirtyState, {
				type: GET_CURRENT_PAGE,
				currentPage: {
					title: '',
					links: []
				}
			});

			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('viewer', () => {
		it('should set the viewer title to HTC Vive, no content', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_VIEWER,
				viewer: {
					title: 'HTC Vive',
					content: ''
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: 'HTC Vive',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should set the viewer title to Playstation Move, with content', () => {
			const actual = gameApp(stateBefore(), {
				type: GET_VIEWER,
				viewer: {
					title: 'Playstation Move',
					content: 'Do, do, do... Come on and do the Conga'
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: 'Playstation Move',
					content: 'Do, do, do... Come on and do the Conga'
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should allow resetting viewer', () => {
			const dirtyState = gameApp(stateBefore(), {
				type: GET_VIEWER,
				viewer: {
					title: 'Star Wars',
					content: 'Fake Hans Solo lands, and R2D2 gets off.'
				}
			});

			const actual = gameApp(dirtyState, {
				type: GET_VIEWER,
				viewer: {
					title: '',
					content: ''
				}
			});

			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});
	});

	describe('addBreadcrumb', () => {
		it('should add breadcrumb', () => {
			const actual = gameApp(stateBefore(), {
				type: ADD_BREADCRUMB,
				title: 'Archery'
			});
			
			const expected = {
				breadcrumbs: [
					{
						title: 'Archery'
					}
				],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should add multiple breadcrumbs', () => {
			const firstBreadcrumb = gameApp(stateBefore(), {
				type: ADD_BREADCRUMB,
				title: 'First Person Shooter'
			});

			const secondBreadcrumb = gameApp(firstBreadcrumb, {
				type: ADD_BREADCRUMB,
				title: 'The Matrix'
			});

			const thirdBreadcrumb = gameApp(secondBreadcrumb, {
				type: ADD_BREADCRUMB,
				title: 'Netflix'
			});

			const expected = {
				breadcrumbs: ['First Person Shooter', 'The Matrix', 'Netflix'],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			}
		});
	});

	describe('resetBreadcrumb', () => {
		it('should reset breadcrumbs that had breadcrumbs', () => {
			const firstBreadcrumb = gameApp(stateBefore(), {
				type: ADD_BREADCRUMB,
				title: 'Portal'
			});

			const secondBreadcrumb = gameApp(firstBreadcrumb, {
				type: ADD_BREADCRUMB,
				title: 'Soccer'
			});

			const actual = gameApp(secondBreadcrumb, {
				type: RESET_BREADCRUMB
			});			
			
			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			};

			expect(actual).toEqual(expected);
		});

		it('should reset an empty breadcrumbs', () => {
			const actual = gameApp(stateBefore(), {
				type: RESET_BREADCRUMB
			});

			const expected = {
				breadcrumbs: [],
				completeGame: {
					isCompleted: false
				},
				currentPage: {
					links: [],
					title: ''
				},
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			}
		});
	});
});