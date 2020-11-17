import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
const brandDanger = getStyle('danger') || '#f86c6b'

const Chart3 = attributes => {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const defaultDatasets = (() => {
        let elements = 5
        const data1 = []
        for (let i = 0; i <= elements; i++) {
            data1.push(random(0, 1000) / 1000)
        }
        return [
            {
                label: 'Normalized Sales',
                backgroundColor: hexToRgba(brandDanger, 10),
                borderColor: brandDanger,
                pointHoverBackgroundColor: brandDanger,
                borderWidth: 2,
                data: data1
            }
        ]
    })()

    const defaultOptions = (() => {
        return {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Dresses: Selling Price',
                fontSize: '14'
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 0.2,
                        max: 1
                    },
                    gridLines: {
                        display: true
                    }
                }]
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3
                }
            }
        }
    }
    )()

    // render
    return (
        <CChartLine
            {...attributes}
            datasets={defaultDatasets}
            options={defaultOptions}
            labels={[0, 1, 2, 3, 4]}
        />
    )
}


export default Chart3

