export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"



const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 20,
    currentPage: 3
}

export const usersReducer = (state=initialState,action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }else {return u}
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }else {return u}
                })
            }
        }
        case SET_USERS:{
            return{
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
    }
    return state
}

export const userFollow = (userId) => ({type: FOLLOW, userId})
export const userUnFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type:SET_CURRENT_PAGE, pageNumber})
export const setTotalCount=(totalCount) => ({type: SET_TOTAL_COUNT,totalCount})

