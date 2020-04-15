import React, { useEffect } from "react"
import { navigate } from "gatsby"
import withLocation from "../components/WithLocation"
import { connect } from "react-redux"
import { logout } from "../actions/authenticationActions"

const IndexPage = ({ search, isAuthenticated, opportunityId, dispatch }) => {
  useEffect(() => {
    const { oppId } = search
    let loginUrl = oppId ? `/login/?oppId=${oppId}` : `/login/?oppId=fake`

    if (isAuthenticated) {
      if (oppId!==opportunityId) {
        dispatch(logout())
      }else {
        loginUrl=`/app/home`
      }
    }
    navigate(loginUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div></div>
}

function mapStateToProps(state) {
  const { isAuthenticated, opportunityId } = state.authentication
  return {
    isAuthenticated,
    opportunityId,
  }
}

export default connect(mapStateToProps)(withLocation(IndexPage))
