import { ReactElement, memo, useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react';
import { getBreastVals } from "../services/trend.service";

function BreastlCmp(): ReactElement {

    const [option, setOptions] = useState<any>()

    useEffect(() => {
        const line1Data = getBreastVals('הנקה מלאה')
        const line2Data = getBreastVals('הנקה משולבת')
        const line3Data = getBreastVals('ללא הנקה')

        setOptions({
            title: {
                text: 'תינוקות יונקים - אחוז הנקה לפי גיל',
                right: 10,
                textStyle: {
                    fontSize: 26
                },
            },
            color: ['rgb(123, 205, 205)', 'rgb(0, 122, 115)', 'rgb(201, 201, 201)'],
            legend: {
                data: ['ללא הנקה', 'הנקה משולבת', 'הנקה מלאה'],
                align: 'right',
                icon: 'circle',
                right: 10,
                top: 30,
                itemGap: 25,
                itemWidth: 12,
                textStyle: {
                    fontSize: 20
                }
            },
            grid: {
                left: '4%',
                right: '1%',
                top: '22%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    fontSize: 17
                },
                offset: 15,
                name: 'גיל בחודשים',
                nameLocation: 'midlle',
                nameTextStyle: {
                    fontSize: 22,
                    align: 'center',
                    verticalAlign: 'top',
                    lineHeight: 110
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true,
                    length: 18
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 100,
                axisLabel: {
                    fontSize: 16,
                    formatter: '{value}%'
                },
                offset: 10,
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 3
                    }
                },
                name: '%  מהתינוקות',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 23,
                    lineHeight: 110
                }
            },
            series: [
                {
                    name: 'הנקה מלאה',
                    type: 'line',
                    stack: 'Total',
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        normal: {
                            color: 'rgb(123, 205, 205)'
                        }
                    },
                    data: line1Data
                },
                {
                    name: 'הנקה משולבת',
                    type: 'line',
                    stack: 'Total',
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        normal: {
                            color: 'rgb(0, 122, 115)'
                        }
                    },
                    data: line2Data
                },
                {
                    name: 'ללא הנקה',
                    type: 'line',
                    stack: 'Total',
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        normal: {
                            color: 'rgb(201, 201, 201)'
                        }
                    },
                    data: line3Data
                }
            ]
        })
    }, [])

    if (!option) return <div></div>

    return (
        <ReactECharts option={option} style={{ height: '100%' }} />
    )
}

export default memo(BreastlCmp)
