import React, {Component } from 'react'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CCallout
} from '@coreui/react'
import {
    CChartHorizontalBar,
    CChartPie
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Date.now(),
            LoadPercentage: 0,
            loading: false,
            loadText: 'Scraping web pages',
            loadColor: 'info',
            loadDiv: <img style={{ height: '300px', margin: '0 auto', position: 'relative', maxWidth: '800px', left: '500px' }} src='./load_scrape.gif'></img>
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
                    loadDiv: <img style={{ height: '300px', margin: '0 auto', position: 'relative', maxWidth: '800px', left: '500px' }} src='./load_scrape.gif'></img>
                })
            }
            else if (this.state.LoadPercentage >= 300) {
                this.setState({
                    loadColor: 'success',
                    loadText: 'Plotting graphs',
                    loadDiv: <img style={{ height: '300px', margin: '0 auto', position: 'relative', maxWidth: '800px', left: '360px' }} src='./load_plot.gif'></img>
                })
            }
            else if (this.state.LoadPercentage >= 200) {
                this.setState({
                    loadColor: 'danger',
                    loadText: 'ML model processing images',
                    loadDiv: <img style={{ height: '300px', margin: '0 auto', position: 'relative', maxWidth: '800px', left: '410px' }} src='./load_analysis.gif'></img>
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
    }
    getRandomColor(alpha) {
        return 'rgba(' +
            (Math.floor(Math.random() * 56) + 200) + ', ' +
            (Math.floor(Math.random() * 56) + 200) + ', ' +
            (Math.floor(Math.random() * 56) + 200) +
            + alpha + ')';
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
                                        <h4 id="traffic" className="card-title mb-0">Current Trends</h4>
                                        <div className="small text-muted">Late Updated: {this.state.date}</div>
                                    </CCol>
                                    <CCol sm="7" className="d-none d-md-block">
                                        {this.state.loading == false ?
                                            (<CButton class="btn btn-primary float-right" onClick={() => { this.startload() }}>
                                                <span role="status" aria-hidden="true"> Predict Trend</span>
                                            </CButton>)
                                            : (<CButton class="btn btn-primary float-right" type="button" >
                                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                <span> &nbsp; {this.state.loadText}</span>
                                            </CButton>)
                                        }
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
                {
                    this.state.loading == false ?
                        (
                            <>
                                <CRow>
                                    <CCol sm="4">
                                        <CCard>
                                            <CCardBody>
                                                <CChartHorizontalBar
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
                                                <CChartHorizontalBar
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
                                                <CChartHorizontalBar
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
                                                <CChartHorizontalBar
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
                            </>
                        ) :
                        <CCard>
                            <CCardBody>
                                <CRow>
                                    <CCol>
                                        {this.state.loadDiv}
                                    </CCol>
                                </CRow>
                            </CCardBody>
                            <CCardFooter>
                                <CProgress value={this.state.LoadPercentage % 100} showPercentage color={this.state.loadColor} animated className="mb-3" style={{ width: "75%", margin: "0 auto" }} >
                                </CProgress>
                            </CCardFooter>
                        </CCard>

                }
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

export default Dashboard
