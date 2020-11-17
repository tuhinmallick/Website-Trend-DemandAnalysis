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
    CDataTable
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
            gender: 'Male',
            ageGroup: 1,
            state: 'Delhi',
            country: 'India',
            date: Date.now(),
            loading: false,
        }
    }
    showGraph() { }

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
                    <CCol sm="6">
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
                    <CCol sm="6">
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
                <CCard>
                    <CCardHeader>
                        Clothes predictive Analysis
            </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol xs="12" md="6" xl="6">

                                <CRow>
                                    <CCol sm="6">
                                        <CCallout color="info">
                                            <small className="text-muted">New Clients</small>
                                            <br />
                                            <strong className="h4">9,123</strong>
                                        </CCallout>
                                    </CCol>
                                    <CCol sm="6">
                                        <CCallout color="danger">
                                            <small className="text-muted">Recurring Clients</small>
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

                                <div className="progress-group mb-4">
                                    <div className="progress-group-header">
                                        <CIcon className="progress-group-icon" name="cil-user" />
                                        <span className="title">Male</span>
                                        <span className="ml-auto font-weight-bold">43%</span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="warning" value="43" />
                                    </div>
                                </div>
                                <div className="progress-group mb-5">
                                    <div className="progress-group-header">
                                        <CIcon className="progress-group-icon" name="cil-user-female" />
                                        <span className="title">Female</span>
                                        <span className="ml-auto font-weight-bold">37%</span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="warning" value="37" />
                                    </div>
                                </div>
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

                        <br />

                        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                            <thead className="thead-light">
                                <tr>
                                    <th className="text-center"><CIcon name="cil-fire" /></th>
                                    <th>Fashion </th>
                                    <th className="text-center">Brand</th>
                                    <th>Demand predicted</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-success"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>Top Handle Bag</div>
                                        <div className="small text-muted">
                                            <span>New</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <img height={25} src="avatars/gucci.png" />

                                    </td>
                                    <td>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <strong>50%</strong>
                                            </div>
                                            <div className="float-right">
                                                <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                                            </div>
                                        </div>
                                        <CProgress className="progress-xs" color="success" value="50" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-danger"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>Message bag</div>
                                        <div className="small text-muted">

                                            <span>Recurring</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <img height={25} src="avatars/rolex.png" />

                                    </td>
                                    <td>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <strong>10%</strong>
                                            </div>
                                            <div className="float-right">
                                                <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                                            </div>
                                        </div>
                                        <CProgress className="progress-xs" color="info" value="10" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-warning"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>Boat Neckline</div>
                                        <div className="small text-muted">
                                            <span>New</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <img height={25} src="avatars/hermes.jpg" />
                                    </td>
                                    <td>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <strong>74%</strong>
                                            </div>
                                            <div className="float-right">
                                                <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                                            </div>
                                        </div>
                                        <CProgress className="progress-xs" color="warning" value="74" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-secondary"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>Scoop Neckline</div>
                                        <div className="small text-muted">
                                            <span>New</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <img height={25} src="avatars/rolex.png" />
                                    </td>
                                    <td>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <strong>98%</strong>
                                            </div>
                                            <div className="float-right">
                                                <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                                            </div>
                                        </div>
                                        <CProgress className="progress-xs" color="danger" value="98" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-success"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>Lace Pattern Neckline</div>
                                        <div className="small text-muted">
                                            <span>New</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <img height={25} src="avatars/gucci.png" />
                                    </td>
                                    <td>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <strong>22%</strong>
                                            </div>
                                            <div className="float-right">
                                                <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                                            </div>
                                        </div>
                                        <CProgress className="progress-xs" color="info" value="22" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="c-avatar">
                                            <img src={'avatars/6.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                            <span className="c-avatar-status bg-danger"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>Dotted Pattern Neckline</div>
                                        <div className="small text-muted">
                                            <span>New</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <img height={25} src="avatars/hermes.jpg" />
                                    </td>
                                    <td>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <strong>43%</strong>
                                            </div>
                                            <div className="float-right">
                                                <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                                            </div>
                                        </div>
                                        <CProgress className="progress-xs" color="success" value="43" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </CCardBody>
                </CCard>
            </>
        )
    }
}

export default Demand
