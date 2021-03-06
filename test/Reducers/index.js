import expect from 'expect';
import { createStore } from 'redux';
import gameApp from '../../app/Reducers';

import { 
	ADD_BREADCRUMB,
	COMPLETE_GAME,
	CURRENT_PAGE, 
	CUSTOM_GAME,
	FIRST_PAGE,
	GAME_BOARD_FILTER, 
	LAST_PAGE, 
	VIEWER,
	RESET_BREADCRUMB,
	VIEWER_LOADING,
	GAME_BOARD_LOADING,
	NEW_GAME,
	NEW_GAME_LOADING
} from '../../app/Actions';

function stateBefore () {
	const store = createStore(gameApp);
	return store.getState();
}

describe('reducers', () => {
	describe('firstPage', () => {
		it('should set the firstPage to John Wayne', () => {
			const actual = gameApp(stateBefore(), {
				type: FIRST_PAGE,
				firstPage: 'John Wayne'
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: FIRST_PAGE,
				firstPage: 'J.K. Rowling'
			});

			const actual = gameApp(dirtyState, {
				type: FIRST_PAGE,
				firstPage: ''
			});

			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: LAST_PAGE,
				lastPage: 'Superman'
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: LAST_PAGE,
				lastPage: 'Gandalf'
			});

			const actual = gameApp(dirtyState, {
				type: LAST_PAGE,
				lastPage: ''
			});

			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: CURRENT_PAGE,
				currentPage: {
					title: 'Virtual Reality',
					links: []
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: 'Virtual Reality'
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: CURRENT_PAGE,
				currentPage: {
					title: 'The Streets',
					links: ['Adele', 'Fun.', 'The Streets']
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: ['Adele', 'Fun.', 'The Streets'],
					title: 'The Streets'
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: CURRENT_PAGE,
				currentPage: {
					title: 'Warioware',
					links: ['Mario 64', 'Games', 'Project Cars']
				}
			});

			const actual = gameApp(dirtyState, {
				type: CURRENT_PAGE,
				currentPage: {
					title: '',
					links: []
				}
			});

			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: VIEWER,
				viewer: {
					title: 'HTC Vive',
					content: ''
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: VIEWER,
				viewer: {
					title: 'Playstation Move',
					content: 'Do, do, do... Come on and do the Conga'
				}
			});
			
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				type: VIEWER,
				viewer: {
					title: 'Star Wars',
					content: 'Fake Hans Solo lands, and R2D2 gets off.'
				}
			});

			const actual = gameApp(dirtyState, {
				type: VIEWER,
				viewer: {
					title: '',
					content: ''
				}
			});

			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

			expect(actual).toEqual(expected);
		});
	});

	describe('completeGame', () => {
		it('should set the completeGame flag to true', () => {
			const actual = gameApp(stateBefore(), {
				type: COMPLETE_GAME,
				completeGame: true
			});
			const expected = {
				breadcrumbs: [],
				completeGame: true,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

			expect(actual).toEqual(expected);
		});

		it('should set the completeGame flag to false.', () => {
			const actual = gameApp(stateBefore(), {
				type: COMPLETE_GAME,
				completeGame: false
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

			expect(actual).toEqual(expected);
		});
	});

	describe('viewerLoading', () => {
		it('should set the viewerLoading flag to true', () => {
			const actual = gameApp(stateBefore(), {
				type: VIEWER_LOADING,
				viewerLoading: true
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: true
			}

			expect(actual).toEqual(expected);
		});

		it('should set the viewerLoading flag to false.', () => {
			const actual = gameApp(stateBefore(), {
				type: VIEWER_LOADING,
				viewerLoading: false
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

			expect(actual).toEqual(expected);
		});
	});

	describe('gameBoardLoading', () => {
		it('should set the gameBoardLoading flag to true', () => {
			const actual = gameApp(stateBefore(), {
				type: GAME_BOARD_LOADING,
				gameBoardLoading: true
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
				firstPage: '',
				gameBoardLoading: true,
				lastPage: '',
				newGame: true,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			}

			expect(actual).toEqual(expected);
		});

		it('should set the gameBoardLoading flag to false.', () => {
			const actual = gameApp(stateBefore(), {
				type: GAME_BOARD_LOADING,
				gameBoardLoading: false
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

			expect(actual).toEqual(expected);
		});
	});

	describe('newGame', () => {
		it('should set the newGame flag to true', () => {
			const actual = gameApp(stateBefore(), {
				type: NEW_GAME,
				newGame: true
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

			expect(actual).toEqual(expected);
		});

		it('should set the newGame flag to false.', () => {
			const actual = gameApp(stateBefore(), {
				type: NEW_GAME,
				newGame: false
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: false,
				newGameLoading: false,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			}

			expect(actual).toEqual(expected);
		});
	});

	describe('newGameLoading', () => {
		it('should set the newGameLoading flag to true', () => {
			const actual = gameApp(stateBefore(), {
				type: NEW_GAME_LOADING,
				newGameLoading: true
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
				firstPage: '',
				gameBoardLoading: false,
				lastPage: '',
				newGame: true,
				newGameLoading: true,
				viewer: {
					title: '',
					content: ''
				},
				viewerLoading: false
			}

			expect(actual).toEqual(expected);
		});

		it('should set the newGameLoading flag to false.', () => {
			const actual = gameApp(stateBefore(), {
				type: NEW_GAME_LOADING,
				newGameLoading: false
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

			expect(actual).toEqual(expected);
		});
	});

	describe('gameBoardFilter', () => {
		it('should set the filter to David Bowie', () => {
			const actual = gameApp(stateBefore(), {
				type: GAME_BOARD_FILTER,
				gameBoardFilter: 'David Bowie'
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: 'David Bowie',
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
		});

		it('should reset the filter to an empty string', () => {
			const dirtyFilter = gameApp(stateBefore(), {
				type: GAME_BOARD_FILTER,
				gameBoardFilter: 'Hermione Granger'
			});

			const actual = gameApp(dirtyFilter, {
				type: GAME_BOARD_FILTER,
				gameBoardFilter: ''
			});

			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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

	describe('customGame', () => {
		it('should set the customGame to true', () => {
			const actual = gameApp(stateBefore(), {
				type: CUSTOM_GAME,
				customGame: true
			});
			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: true,
				gameBoardFilter: '',
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
		});

		it('should reset the customGame to false', () => {
			const dirtyCustomGame = gameApp(stateBefore(), {
				type: CUSTOM_GAME,
				customGame: true
			});

			const actual = gameApp(dirtyCustomGame, {
				type: CUSTOM_GAME,
				customGame: false
			});

			const expected = {
				breadcrumbs: [],
				completeGame: false,
				currentPage: {
					links: [],
					title: ''
				},
				customGame: false,
				gameBoardFilter: '',
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
});