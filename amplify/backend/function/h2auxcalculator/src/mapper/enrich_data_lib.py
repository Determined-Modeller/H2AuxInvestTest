# library storing all text used in postives/negatives in enrich_data

enrich_lib = dict()

enrich_lib['dispenser'] = {
    'positives': ['Lowest infrastructure cost',
                  'Industry standard for passenger cars and HDVs'],
    'negatives': ['Additional safety considerations at higher pressures',
                  'Intermediate to low desnity of dispensed hydrogen']
}

enrich_lib['piston compressor'] = {
    'positives': ['High efficiency',
                  'Suited for large capacities'],
    'negatives': ['High maintenance requirements',
                  'Not optimal for high quality or high compression ratio operation']
}

enrich_lib['diaphragm compressor'] = {
    'positives': ['Established and reliable technology',
                  'Suited for high quality applications'],
    'negatives': ['Limited compression capacities',
                  'High sensitivity to feed gas quality']
}

enrich_lib['centrifugal compressor'] = {
    'positives': ['High efficiency',
                  'Suited for large, stable capacities'],
    'negatives': ['High initial cost and complexity',
                  'Sensitive to variations in operating conditions']
}

enrich_lib['type I/II storage'] = {
    'positives': ['Simple and cost effective',
                  'Reliable and durable'],
    'negatives': ['High weight and large size',
                  'Low energy density and working pressure']
}

enrich_lib['type III/IV storage'] = {
    'positives': ['Moderate energy density',
                  'Lightweight and compact'],
    'negatives': ['Moderate initial cost',
                  'Higher inspection and maintenance requirements than type I/II']
}