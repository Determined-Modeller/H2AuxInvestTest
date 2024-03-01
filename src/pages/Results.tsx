import { post } from 'aws-amplify/api';
import { useEffect } from 'react';



const postBody = {
    "hydrogen_inlet_pressure": {
        "value": 0,
        "unit": "BAR"
    },
    "dispensing_type": "TUBETRAILER",
    "energy_price_per_mwh": 0,
    "is_storage_required": true,
    "storage_mass": {
        "value": 0,
        "unit": "KG"
    },
    "storage_pressure": {
        "value": 0,
        "unit": "BAR"
    },
    "dispensing_pressure": {
        "value": 0,
        "unit": "BAR"
    },
    "dispensing_mass": {
        "value": 0,
        "unit": "KG_PER_HOUR"
    },
    "avg_hydrogen_dispensing_rate": {
        "value": 0,
        "unit": "KG_PER_HOUR"
    },
    "peak_hydrogen_dispensing_rate": {
        "value": 0,
        "unit": "KG_PER_HOUR"
    },
    "lifetime_years": 0,
    "wacc": 0,
    "is_precooling_used": true,
    "vehicle_type": "TUBETRAILER"
}

async function postCalculate() {
    try {
        const restOperation = post({
            apiName: 'h2AuxCalculatorApi',
            path: '/calculator/calculate',
            options: {
                body: postBody
            }
        });
        const response = await restOperation.response;
        console.log('PUT call succeeded: ', response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.log('PUT call failed: ', JSON.parse(e.response.body));
    }
}

const Results = () => {
    useEffect(() => {
        postCalculate();
    }, [])
    return <div>Results</div>
}

export default Results;