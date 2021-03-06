/* prettier-ignore */
import {FETCHING, FETCHED, ERROR, ADDING, ADDED, DELETING, DELETED, EDITING, EDITED} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingFriends: true,
      });

    case FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true,
      });

    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload.stack,
      });

    case ADDING:
      return Object.assign({}, state, {
        savingFriends: true,
        friendsSaved: false,
      });

    case ADDED:
      return Object.assign({}, state, {
        savingFriends: true,
        friendsSaved: true,
        friends: action.payload,
      });

    case DELETING:
      return Object.assign({}, state, {
        deletingFriend: true,
        friendDeleted: false,
      });

    case DELETED:
      return Object.assign({}, state, {
        deletingFriend: true,
        friendDeleted: true,
        friends: action.payload,
      });

    case EDITING:
      return Object.assign({}, state, {
        updatingFriend: true,
        friendUpdated: false,
      });

    case EDITED:
      return Object.assign({}, state, {
        updatingFriend: true,
        friendUpdated: true,
        friends: action.payload,
      });

    default:
      return state;
  }
};

export default rootReducer;
