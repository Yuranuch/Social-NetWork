import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    setStatus,
    setUserProfileThunkCreator,
    updateStatus,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {profileAPI} from "../../API/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     status={this.props.status}
                     profile={this.props.profile}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state) => {
debugger
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setUserProfileThunkCreator(profile))
        },
        getStatus: (userId) => {
            dispatch(getStatusThunkCreator(userId))
        },
        updateStatus: (status) => {
            dispatch(updateStatusThunkCreator(status))
        },

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)