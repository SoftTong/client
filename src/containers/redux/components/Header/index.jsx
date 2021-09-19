import { connect } from "react-redux"
import Header from "../../../../components/header"


const mapStateToProps = (state, props) => {
    return {
        logined: state.login_reducer.logined,
        role: state.user_reducer.role,
        phone_number: state.user_reducer.phone_number,
    }


}

export default connect(mapStateToProps, null)(Header)