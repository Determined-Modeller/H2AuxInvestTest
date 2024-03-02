

class H2AuxCostCalculator:
    def __init__(self):
        self.mock_reponse = {
            "dispenser": {
                "equipment": {
                    "min": 33342.5042043156,
                    "max": 40751.9495830524
                },
                "equipment_lcoh": {
                    "min": 0.11981247066720062,
                    "max": 0.14643746414880077
                },
                "maintenance": {
                    "min": 1000.2751261294679,
                    "max": 1222.5584874915721
                },
                "maintenance_lcoh": {
                    "min": 0.027404797976149805,
                    "max": 0.03349475308196088
                },
                "installation": {
                    "min": 8438.435931928534,
                    "max": 9623.771934765544
                },
                "installation_lcoh": {
                    "min": 0.030322553200439552,
                    "max": 0.03458192238880137
                },
                "energy": {
                    "min": 768.6900000000002,
                    "max": 939.5100000000002
                },
                "energy_lcoh": {
                    "min": 0.021060000000000006,
                    "max": 0.025740000000000013
                },
                "sum_capex": {
                    "min": 41780.940136244135,
                    "max": 50375.72151781795
                },
                "sum_opex": {
                    "min": 1768.965126129468,
                    "max": 2162.0684874915723
                },
                "sum_lcoh": {
                    "min": 0.19859982184378996,
                    "max": 0.24025413961956302
                }
            },
            "centrifugal compressor": {
                "power": 44.43159633903764,
                "equipment": {
                    "min": 217699.22481897174,
                    "max": 266076.8303342988
                },
                "equipment_lcoh": {
                    "min": 0.782277234729099,
                    "max": 0.9561166202244542
                },
                "installation": {
                    "min": 28839.94215297475,
                    "max": 32891.05091642601
                },
                "installation_lcoh": {
                    "min": 0.10363302954310825,
                    "max": 0.11819022497499247
                },
                "maintenance": {
                    "min": 6530.976744569151,
                    "max": 7982.304910028963
                },
                "maintenance_lcoh": {
                    "min": 0.17893086971422334,
                    "max": 0.21869328520627299
                },
                "cooling_energy": 0.8886319267807528,
                "compression_energy": 2.221579816951882,
                "energy": {
                    "min": 2050.0471961253934,
                    "max": 2505.6132397088145
                },
                "energy_lcoh": {
                    "min": 0.05616567660617515,
                    "max": 0.06864693807421408
                },
                "sum_capex": {
                    "min": 246539.16697194648,
                    "max": 298967.8812507248
                },
                "sum_opex": {
                    "min": 8581.023940694544,
                    "max": 10487.918149737778
                },
                "sum_lcoh": {
                    "min": 2.2420136211852117,
                    "max": 2.7232941369598676
                }
            },
            "diaphragm compressor": {
                "power": 40.24979903653998,
                "equipment": {
                    "min": 200750.09439845875,
                    "max": 245361.22648700516
                },
                "equipment_lcoh": {
                    "min": 0.7213724754795093,
                    "max": 0.8816774700305114
                },
                "installation": {
                    "min": 27348.760525320016,
                    "max": 31190.404965727674
                },
                "installation_lcoh": {
                    "min": 0.09827463912563845,
                    "max": 0.11207914849930997
                },
                "maintenance": {
                    "min": 6022.502831953762,
                    "max": 7360.836794610154
                },
                "maintenance_lcoh": {
                    "min": 0.16500007758777427,
                    "max": 0.2016667614961686
                },
                "cooling_energy": 0.8049959807307996,
                "compression_energy": 2.012489951826999,
                "energy": {
                    "min": 1857.1015776665329,
                    "max": 2269.790817147985
                },
                "energy_lcoh": {
                    "min": 0.05087949527853516,
                    "max": 0.062186049784876275
                },
                "sum_capex": {
                    "min": 228098.85492377877,
                    "max": 276551.63145273284
                },
                "sum_opex": {
                    "min": 7879.604409620295,
                    "max": 9630.62761175814
                },
                "sum_lcoh": {
                    "min": 2.0710533749429145,
                    "max": 2.515218859621733
                }
            },
            "piston compressor": {
                "power": 39.40341446548008,
                "equipment": {
                    "min": 197281.91429861542,
                    "max": 241122.33969830777
                },
                "equipment_lcoh": {
                    "min": 0.7089099674466766,
                    "max": 0.8664455157681603
                },
                "installation": {
                    "min": 27038.35656190189,
                    "max": 30836.398965601453
                },
                "installation_lcoh": {
                    "min": 0.09715923802876451,
                    "max": 0.11080706847657894
                },
                "maintenance": {
                    "min": 5918.4574289584625,
                    "max": 7233.670190949233
                },
                "maintenance_lcoh": {
                    "min": 0.16214951860160168,
                    "max": 0.19818274495751323
                },
                "cooling_energy": 0.7880682893096017,
                "compression_energy": 1.9701707232740042,
                "energy": {
                    "min": 1818.049901388572,
                    "max": 2222.0609905860324
                },
                "energy_lcoh": {
                    "min": 0.04980958633941293,
                    "max": 0.06087838330372692
                },
                "sum_capex": {
                    "min": 224320.2708605173,
                    "max": 271958.7386639092
                },
                "sum_opex": {
                    "min": 7736.507330347034,
                    "max": 9455.731181535266
                },
                "sum_lcoh": {
                    "min": 2.036056620832911,
                    "max": 2.472627425011959
                }
            },
            "type I/II storage": {
                "capacity": {
                    "amount": 1000,
                    "unit": "KG"
                },
                "equipment": {
                    "min": 989524.8000000003,
                    "max": 1209419.2000000002
                },
                "equipment_lcoh": {
                    "min": 3.5557440541350345,
                    "max": 4.3459093994983755
                },
                "installation": {
                    "min": 247381.20000000007,
                    "max": 302354.80000000005
                },
                "installation_lcoh": {
                    "min": 0.8889360135337586,
                    "max": 1.0864773498745939
                },
                "maintenance": {
                    "min": 19790.496000000006,
                    "max": 24188.384000000005
                },
                "maintenance_lcoh": {
                    "min": 0.5422053698630139,
                    "max": 0.6626954520547946
                },
                "energy": {
                    "min": 0,
                    "max": 0
                },
                "energy_lcoh": {
                    "min": 0.0,
                    "max": 0.0
                },
                "sum_capex": {
                    "min": 1236906.0000000005,
                    "max": 1511774.0000000002
                },
                "sum_opex": {
                    "min": 19790.496000000006,
                    "max": 24188.384000000005
                },
                "sum_lcoh": {
                    "min": 4.986885437531807,
                    "max": 6.095082201427764
                }
            },
            "type III/IV storage": {
                "capacity": {
                    "amount": 1000,
                    "unit": "KG"
                },
                "equipment": {
                    "min": 1124460.0,
                    "max": 1374340.0000000002
                },
                "equipment_lcoh": {
                    "min": 4.040618243335266,
                    "max": 4.938533408520881
                },
                "installation": {
                    "min": 281115.0,
                    "max": 343585.00000000006
                },
                "installation_lcoh": {
                    "min": 1.0101545608338165,
                    "max": 1.2346333521302202
                },
                "maintenance": {
                    "min": 22489.2,
                    "max": 27486.800000000007
                },
                "maintenance_lcoh": {
                    "min": 0.6161424657534246,
                    "max": 0.7530630136986303
                },
                "energy": {
                    "min": 0,
                    "max": 0
                },
                "energy_lcoh": {
                    "min": 0.0,
                    "max": 0.0
                },
                "sum_capex": {
                    "min": 1405575.0,
                    "max": 1717925.0000000002
                },
                "sum_opex": {
                    "min": 22489.2,
                    "max": 27486.800000000007
                },
                "sum_lcoh": {
                    "min": 5.666915269922507,
                    "max": 6.926229774349732
                }
            }
        }

    def calculate_costs(self, request: dict) -> dict:
        #  put the code from main here - instead of loading from a file accept a dict as input
        #  return dict as a response instead of saving it to a file
        return self.mock_reponse