import React from "react"
import {connect} from "react-redux";
import {setCurrentPage, setUsers, userFollow, userUnFollow} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps=(state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage. currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userFollow: (userId) => {
            dispatch(userFollow(userId))
        },
        userUnFollow: (userId) => {
            dispatch(userUnFollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: () => {
            dispatch (setCurrentPage())
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users)

