import React from 'react';

const Box = () => {
    const data = [
        {
            innerPercentage: '24%',
            image: "/donut-chart.svg",
            title: 'Non-Revenue Water',
            kpi: 'KPI:',
            per: '≥ 20 %',
            baseimage: '/base1.svg'
        },
        {
            innerPercentage: '58.8%',
            image: "/donut-chart1.svg",
            title: 'Collection Efficiency',
            kpi: 'KPI:',
            per: '≥ 90 %',
            baseimage: '/base.svg'
        },
        {
            innerPercentage: '-5%',
            image: "/donut-chart2.svg",
            title: 'S Conn. Market Growth',
            baseimage: '/base.svg'
        },
        {
            innerPercentage: '2%',
            image: "/donut-chart3.svg",
            title: 'Capex (Php) YTD',
            baseimage: '/base3.svg'
        },
        {
            innerPercentage: '0.0%',
            image: "/donut-chart4.svg",
            title: 'LWUA-WD JSA Reserves (%) YTD',
            baseimage: '/base3.svg'
        },
    ];

    return (
        <>
            
            {data.map((item) => (
                <div className='px-3 grid grid-cols-12 bg-white rounded-lg' key={item.title}>
                    <div className='col-span-6 flex justify-center items-center'>
                        <div className='absolute'>{item.innerPercentage}</div>
                        <img className='w-30' src={item.image} alt='' />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center relative'>
                        <div className='absolute top-0 right-0'>
                            <img src='icaction1.svg' alt='' className='' />
                        </div>
                        <div className='text-[22px] font-bold text-gray-500'>{item.title}</div>
                        <div className='font-bold text-gray-500'>
                            <div>{item.kpi ? item.kpi : null}</div>
                            <div>{item.per ? item.per : null}</div>
                        </div>
                        {item.baseimage && (
                            <div className='absolute bottom-0 right-0'>
                                <img src={item.baseimage} alt='' />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Box;
