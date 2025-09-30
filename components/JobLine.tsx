'use client'

import Chart from "react-google-charts"

export default function JobsLine () {
    return (
        <div className="border border-amber-50">
            <Chart
                chartType="LineChart"
                data={[
                    ["Age", "Weight"],
                    [4, 5.5],
                    [8, 12],
              
                ]}
                width="100%"
                height="400px"
                legendToggle
            
            />;
        </div>
    )
}
