import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    login() {
        this.setState({
            loading: true,
        })
        var temp = setTimeout(() => {
            this.props.history.push('/predict');
        }, 1000);
    }
    render() {
        return (
            <div className="c-app c-default-layout flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md="8">
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm>
                                            <h1>Login</h1>
                                            <p className="text-muted">Sign In to your account</p>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-user" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="text" placeholder="Username" autoComplete="username" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-lock-locked" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="password" placeholder="Password" autoComplete="current-password" />
                                            </CInputGroup>
                                            <CRow>
                                                <CCol xs="12">
                                                    {this.state.loading == false ?
                                                        (<CButton class="btn btn-primary" onClick={() => { this.login() }}>
                                                            <span role="status" aria-hidden="true"> Login </span>
                                                        </CButton>)
                                                        : (<CButton class="btn btn-primary" type="button" >
                                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                            <span> &nbsp; Logging in</span>
                                                        </CButton>)
                                                    }
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                                    <CCardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Welcome to Trends and demand prediction website!</p>
                                            <Link to="/register">
                                                <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                                            </Link>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        )
    }
}

export default Login
