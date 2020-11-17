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
    CSelect,
    CFormGroup,
    CLabel,
    CRow,
    CCardFooter,
    CProgress
} from '@coreui/react'



class Predict extends Component {

    constructor(props) {
        super(props);
        this.state = {
            states: ["Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"],
            chosenState: "Delhi",
            LoadPercentage: 0,
            loading: false,
            loadText: 'Scraping web pages',
            loadColor: 'info',
            loadDiv: <img style={{ height: '300px', margin: '0 auto', position: 'relative', maxWidth: '800px', left: '150px' }} src='./load_scrape.gif'></img>
        }
    }
    startload() {
        this.setState({
            loading: true,
        })
        var start = setInterval(() => {
            if (this.state.LoadPercentage >= 400) {
                clearInterval(start);
                this.setState({
                    loading: false,
                    LoadPercentage: 0,
                    loadText: 'Scraping web pages',
                    loadDiv: <img style={{ height: '300px', padding: '0 auto', position: 'relative', maxWidth: '800px', left: '150px' }} src='./load_scrape.gif'></img>
                })
                this.props.history.push('/trends');
            }
            else if (this.state.LoadPercentage >= 300) {
                this.setState({
                    loadColor: 'success',
                    loadText: 'Plotting graphs',
                    loadDiv: <img style={{ height: '300px', padding: '0 auto', position: 'relative', maxWidth: '800px' }} src='./load_plot.gif'></img>
                })
            }
            else if (this.state.LoadPercentage >= 200) {
                this.setState({
                    loadColor: 'danger',
                    loadText: 'ML model processing images',
                    loadDiv: <img style={{ height: '300px', margin: '0 auto', position: 'relative', maxWidth: '800px', left: '75px' }} src='./load_analysis.gif'></img>
                })
            }
            else if (this.state.LoadPercentage >= 100) {
                this.setState({
                    loadColor: 'warning',
                    loadText: 'Analysing scraped images',
                    loadDiv: <div class="tech-slideshow">
                        <div class="mover-1"></div>
                        <div class="mover-2"></div>
                    </div>
                })
            }
            this.setState({
                LoadPercentage: this.state.LoadPercentage + 1,
            })
        }, 100);
        this.props.history.push({
            pathName: '/trends',
            state: {
                state: this.state.chosenState
            }
        })
    }

    render() {
        return (
            <div className="c-app c-default-layout flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md="8">
                            <CCardGroup>
                                {this.state.loading == false ?
                                    (

                                        <CCard className="p-4">
                                            <CCardBody>
                                                <CForm>
                                                    <h1>Enter Location</h1>
                                                    <p className="text-muted">Enter the location to predict trends</p>
                                                    <CRow>
                                                        <CCol>
                                                            <CFormGroup>
                                                                <CLabel htmlFor="state">State</CLabel>
                                                                <CSelect custom name="state" id="state">
                                                                    {
                                                                        this.state.states.map((state) => {
                                                                            return <option> {state}</option>
                                                                        })
                                                                    }
                                                                </CSelect>
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CRow>
                                                    <CRow>
                                                        <CCol xs="12">
                                                            <CButton color="primary" className="px-4" onClick={() => { this.startload() }}>Predict Trend</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CForm>
                                            </CCardBody>
                                        </CCard>)
                                    : (<CCard>
                                        <CCardBody>
                                            <CRow>
                                                <CCol>
                                                    {this.state.loadDiv}
                                                </CCol>
                                            </CRow>
                                        </CCardBody>
                                        <CCardFooter>
                                            <CRow>
                                                <CCol xs="6">
                                                    <CProgress value={this.state.LoadPercentage % 100} showPercentage color={this.state.loadColor} animated className="mb-3" style={{ width: "135%", height: "30px" }} >
                                                    </CProgress>
                                                </CCol>
                                                <CCol xs="6">
                                                    <CButton class="btn btn-primary float-right" type="button" >
                                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                        <span> &nbsp; {this.state.loadText}</span>
                                                    </CButton>
                                                </CCol>
                                            </CRow>
                                        </CCardFooter>
                                    </CCard>)
                                }
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        )
    }
}

export default Predict
