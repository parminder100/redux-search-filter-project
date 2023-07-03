import {createStore} from "redux"

// Action Type
const SearchFilter = "SearchFilter";
const FetchUsername = "FetchUsername";

export const SetSearchFilter = (filter) =>(
    {
        type: SearchFilter,
        filter,
    }
)

export const fetchUsername = (userId) =>(
    {
        type: FetchUsername,
        userId,
    }
)

const initialState = {
    users: [],
    filteredUsers: [],
    searchFilter: "",
    username: "",
}

const searchReducer = (state = initialState, action)=>{
    if(action.type === SearchFilter){
        const filter = action.filter.toLowerCase();
        const filteredUsers = state.users.filter((user)=> user.name.toLowerCase().includes(filter));
        return{
            ...state,
            searchFilter: action.filter,
            filteredUsers,
        }
    }
    if(action.type === FetchUsername){
        const user = state.users.find((user)=> user.id === action.userId);
        const username = user ? user.name : "";
        return{
            ...state,
            username,
        }
    }
    if (action.type === "FETCH_USERS") {
        return {
          ...state,
          users: action.users,
          filteredUsers: action.users,
        };
    }
    return state;
}

export const store = createStore(searchReducer);