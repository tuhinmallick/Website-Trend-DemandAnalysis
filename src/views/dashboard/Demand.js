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
            </>
        )
    }
}

export default Demand
