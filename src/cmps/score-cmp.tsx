import { ReactElement, memo, useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react';
import { getScoreVals } from "../services/trend.service";

function ScoreCmp(): ReactElement {

    const [option, setOptions] = useState<any>()

    useEffect(() => {
        const score1Vals = getScoreVals('קטנים')
        const score2Vals = getScoreVals('מרכז על')
        const score3Vals = getScoreVals('בינוניים - גדולים')

        setOptions({
            title: {
                text: 'הפרש ציון מהממוצע הארצי לפי מאפייני מוסד/אשפוז',
                right: 10,
                textStyle: {
                    fontSize: 26
                },
            },
            color: ['rgb(172, 172, 55)', 'rgb(90, 60, 155)', 'rgb(155, 220, 240)'],
            legend: {
                data: ['בינוניים - גדולים', 'מרכז על', 'קטנים'],
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
                left: '6%',
                right: '2%',
                top: '20%',
                bottom: '9%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['תנאים פיזיים', 'יעילות הטיפול', 'העצמת המטופל', 'רצף טיפולי', 'מתן מידע', 'יחס וכבוד למטופל', 'נכונות להמליץ', 'מטופל בידיים טובות', 'שביעות רצון כללית'],
                offset: 15,
                axisLabel: {
                    fontSize: 16,
                    formatter: (value: string) => value.split(' ').join('\n')
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 2
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                min: -5,
                max: 5,
                minInterval: 2.5,
                offset: 10,
                axisLabel: {
                    fontSize: 16,
                    formatter: '{value}%'
                },
                splitLine: {
                    show: false
                },
                name: 'הפרש מהממוצע הארצי',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 21,
                    lineHeight: 110
                }

            },
            series: [
                {
                    name: 'קטנים',
                    type: 'bar',
                    data: score1Vals
                },
                {
                    name: 'מרכז על',
                    type: 'bar',
                    data: score2Vals
                },
                {
                    name: 'בינוניים - גדולים',
                    type: 'bar',
                    data: score3Vals
                },
            ],
        })
    }, [])

    if (!option) return <div></div>

    return (
        <ReactECharts option={option} style={{ height: '100%' }} />
    )
}

export default memo(ScoreCmp)
