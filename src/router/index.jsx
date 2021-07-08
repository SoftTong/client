import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomeRouter from "./HomeRouter"


//TODO userInfo 추가 ( Redux 구축)
//TODO 여기서 redux 값다 받아서 props 로 contentContainer 로 넘겨주자 
const SotongRouter = ({
    //예상 userReducer
    // role (역할)
    // username ( 사용자이름)
    // type ( 튜터 ? )
}) => {

    const userInfo = {
        //TODO role 하드코딩한거 지우기
        role: "ADMIN"
        //받아온거 넣기
    }


    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <HomeRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></HomeRouter>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>

    )

}


export default SotongRouter