import { ReactElement, memo, useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react';
import { getAgeVals } from "../services/trend.service";


function AnnualCmp(): ReactElement {

    const [option, setOptions] = useState<any>()

    useEffect(() => {

        const age1Vals = getAgeVals(1)
        const age3Vals = getAgeVals(3)
        const age6Vals = getAgeVals(6)
        const age12Vals = getAgeVals(12)

        setOptions({
            title: {
                text: 'תינוקות יונקים - מגמה שנתית לפי גיל',
                right: 10,
                textStyle: {
                    fontSize: 26
                },
            },
            color: ['rgb(180, 230, 255)', 'rgb(110, 200, 255)', 'rgb(50, 150, 190)', 'rgb(20, 110, 150)'],

            legend: {
                data: ['גיל 12 חודשים', 'גיל 6 חודשים', 'גיל 3 חודשים', 'גיל חודש'],
                align: 'right',
                icon: 'circle',
                right: 10,
                top: 35,
                itemGap: 25,
                itemWidth: 12,
                textStyle: {
                    fontSize: 20

                }
            },
            grid: {
                left: '7%',
                right: '2%',
                top: '20%',
                bottom: '9%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: ['2016', '2017', '2018', '2019', '2020', '2021'],
                offset: 20,
                axisLabel: {
                    fontSize: 17
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true,
                    length: 20
                } 
            },
            yAxis: {
                type: 'value',
                max: 75,
                maxInterval: 15,
                offset: 10,
                axisLabel: {
                    fontSize: 16,
                    formatter: '{value}%'
                },
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
                    lineHeight: 100
                }
            },
            series: [
                {
                    name: 'גיל חודש',
                    type: 'line',
                    lineStyle: {
                        width: 4
                    },
                    symbol: 'circle',
                    symbolSize: 14,
                    data: age1Vals,
                },
                {
                    name: 'גיל 3 חודשים',
                    type: 'line',
                    lineStyle: {
                        width: 4
                    },
                    symbol: 'circle',
                    symbolSize: 14,
                    data: age3Vals
                },
                {
                    name: 'גיל 6 חודשים',
                    type: 'line',
                    lineStyle: {
                        width: 4
                    },
                    symbol: 'circle',
                    symbolSize: 14,
                    data: age6Vals
                },
                {
                    name: 'גיל 12 חודשים',
                    type: 'line',
                    lineStyle: {
                        width: 4
                    },
                    symbol: 'circle',
                    symbolSize: 14,
                    data: age12Vals
                }
            ]
        })
    }, [])

    if (!option) return <div></div>

    return (
        <ReactECharts option={option} style={{ height: '100%' }} />
    )
}

export default memo (AnnualCmp)
