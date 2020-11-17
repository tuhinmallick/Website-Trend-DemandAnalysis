import React, { Component } from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CCallout,
    CDataTable,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Chart1 from '../../charts/chart1.js'
import Chart2 from '../../charts/chart2.js'
import Chart3 from '../../charts/chart3.js'
import Chart4 from '../../charts/chart4.js'
import Chart5 from '../../charts/chart5.js'
import Chart6 from '../../charts/chart6.js'

import usersData from '../../users/UsersData'
import Chart7 from 'src/charts/chart7.js'
import Chart8 from 'src/charts/chart8.js'

const fields = ['Store Id', 'Article ID', 'Demand for phase 1', 'Demand for phase 2', 'Demand for phase 3', 'Ideal lauch phase']


class Demand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: 'Delhi',
            country: 'India',
            modal: false,
        }
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
                                    <CCol>
                                        <CButton class="btn btn-primary float-right" onClick={() => { this.setState({ modal: true }) }}>
                                            <span role="status" aria-hidden="true"> Show Analytics </span>
                                        </CButton>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="6">
                        <CCard>
                            <CCardBody>
                                <Chart1 style={{ height: '300px' }} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol sm="6">
                        <CCard>
                            <CCardBody>
                                <Chart4 style={{ height: '300px' }} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="4">
                        <CCard>
                            <CCardBody>
                                <Chart2 style={{ height: '190px' }} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol sm="2">
                        <CCard>
                            <CCardBody>
                                <Chart3 style={{ height: '190px' }} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol sm="4">
                        <CCard>
                            <CCardBody>
                                <Chart5 style={{ height: '190px' }} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol sm="2">
                        <CCard>
                            <CCardBody>
                                <Chart6 style={{ height: '190px' }} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm="7">
                        <CCard>
                            <CCardBody>
                                <Chart7 style={{ height: '210px' }} />
                            </CCardBody>
                        </CCard>

                        <CCard>
                            <CCardBody>
                                <Chart8 style={{ height: '210px' }} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol sm="5">
                        <CCard>
                            <CCardHeader>
                                Ideal Lauch Time
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={usersData}
                                    fields={fields}
                                    hover
                                    striped
                                    itemsPerPage={6}
                                    pagination
                                    scopedSlots={{
                                        'Store Id':
                                            (item) => (
                                                <td>
                                                    {item.StoreId}
                                                </td>
                                            )
                                        , 'Article ID':
                                            (item) => (
                                                <td>
                                                    {item.ArticleId}
                                                </td>
                                            )
                                        , 'Demand for phase 1':
                                            (item) => (
                                                <td>
                                                    {item.Demand1}
                                                </td>
                                            )
                                        , 'Demand for phase 2':
                                            (item) => (
                                                <td>
                                                    {item.Demand2}
                                                </td>
                                            )
                                        , 'Demand for phase 3':
                                            (item) => (
                                                <td>
                                                    {item.Demand3}
                                                </td>
                                            )
                                        , 'Ideal lauch phase':
                                            (item) => (
                                                <td>
                                                    {item.Ideal}
                                                </td>
                                            )
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
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

export default Demand
