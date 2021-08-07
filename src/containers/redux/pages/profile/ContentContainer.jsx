import { connect } from "react-redux"
import ContentContainer from "../../../pages/profile/ContentContainer"
import ACTION from "../../../../store/actions/action"


const mapStateToProps = (state) => {
    return {
        email: state.user_reducer.email,
        name: state.user_reducer.name,
        userId: state.user_reducer.userId,
        phone_number: state.user_reducer.phone_number,
        department: state.user_reducer.department,
        role: state.user_reducer.role,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: function (payload) {
            dispatch(ACTION.SET_USER__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)