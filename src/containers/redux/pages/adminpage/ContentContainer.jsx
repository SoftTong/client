import { connect } from "react-redux"
import ContentContainer from "../../../pages/adminpage/ContentContainer"


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


export default connect(mapStateToProps, null)(ContentContainer)