import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import './Chart.css';
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chartjs.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels
);



function Chart({ count }) {
    const [datas, SetDatas] = useState([{
        CountryName: 'word',
        Population: '2499322000',
        Year: '1950'
    }])
    const [num, setNum] = useState(1950)

    useEffect(() => {
        const data = count.sort((a, b) => b.Population - a.Population)
        const datafil = data.filter((a) => a.Year === num)
        const dataslice = datafil.slice(0, 12)
        SetDatas(dataslice)
        console.log(num)
    }, [num])
    function time() {
        if (num > 2020) {
            return setNum(2021)
        }
        setNum(num + 1)
    }
    setTimeout(() => time(), 400)



    const data = {
        labels: datas.slice(1, 12).map((val) => val.CountryName),
        datasets: [{
            label: '',
            data: datas.slice(1, 12).map((val) => val.Population),

            backgroundColor: ['#4756CA','#4756CA', '#FFC436','#D0A2F7']
        },
        ]
    }
    const options = {
        indexAxis: 'y',
        scales:{
            x: {
                position: 'top', 
              },
        },
        plugins: {
            datalabels: {
                formatter: (value) => `${value.toLocaleString()} คน`,
                anchor: 'end',
                align: 'end',
                display: true,
                color: 'black',
            },
        },
        animation: {
            duration: 1000,
        },

    }
    return (
        <div>
            <div className='chart' style={{ width: '90%', height: '80%', margin: 'auto' }} >
                <Bar data={data} options={options} style={{ width: '100%', height: '100%', }} />
                <div>
                    <h1 >{num}</h1>
                    <h1>total:{datas[0].Population.toLocaleString()}</h1>
                </div>
            </div>

        </div>

    )
}

export default Chart