import React, { Component } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CRow,
    CFormGroup,
    CSelect,
    CProgress,
    CCallout,
    CModal,
    CModalBody,
    CModalHeader,
    CBadge
} from '@coreui/react'
import {
    CChartBar,
    CChartPie
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            gender: 'Male',
            ageGroup: 1,
            state: 'Delhi',
            country: 'India',
            date: Date.now(),
            loading: false,
            modal: false,
        }
    }
    showGraph() {
        this.setState({
            show: false,
            loading: true
        })
        var temp = setTimeout(() => {
            this.setState({
                show: true,
                loading: false
            })
        }, 2000);
    }

    render() {
        return (
            <>

                <CRow>
                    <CCol>
                        <CCard>
                            <CCardBody>
                                <CRow>
                                    <CCol>
                                        <h4 id="traffic" className="card-title mb-0">{this.state.state}, {this.state.country}</h4>
                                        <div className="small text-muted">Late Updated: {this.state.date}</div>
                                    </CCol>


                                    <CCol sm="6" className="d-none d-md-block">
                                        <CRow>
                                            <CCol>
                                                <CFormGroup>
                                                    <CSelect custom name="gender" id="gender">
                                                        <option>Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </CSelect>
                                                </CFormGroup>
                                            </CCol>
                                            <CCol>
                                                <CFormGroup>
                                                    <CSelect custom name="gender" id="gender">
                                                        <option>Age Group</option>
                                                        <option value="Male">0-16</option>
                                                        <option value="Female">16-25</option>
                                                        <option value="Female">26-34</option>
                                                        <option value="Female">35-44</option>
                                                        <option value="Female">45-60</option>
                                                        <option value="Female">61+</option>
                                                    </CSelect>
                                                </CFormGroup>
                                            </CCol>
                                            <CCol>
                                                {this.state.loading == false ?
                                                    (<CButton class="btn btn-primary" onClick={() => { this.showGraph() }}>
                                                        <span role="status" aria-hidden="true"> Show Prediction </span>
                                                    </CButton>)
                                                    : (<CButton class="btn btn-primary" type="button" >
                                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                        <span> &nbsp; Loading </span>
                                                    </CButton>)
                                                }
                                            </CCol>
                                            <CCol>
                                                <CButton class="btn btn-primary float-right" onClick={() => { this.setState({ modal: true }) }}>
                                                    <span role="status" aria-hidden="true"> Show Analytics </span>
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
                <>
                    {
                        this.state.show ?
                            <>
                                <CRow>
                                    <CCol sm="4">
                                        <CCard>
                                            <CCardBody>
                                                <CChartBar
                                                    labels={['Red', 'Blue', 'Yellow', 'Green', 'Orange']}
                                                    datasets={[{
                                                        data: [0.9, 0.6, 0.4, 0.35, 0.13],
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.6)',
                                                            'rgba(54, 162, 235, 0.6)',
                                                            'rgba(255, 206, 86, 0.6)',
                                                            'rgba(75, 192, 192, 0.6)',
                                                            'rgba(255, 159, 64, 0.6)'
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(255, 159, 64, 1)'
                                                        ],
                                                        borderWidth: 1
                                                    }]
                                                    }
                                                    options={{
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Color Trends',
                                                            fontSize: '14'
                                                        },
                                                        scales: {
                                                            yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                },
                                                                categoryPercentage: 0.9,
                                                                barPercentage: 0.9,
                                                            }],
                                                            xAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    max: 1,
                                                                    min: 0
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                }
                                                            }],
                                                        }
                                                    }}
                                                />
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                    <CCol sm="4">
                                        <CCard>
                                            <CCardBody>
                                                <CChartBar
                                                    labels={['High rise', 'Low rise', 'Mid rise']}
                                                    datasets={[{
                                                        data: [0.9, 0.6, 0.4],
                                                        backgroundColor: [
                                                            'rgba(0, 48, 143, 0.6)',
                                                            'rgba(114, 160, 193, 0.6)',
                                                            'rgba(137, 207, 240, 0.6)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(0, 48, 143, 1)',
                                                            'rgba(114, 160, 193, 1)',
                                                            'rgba(137, 207, 240, 1)',
                                                        ],
                                                        borderWidth: 1
                                                    }]
                                                    }
                                                    options={{
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Rise Type Trends',
                                                            fontSize: '14'
                                                        },
                                                        scales: {
                                                            yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                },
                                                                categoryPercentage: 0.9,
                                                                barPercentage: 0.9,
                                                            }],
                                                            xAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    max: 1,
                                                                    min: 0
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                }
                                                            }],
                                                        }
                                                    }}
                                                />
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                    <CCol sm="4">
                                        <CCard>
                                            <CCardBody>
                                                <CChartBar
                                                    labels={['Straight loose', 'wide leg', 'Skinny']}
                                                    datasets={[{
                                                        data: [0.6, 0.9, 0.4],
                                                        backgroundColor: [
                                                            'rgba(0,100,0, 0.6)',
                                                            'rgba(34,139,34, 0.6)',
                                                            'rgba(50,205,50, 0.6)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(0,100,0, 1)',
                                                            'rgba(34,139,34, 1)',
                                                            'rgba(50,205,50, 1)',
                                                        ],
                                                        borderWidth: 1
                                                    }]
                                                    }
                                                    options={{
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Pant fit Trends',
                                                            fontSize: '14'
                                                        },
                                                        scales: {
                                                            yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                },
                                                                categoryPercentage: 0.9,
                                                                barPercentage: 0.9,
                                                            }],
                                                            xAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    max: 1,
                                                                    min: 0
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                }
                                                            }],
                                                        }
                                                    }}
                                                />
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol sm="4">
                                        <CCard>
                                            <CCardBody>
                                                <CChartPie
                                                    datasets={[
                                                        {
                                                            backgroundColor: [
                                                                'rgba(0, 48, 143, 1)',
                                                                'rgba(114, 160, 193, 1)',
                                                                'rgba(137, 207, 240, 1)',
                                                            ],
                                                            data: [30, 20, 50]
                                                        }
                                                    ]}
                                                    labels={['Dark', 'Medium', 'Light']}
                                                    options={{
                                                        title: {
                                                            display: true,
                                                            text: 'Denim Wash Trends',
                                                            fontSize: '14'
                                                        },
                                                        tooltips: {
                                                            enabled: true
                                                        }
                                                    }}
                                                />
                                            </CCardBody>
                                        </CCard>

                                        <CCard>
                                            <CCardBody>
                                                <CChartBar
                                                    labels={['Performance sneakers', 'flat sandals', 'knee high boots', 'wedge sandals', 'flat shoes']}
                                                    datasets={[{
                                                        data: [0.9, 0.6, 0.2, 0.35, 0.4],
                                                        backgroundColor: [
                                                            'rgb(75,  0,  130, 0.6)',
                                                            'rgb(128,0,128, 0.6)',
                                                            'rgb(153,50,204, 0.6)',
                                                            'rgb(186,85,211, 0.6)',
                                                            'rgb(238,130,238, 0.6)'
                                                        ],
                                                        borderColor: [
                                                            'rgb(75,  0,  130, 1)',
                                                            'rgb(128,0,128, 1)',
                                                            'rgb(153,50,204, 1)',
                                                            'rgb(186,85,211, 1)',
                                                            'rgb(238,130,238, 1)'
                                                        ],
                                                        borderWidth: 1
                                                    }]
                                                    }
                                                    options={{
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Footwear Trends',
                                                            fontSize: '14'
                                                        },
                                                        scales: {
                                                            yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                },
                                                                categoryPercentage: 0.9,
                                                                barPercentage: 0.9,
                                                            }],
                                                            xAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    max: 1,
                                                                    min: 0
                                                                },
                                                                gridLines: {
                                                                    drawOnChartArea: false
                                                                }
                                                            }],
                                                        }
                                                    }}
                                                />
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                    <CCol sm="8">
                                        <CCard>
                                            <CCardBody>
                                                <CChartPie
                                                    datasets={[
                                                        {
                                                            backgroundColor: [
                                                                'rgba(255, 99, 132, 1)',
                                                                'rgba(0, 48, 143, 1)',
                                                                'rgb(186,85,211, 1)',
                                                                'rgba(54, 162, 235, 1)',
                                                                'rgba(114, 160, 193, 1)',
                                                                'rgba(255, 206, 86, 1)',
                                                                'rgb(153,50,204, 1)',
                                                                'rgba(75, 192, 192, 1)',
                                                                'rgba(255, 159, 64, 1)',
                                                                'rgba(137, 207, 240, 1)',
                                                                'rgb(75,  0,  130, 1)',

                                                            ],
                                                            data: [11, 3, 3, 4, 5, 6, 7, 6, 5, 20, 30]
                                                        }
                                                    ]}
                                                    labels={['Sexy', 'Casual', 'Streetstyle', 'Modest', 'Minimalism', 'Business', 'Sporty', 'Bohemian', 'Sophisticated', 'Feminine', 'Fashion statement']}
                                                    options={{
                                                        title: {
                                                            display: true,
                                                            text: 'Style Trends',
                                                            fontSize: '14'
                                                        },
                                                        tooltips: {
                                                            enabled: true
                                                        }
                                                    }}
                                                />
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>
                            </> : ''
                    }
                </>
                <CModal show={this.state.modal}
                    onClose={() => { this.setState({ modal: false }) }}
                    size="lg">
                    <CModalHeader>
                        Clothes predictive Analysis
                    </CModalHeader>
                    <CModalBody>
                        <CRow>
                            <CCol xs="12" md="6" xl="6">

                                <CRow>
                                    <CCol sm="6">
                                        <CCallout color="info">
                                            <small className="text-muted">New Sales</small>
                                            <br />
                                            <strong className="h4">9,123</strong>
                                        </CCallout>
                                    </CCol>
                                    <CCol sm="6">
                                        <CCallout color="danger">
                                            <small className="text-muted">Recurring Sales</small>
                                            <br />
                                            <strong className="h4">22,643</strong>
                                        </CCallout>
                                    </CCol>
                                </CRow>

                                <hr className="mt-0" />

                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            January
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="34" />
                                        <CProgress className="progress-xs" color="danger" value="78" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            February
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="56" />
                                        <CProgress className="progress-xs" color="danger" value="94" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            March
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="12" />
                                        <CProgress className="progress-xs" color="danger" value="67" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            April
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="43" />
                                        <CProgress className="progress-xs" color="danger" value="91" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            May
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="22" />
                                        <CProgress className="progress-xs" color="danger" value="73" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            June
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="53" />
                                        <CProgress className="progress-xs" color="danger" value="82" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            July
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="9" />
                                        <CProgress className="progress-xs" color="danger" value="69" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            August
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="9" />
                                        <CProgress className="progress-xs" color="danger" value="69" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            September
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="22" />
                                        <CProgress className="progress-xs" color="danger" value="73" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            October
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="22" />
                                        <CProgress className="progress-xs" color="danger" value="73" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            November
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="22" />
                                        <CProgress className="progress-xs" color="danger" value="73" />
                                    </div>
                                </div>
                                <div className="progress-group mb-4">
                                    <div className="progress-group-prepend">
                                        <span className="progress-group-text">
                                            December
                      </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="info" value="22" />
                                        <CProgress className="progress-xs" color="danger" value="73" />
                                    </div>
                                </div>
                                <div className="legend text-center">
                                    <small>
                                        <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      New clients
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Recurring clients
                    </small>
                                </div>
                            </CCol>

                            <CCol xs="12" md="6" xl="6">

                                <CRow>
                                    <CCol sm="6">
                                        <CCallout color="primary">
                                            <small className="text-muted">Sites Visited</small>
                                            <br />
                                            <strong className="h4">78,623</strong>
                                        </CCallout>
                                    </CCol>
                                    <CCol sm="6">
                                        <CCallout color="success">
                                            <small className="text-muted">Images analysed</small>
                                            <br />
                                            <strong className="h4">49,123</strong>
                                        </CCallout>
                                    </CCol>
                                </CRow>

                                <hr className="mt-0" />
                                <div className="progress-group">
                                    <div className="progress-group-header">
                                        <CIcon className="progress-group-icon" name="cib-instagram" />
                                        <span className="title">Instagram</span>
                                        <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="success" value="56" />
                                    </div>
                                </div>


                                <div className="progress-group">
                                    <div className="progress-group-header">
                                        <CIcon name="cib-facebook" className="progress-group-icon" />
                                        <span className="title">Facebook</span>
                                        <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="success" value="15" />
                                    </div>
                                </div>
                                <div className="progress-group">
                                    <div className="progress-group-header">
                                        <CIcon name="cib-twitter" className="progress-group-icon" />
                                        <span className="title">Twitter</span>
                                        <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="success" value="11" />
                                    </div>
                                </div>
                                <div className="progress-group">
                                    <div className="progress-group-header">
                                        <CIcon name="cib-linkedin" className="progress-group-icon" />
                                        <span className="title">Chictopia.com</span>
                                        <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="success" value="8" />
                                    </div>
                                </div>
                                <div className="divider text-center">
                                    <CButton color="link" size="sm" className="text-muted">
                                        <CIcon name="cil-options" />
                                    </CButton>
                                </div>

                            </CCol>
                        </CRow>
                    </CModalBody>
                </CModal>
            </>
        )
    }
}

export default Dashboard
