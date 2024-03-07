

import { Box, Typography } from "@mui/joy";
/*import Markdown from 'markdown-to-jsx';*/


const Docs = () => {
    const documentationSections = `
    <p>The H2 AuxInvest project aims to help address the problem of poor knowledge transfer in Scotland’s Hydrogen Supply Chain by providing an open-source tool.
This tool helps developers assess the feasibility and performance of low TRL (Technology Readiness Level) components from small manufacturers, enhancing decision-making and
encouraging the use of innovative technologies in hydrogen projects.</p>
<h1><strong>Vision</strong></h1>
<p>=============</p>
<p>H2AuxInvest aims to provide a platform offering:</p>
<ul>
<li><strong>Optimisation and Sizing:</strong> Shortcut methods for storage and compression based on user inputs.</li>
<li><strong>Financial Insights:</strong> Detailed CAPEX and OPEX comparisons of low TRL solutions against established systems.</li>
<li><strong>Clear Reporting:</strong> Comprehensive reports highlighting key metrics, design limitations, and recommendations.</li>
<li><strong>Full Value Chain:</strong> The project aims to expand the tool to cover hydrogen thermal demands, and accurately estimate transport and storage costs from a supply site of your choice.</li>
<li><strong>Supply Chain Visibility:</strong> The project aims to build, update, and share up-to-date open-source cost correlations for multiple low TRL and novel hydrogen technologies.</li>
<li><strong>Benchmarking and Estimation:</strong> Our tool encourages a free comparison of key variables, capable of exploring different multi-technology approaches.</li>
<li><strong>Trusted Partner:</strong> Working with manufacturers using a transparent and fair verification process, we allow them to share important information for potential users and investors in H2 infrastructure.</li>
</ul>
<h1><strong>Choosing Your Inputs</strong></h1>
<p>============================================</p>
<p>In this section, the main input requirements, assumptions, and hints are provided to help selection of inputs for non-expert users.</p>
<h1><strong>Supply Pressure</strong></h1>
<hr>
<p>The supply pressure available to the site (either through tube trailers or gas distribution pipes) is essential for sizing and the hydrogen infrastructure.</p>
<p>The placeholder assumption here is of a hydrogen pipeline connected to hydrogen distribution piping, delivering hydrogen at up to 7 bar.
Should this instead be via tube trailer, please choose the specific tube trailer delivery pressure,
usually available on a public datasheet or by request.</p>
<p>If you are still unsure about what pressure to choose, but know you will not be connected to the gas distribution network,
it is sensible to start with one of the following commonly used tube trailer pressures in industry:</p>
<ul>
<li>200 bar</li>
<li>300 bar</li>
<li>380 bar</li>
<li>450 bar</li>
<li>500 bar</li>
</ul>
<h1><strong>H2 User</strong></h1>
<hr>
<p>The parameters of the hydrogen demand (i.e., tank capacity and dispensing pressure of the vehicles) are crucial for specifying the correct hydrogen infrastructure.
Please see the vehicle/trailer datasheet, or contact the vendor to confirm that this is correct.</p>
<p>Jargon Buster - H35 is often used to indicate that fuelling is taking place at 350 bar and ambient temperature without precooling.</p>
<p>If you are still unsure about what pressure to choose, but know you will be supplying tube trailers, it is sensible to start with one of the following commonly used configurations:</p>
<ul>
<li>200 bar, 580kg H2</li>
<li>300 bar, 840kg H2</li>
<li>380 bar, 1000kg H2</li>
<li>450 bar, 1150kg H2</li>
<li>500 bar, 1300kg H2</li>
</ul>
<p>If you are still unsure about what pressure to choose, but know you will be supplying small passenger vehicles, it is sensible to start with one of the following commonly used configurations:</p>
<ul>
<li>350 bar, 5kg H2</li>
<li>700 bar, 5kg H2</li>
</ul>
<p>If you are still unsure about what pressure to choose, but know you will be supplying heavy duty vehicles, it is sensible to start with one of the following commonly used configurations:</p>
<ul>
<li>350 bar, 30kg H2</li>
<li>700 bar, 30kg H2</li>
</ul>
<h1><strong>H2 Storage</strong></h1>
<hr>
<p>Storage makes up a significant portion of the final cost of any hydrogen supply infrastructure, in this section,
you specify what storage infrastructure you wish to use, outside of the fuelling cascade required to meet peak demand (when this is applicable).</p>
<p>If you are directly connected to a part of the national gas grid, in an area where hydrogen will be usable you are advised to not include storage (unless operational integrity is a priority).
A generally applied assumption where you are unsure about the distribution of hydrogen demand and do not have available profiles is to size this storage for a minimum of 2 days of demand on site,
a worked example of this is below.</p>
<p>Suggested minimum used storage = (number of vehicle fills over 2 days at peak frequency x vehicle storage tank size) or (peak hydrogen delivery flowrate required per hour * 48 hours)</p>
<h1><strong>H2 Demand</strong></h1>
<hr>
<p>The distribution of hydrogen demand is an important part of accurately specifying and costing any hydrogen infrastructure.
It is recommended that when finally designing hydrogen infrastructure, that this is completed, using expected/measured delivery and filling schedules, traffic data, vendor information, and other sources.</p>
<p>However, for the purpose of shortcut estimation, as this information is rarely available during early estimation stages, peak and average supply rates can be used with a &quot;standard&quot; normal distribution.
Application of more sophisticated options for a probabilistic approach, incorporating different standard profiles, considering queue theory and maximum number of back-to-back fills is an ongoing development task for the project.</p>
<p>If you are unsure about this demand we suggest specifying this using the &quot;vehicles per hour/vehicles per day&quot; units options, specifying your peak demand by the highest number of fills you require during an hour/day.
You should then select the average demand by selecting the &quot;number of vehicles per hour/vehicles per day&quot;, filling in what you expect to be the average demand level.</p>
<p>If you are looking to explore limitations on pressure selection please consider application of standard values from SAEJ2601.
Generally speaking, a maximum filling velocity of 3.6 kg/min and 7.2 kg/min respectively are suggested for H35 and H70 Nozzles respectively.
This can be used to estimate the upper bound of the peak flowrate demand.</p>
<h1><strong>Detailed Configuration</strong></h1>
<p>===============================================</p>
<p>The Weighted Average Cost of Capital (WACC) represents a firm’s blended cost of capital across all sources, including debt and equity, weighted by their respective proportions in the company’s capital structure.
Choosing a sensible WACC value is crucial for evaluating investment decisions and calculating the net present value (NPV) of future cash flows, where accuracy in estimating the cost components and their weights directly impacts investment appraisal outcomes.</p>
<p>Sensible selection of WACC involves careful consideration of the current market conditions, the firm’s capital structure, and risk factors, ensuring that the chosen rate realistically reflects the company’s cost of financing.
12% is used as a standard value to be representative of current high interest rates and risk perception for hydrogen infrastructure.
The cost of equity can be estimated using models such as the Capital Asset Pricing Model (CAPM), which considers the risk-free rate, the market risk premium, and the company’s beta (a measure of its volatility compared to the market).</p>
<p>The lifetime of the project depends on the intensity of use, maintenance applied, and replacement schedule, a standard assumption used is to assume a lifetime in the range of 15-25 years.</p>
<p>Precooling is used to refrigerate hydrogen coming out of storage to achieve a higher number of back-to-back fills and higher State of Charge &quot;SoC&quot; in the hydrogen tanks,
this model assumes an ambient filling model (no precooling) where precooling is not selected, and where it is selected, thermodynamic equations are applied to cool hydrogen to -40°C,
as per the standard SAEJ2601. There is currently no ability to change this assumption in the tool, which is an active development task.</p>
<h1><strong>Tool Outputs</strong></h1>
<p>==========================</p>
<p>The tool provides the following key outputs, separated by purpose:</p>
<h1><strong>Engineering Outputs</strong></h1>
<hr>
<ul>
<li>Compressor Design Power</li>
</ul>
<p>– Minimum size requirement of the compressor to satisfy the demand (kW)</p>
<ul>
<li>Compressor Cooling Energy</li>
</ul>
<p>– Average per kg power requirement to cool the hydrogen for efficient interstage compression cooling.</p>
<ul>
<li>Compression Specific Energy</li>
</ul>
<p>- Average per kg power requirement to compress the hydrogen.</p>
<ul>
<li>Storage Capacity</li>
</ul>
<p>– Maximum hydrogen inventory in additional hydrogen site storage</p>
<ul>
<li>Storage Pressure</li>
</ul>
<p>– Peak hydrogen storage pressure in additional hydrogen site storage</p>
<ul>
<li>Number of Dispensers</li>
</ul>
<p>– Maximum number of dispensing hoses that can be deployed on site with infrastructure</p>
<ul>
<li>Dispenser Pressure</li>
</ul>
<p>– Delivery pressure of hydrogen from dispensers on site</p>
<ul>
<li>Technology Configurator</li>
</ul>
<p>– Advantages and disadvantages of different hydrogen technologies are explored here, this should be read to ensure that configurations are sensible and compatible with undisclosed aspects of the project</p>
<h1><strong>Cost Estimation Outputs</strong></h1>
<hr>
<ul>
<li>Fixed Costs</li>
</ul>
<p>– This range shows the estimated up front capital cost (CAPEX) of the hydrogen infrastructure</p>
<ul>
<li>Operating Costs</li>
</ul>
<p>- This range shows the estimated annual operating cost (OPEX) of the hydrogen infrastructure</p>
<ul>
<li>Levelized Cost of Compression, Storage and Compression Breakdown</li>
</ul>
<p>– This graph shows the breakdown of the contribution of different cost elements (Energy, Installation, Maintenance, Equipment) for all 3 equipment classes (Compression, Dispensing, Compression) together.</p>
<ul>
<li>
<p>Fixed Costs Breakdown – This graph breaks down fixed costs for all 3 equipment classes (Compression, Dispensing, Compression).</p>
</li>
<li>
<p>Operating Costs Breakdown - This graph breaks down variable costs all 3 equipment classes (Compression, Dispensing, Compression) together.</p>
</li>
</ul>
<p>Note – unless otherwise stated, all financial outputs are in 2024£*</p>
<h1><strong>Calculation</strong></h1>
<p>========================</p>
<p>The following section systematically describes the calculations utilised by the python backend.</p>
<h1><strong>Calculation Inputs</strong></h1>
<hr>
<p>The table below describes the user inputs, data type and alternative input type</p>
<table>
<thead>
<tr>
<th><strong>Calculation Variable</strong></th>
<th><strong>Input</strong></th>
<th><strong>Alternative input</strong></th>
<th><strong>Format</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Compression Variable 1</td>
<td>Hydrogen Inlet Pressure [Bar or psi]</td>
<td>N/A</td>
<td>Numerical</td>
</tr>
<tr>
<td>Storage Variable 1</td>
<td>Days of storage [days]</td>
<td>Storage Size [kg or NM3]</td>
<td>Numerical</td>
</tr>
<tr>
<td>Dispensing Variable 1</td>
<td>Dispensing Type [Tubetrailer of Vehicle]</td>
<td>N/A</td>
<td>Dropdown List</td>
</tr>
<tr>
<td>Dispensing Variable 2</td>
<td>Vehicle Type [Heavy Duty Vehicle or car]</td>
<td>Tubetrailer capacity [kg] [300-1300kg]</td>
<td>Dropdown List / Dropdown List</td>
</tr>
<tr>
<td>Dispensing Variable 3</td>
<td>Vehicles/Tubetrailers Refuelled Average [#/day or /year]</td>
<td>Average Hydrogen Dispensing Rate [kg/day or year]</td>
<td>Numerical</td>
</tr>
<tr>
<td>Dispensing Variable 4</td>
<td>Vehicles/Tubetrailers Refuelled Peak [#/day]</td>
<td>Peak Hydrogen Dispensing Rate [kg/hour]</td>
<td>Numerical</td>
</tr>
<tr>
<td>Dispensing Variable 5</td>
<td>Dispensing Pressure [Bar or psi]</td>
<td>N/A</td>
<td>Dropdown List (Options change based on vehicle/tubetrailer type)</td>
</tr>
<tr>
<td>General Variable 1</td>
<td>Energy Price [£/MWh]</td>
<td>N/A</td>
<td>Numerical</td>
</tr>
<tr>
<td>General Variable 2</td>
<td>WACC [%]</td>
<td>N/A</td>
<td>Numerical</td>
</tr>
</tbody>
</table>
<h1><strong>Levelized Cost Equations</strong></h1>
<hr>
<p>The table below describes the equations used to calculate key levelized cost values</p>
<table>
<thead>
<tr>
<th></th>
<th><strong>Supply Type</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Category</strong></td>
<td><strong>Vehicle</strong> / <strong>Tubetrailer</strong> / <strong>Flowrate</strong></td>
</tr>
<tr>
<td>Discounted H2 Lifetime Volume</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%3A%5CSigma%20%5Cleft%5B%20%5Cfrac%7B%5Ctext%7BH2%5C_Volume%7D%7D%7B(1%20%2B%20%5Ctext%7Bwacc%7D)%5Et%7D%20%5Cright%5D%2C%20i%20%5Crightarrow%2025" alt="\inline:\Sigma \left[ \frac{\text{H2\_Volume}}{(1 + \text{wacc})^t} \right], i \rightarrow 25" /></td>
</tr>
<tr>
<td>Discounted Energy Cost :</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5CSigma%20%5Cleft%5B%20%5Cfrac%7B%5Ctext%7BEnergy%5C_Cost%7D%7D%7B(1%20%2B%20%5Ctext%7Bwacc%7D)%5Et%7D%20%5Cright%5D%2C%20i%20%5Crightarrow%2025" alt="\inline\Sigma \left[ \frac{\text{Energy\_Cost}}{(1 + \text{wacc})^t} \right], i \rightarrow 25" /></td>
</tr>
</tbody>
</table>
<h1><strong>Compressor Calculations</strong></h1>
<hr>
<p>The table below describes the equations/correlations used to calculate key compression values</p>
<table>
<thead>
<tr>
<th><strong>Compressor</strong></th>
<th><strong>Piston</strong></th>
<th><strong>Diaphragm</strong></th>
<th><strong>Centrifugal</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Outlet Temperature [K]</td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineT_1(P_2%2FP_1)%5E%7B%5Cleft(%5Cgamma-1%5Cright)%2F%5Cgamma%7D" alt="\inlineT_1(P_2/P_1)^{\left(\gamma-1\right)/\gamma}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineT_1(P_2%2FP_1)%5E%7B%5Cleft(%5Cgamma-1%5Cright)%2F%5Cgamma%7D" alt="\inlineT_1(P_2/P_1)^{\left(\gamma-1\right)/\gamma}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineT_1(P_2%2FP_1)%5E%7B%5Cleft(%5Cgamma-1%5Cright)%2F%5Cgamma%7D" alt="\inlineT_1(P_2/P_1)^{\left(\gamma-1\right)/\gamma}" /></td>
</tr>
<tr>
<td>Stage End Pressure [Bar]</td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineP_%7B%5Ctext%7BIN%7D%7D(P_1%2FP_2)%5E%7B1%2FN%7D" alt="\inlineP_{\text{IN}}(P_1/P_2)^{1/N}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineP_%7B%5Ctext%7BIN%7D%7D(P_1%2FP_2)%5E%7B1%2FN%7D" alt="\inlineP_{\text{IN}}(P_1/P_2)^{1/N}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineP_%7B%5Ctext%7BIN%7D%7D(P_1%2FP_2)%5E%7B1%2FN%7D" alt="\inlineP_{\text{IN}}(P_1/P_2)^{1/N}" /></td>
</tr>
<tr>
<td>Isentropic Efficiency</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline2.3082(P_2%2FP_1)%5E2%2B20.717(P_2%2FP_1)%2B40.719" alt="\inline2.3082(P_2/P_1)^2+20.717(P_2/P_1)+40.719" /></td>
<td>85%</td>
<td>77%</td>
</tr>
<tr>
<td>Mechanical Efficiency</td>
<td>79%</td>
<td>79%</td>
<td>79%</td>
</tr>
<tr>
<td>Electrical Efficiency</td>
<td>95%</td>
<td>95%</td>
<td>95%</td>
</tr>
<tr>
<td>Work [kJ/kg] (Stage)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Cleft%5B%5Cfrac%7B%5Cgamma%7D%7B%5Cgamma-1%7D%5Cright%5D%5Cleft(%5Cfrac%7BR%20T_1%7D%7BM%7D%5Cright)%5Cleft%5B(P_2%2FP_1)%5E%7B%5Cleft(%5Cgamma-1%5Cright)%2F%5Cgamma%7D-1%5Cright%5D%20%2F%20%5Ctext%7BEff%5C_Ise%7D" alt="\inline\left[\frac{\gamma}{\gamma-1}\right]\left(\frac{R T_1}{M}\right)\left[(P_2/P_1)^{\left(\gamma-1\right)/\gamma}-1\right] / \text{Eff\_Ise}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Cleft%5B%5Cfrac%7B%5Cgamma%7D%7B%5Cgamma-1%7D%5Cright%5D%5Cleft(%5Cfrac%7BR%20T_1%7D%7BM%7D%5Cright)%5Cleft%5B(P_2%2FP_1)%5E%7B%5Cleft(%5Cgamma-1%5Cright)%2F%5Cgamma%7D-1%5Cright%5D%20%2F%20%5Ctext%7BEff%5C_Ise%7D" alt="\inline\left[\frac{\gamma}{\gamma-1}\right]\left(\frac{R T_1}{M}\right)\left[(P_2/P_1)^{\left(\gamma-1\right)/\gamma}-1\right] / \text{Eff\_Ise}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Cleft%5B%5Cfrac%7B(Z_1%2BZ_2)%2F2%5Cgamma%7D%7B%5Cgamma-1%7D%5Cright%5D%5Cleft(%5Cfrac%7BR%20T_1%7D%7BM%7D%5Cright)%5Cleft%5B(P_2%2FP_1)%5E%7B%5Cleft(%5Cgamma-1%5Cright)%2F%5Cgamma%7D-1%5Cright%5D%20%2F%20%5Ctext%7BEff%5C_Ise%7D" alt="\inline\left[\frac{(Z_1+Z_2)/2\gamma}{\gamma-1}\right]\left(\frac{R T_1}{M}\right)\left[(P_2/P_1)^{\left(\gamma-1\right)/\gamma}-1\right] / \text{Eff\_Ise}" /></td>
</tr>
<tr>
<td>Power [kW] (Stage)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineQ%5Cleft(%5Cfrac%7B%5Crho%7D%7B3600%5Ccdot1000%7D%5Cright)%5Ctext%7BWork%7D%5Cleft(1%2B%5Ctext%7Bleakpercent%7D%5Cright)%2F%5Cleft%5B%5Ctext%7Beff%5C_mech%7D%5Ccdot%5Ctext%7Beff%5C_elec%7D%5Cright%5D" alt="\inlineQ\left(\frac{\rho}{3600\cdot1000}\right)\text{Work}\left(1+\text{leakpercent}\right)/\left[\text{eff\_mech}\cdot\text{eff\_elec}\right]" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Cleft(%5Cfrac%7B%5Crho%7D%7B3600%5Ccdot1000%7D%5Cright)%5Ctext%7BWork%7D%5Cleft(1%2B%5Ctext%7Bleakpercent%7D%5Cright)%2F%5Cleft%5B%5Ctext%7Beff%5C_mech%7D%5Ccdot%5Ctext%7Beff%5C_elec%7D%5Cright%5D" alt="\inline\left(\frac{\rho}{3600\cdot1000}\right)\text{Work}\left(1+\text{leakpercent}\right)/\left[\text{eff\_mech}\cdot\text{eff\_elec}\right]" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5CinlineQ%5Cleft(%5Cfrac%7B%5Crho%7D%7B3600%5Ccdot1000%7D%5Cright)%5Ctext%7BWork%7D%5Cleft(1%2B%5Ctext%7Bleakpercent%7D%5Cright)%2F%5Cleft%5B%5Ctext%7Beff%5C_mech%7D%5Ccdot%5Ctext%7Beff%5C_elec%7D%5Cright%5D" alt="\inlineQ\left(\frac{\rho}{3600\cdot1000}\right)\text{Work}\left(1+\text{leakpercent}\right)/\left[\text{eff\_mech}\cdot\text{eff\_elec}\right]" /></td>
</tr>
<tr>
<td>Energy [kWh/kg] (Stage)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Ctext%7BPower%7D%2FQ" alt="\inline\text{Power}/Q" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Ctext%7BPower%7D%2FQ" alt="\inline\text{Power}/Q" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Ctext%7BPower%7D%2FQ" alt="\inline\text{Power}/Q" /></td>
</tr>
<tr>
<td>Cooling Energy</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.4%20%5Ccdot%20%5Ctext%7BEnergy%7D" alt="\inline0.4 \cdot \text{Energy}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.4%20%5Ccdot%20%5Ctext%7BEnergy%7D" alt="\inline0.4 \cdot \text{Energy}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.4%20%5Ccdot%20%5Ctext%7BEnergy%7D" alt="\inline0.4 \cdot \text{Energy}" /></td>
</tr>
<tr>
<td>Equipment Cost Eq. (Lit/Equipment)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Ctext%7BCEPCI%7D(2024)%2F%5Ctext%7BCEPCI%7D(1988)%5Ccdot4614%5Ccdot%5Ctext%7BPower%7D%5E%7B0.82%7D" alt="\inline\text{CEPCI}(2024)/\text{CEPCI}(1988)\cdot4614\cdot\text{Power}^{0.82}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Ctext%7BCEPCI%7D(2024)%2F%5Ctext%7BCEPCI%7D(1988)%5Ccdot4614%5Ccdot%5Ctext%7BPower%7D%5E%7B0.82%7D" alt="\inline\text{CEPCI}(2024)/\text{CEPCI}(1988)\cdot4614\cdot\text{Power}^{0.82}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline%5Ctext%7BCEPCI%7D(2024)%2F%5Ctext%7BCEPCI%7D(1988)%5Ccdot4614%5Ccdot%5Ctext%7BPower%7D%5E%7B0.82%7D" alt="\inline\text{CEPCI}(2024)/\text{CEPCI}(1988)\cdot4614\cdot\text{Power}^{0.82}" /></td>
</tr>
<tr>
<td>Installed Cost Eq.</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline(1%2B8.1981)%5Ccdot%5Ctext%7BEquipment%5C_Cost%7D%5E%7B-0.345%7D" alt="\inline(1+8.1981)\cdot\text{Equipment\_Cost}^{-0.345}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline(1%2B8.1981)%5Ccdot%5Ctext%7BEquipment%5C_Cost%7D%5E%7B-0.345%7D" alt="\inline(1+8.1981)\cdot\text{Equipment\_Cost}^{-0.345}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline(1%2B8.1981)%5Ccdot%5Ctext%7BEquipment%5C_Cost%7D%5E%7B-0.345%7D" alt="\inline(1+8.1981)\cdot\text{Equipment\_Cost}^{-0.345}" /></td>
</tr>
<tr>
<td>Maintenance Eq.</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.03%5Ccdot%5Ctext%7BEquipment%5C_Cost%7D" alt="\inline0.03\cdot\text{Equipment\_Cost}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.03%5Ccdot%5Ctext%7BEquipment%5C_Cost%7D" alt="\inline0.03\cdot\text{Equipment\_Cost}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.03%5Ccdot%5Ctext%7BEquipment%5C_Cost%7D" alt="\inline0.03\cdot\text{Equipment\_Cost}" /></td>
</tr>
<tr>
<td>Stage Numbers Eq.</td>
<td>Up to 650 (2 stage)</td>
<td>Up to 650 (2 stage)</td>
<td></td>
</tr>
</tbody>
</table>
<h1><strong>Storage Calculations</strong></h1>
<hr>
<p>The table below describes the equations/correlations used to calculate key storage values</p>
<table>
<thead>
<tr>
<th><strong>Storage</strong></th>
<th><strong>Type III/IV Container</strong></th>
<th><strong>Type I/II Container</strong></th>
<th><strong>All Types</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Equipment Cost Eq. (HyJack)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.0013%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20%2B%200.2151%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%20382.78" alt="\inline0.0013 \times \text{Pressure}^2 + 0.2151 \times \text{Pressure} + 382.78" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.0013%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20%2B%200.2151%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%20382.78" alt="\inline0.0013 \times \text{Pressure}^2 + 0.2151 \times \text{Pressure} + 382.78" /></td>
<td></td>
</tr>
<tr>
<td>Equipment Data</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline(0.0025%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20-%200.2467%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%20497.87)%20%5Ctimes%201.15" alt="\inline(0.0025 \times \text{Pressure}^2 - 0.2467 \times \text{Pressure} + 497.87) \times 1.15" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline(0.0025%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20-%200.2467%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%20497.87)" alt="\inline(0.0025 \times \text{Pressure}^2 - 0.2467 \times \text{Pressure} + 497.87)" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.0031%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20-%200.9867%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%20655.97" alt="\inline0.0031 \times \text{Pressure}^2 - 0.9867 \times \text{Pressure} + 655.97" /></td>
</tr>
<tr>
<td>Equipment Cost (HyJack II)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.0013%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20%2B%200.4796%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%20598.76" alt="\inline0.0013 \times \text{Pressure}^2 + 0.4796 \times \text{Pressure} + 598.76" /></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Equipment Data (II/IV)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.0031%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20-%200.9938%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%20655.53" alt="\inline0.0031 \times \text{Pressure}^2 - 0.9938 \times \text{Pressure} + 655.53" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline(0.0065%20%5Ctimes%20%5Ctext%7BPressure%7D%5E2%20-%203.4089%20%5Ctimes%20%5Ctext%7BPressure%7D%20%2B%201021.5)%20%5Ctimes%201.1" alt="\inline(0.0065 \times \text{Pressure}^2 - 3.4089 \times \text{Pressure} + 1021.5) \times 1.1" /></td>
<td></td>
</tr>
<tr>
<td>Installed Cost Eq.</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.25%20%5Ctimes%20%5Ctext%7BEquipment%20Cost%7D" alt="\inline0.25 \times \text{Equipment Cost}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.25%20%5Ctimes%20%5Ctext%7BEquipment%20Cost%7D" alt="\inline0.25 \times \text{Equipment Cost}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.25%20%5Ctimes%20%5Ctext%7BEquipment%20Cost%7D" alt="\inline0.25 \times \text{Equipment Cost}" /></td>
</tr>
<tr>
<td>Maintenance Eq.</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.02%20%5Ctimes%20%5Ctext%7Bequipment%5C_cost%7D" alt="\inline0.02 \times \text{equipment\_cost}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.02%20%5Ctimes%20%5Ctext%7Bequipment%5C_cost%7D" alt="\inline0.02 \times \text{equipment\_cost}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.02%20%5Ctimes%20%5Ctext%7Bequipment%5C_cost%7D" alt="\inline0.02 \times \text{equipment\_cost}" /></td>
</tr>
</tbody>
</table>
<h1><strong>Dispensing Calculations</strong></h1>
<hr>
<p>The table below describes the equations/correlations used to calculate key storage values</p>
<table>
<thead>
<tr>
<th><strong>Dispensing</strong></th>
<th><strong>200 Bar Dispensing</strong></th>
<th><strong>350 Bar Dispensing</strong></th>
<th><strong>700 Bar Dispensing</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Energy Consumption</td>
<td>N/A</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.18%20%5Ctext%7B%20kWh%2Fkg%20to%20pre-cool%20to%20%7D%20-20%5E%5Ccirc%20C" alt="\inline0.18 \text{ kWh/kg to pre-cool to } -20^\circ C" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.33%20%5Ctext%7B%20kWh%2Fkg%20to%20pre-cool%20to%20%7D%20-40%5E%5Ccirc%20C" alt="\inline0.33 \text{ kWh/kg to pre-cool to } -40^\circ C" /></td>
</tr>
<tr>
<td>Equipment Cost Eq. (HyJack)</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline19350%20%5Ctimes%20N%5E%7B-0.113%7D" alt="\inline19350 \times N^{-0.113}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline50673%20%5Ctimes%20N%5E%7B-0.117%7D" alt="\inline50673 \times N^{-0.117}" /></td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline66572%20%5Ctimes%20N%5E%7B-0.122%7D" alt="\inline66572 \times N^{-0.122}" /></td>
</tr>
<tr>
<td>Installed Cost Eq.</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline(1%20%2B%208.1981)%20%5Ctimes%20%5Ctext%7BEquipment%5C_Cost%7D%5E%7B-0.345%7D" alt="\inline(1 + 8.1981) \times \text{Equipment\_Cost}^{-0.345}" /></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Maintenance Eq.</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline0.03%20%5Ctimes%20%5Ctext%7Bequipment%5C_cost%7D" alt="\inline0.03 \times \text{equipment\_cost}" /></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Dispensing Rate Car</td>
<td><img align="center" src="https://i.upmath.me/svg/%5Cinline3.6%20%5Ctext%7B%20kg%2Fmin%7D" alt="\inline3.6 \text{ kg/min}" /></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Dispensing Rate Tubetrailer</td>
<td><img align="center" src="https://i.upmath.me/svg/3.6%20%5Ctext%7B%20kg%2Fmin%7D" alt="3.6 \text{ kg/min}" /></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Dispensing Rate HDV</td>
<td><img align="center" src="https://i.upmath.me/svg/7.2%20%5Ctext%7B%20kg%2Fmin%7D" alt="7.2 \text{ kg/min}" /></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h1><strong>Calculation Methodology</strong></h1>
<p>===================================================</p>
<p>H2 AuxInvest uses a combination of shortcut optimization algorithms and detailed simulation models to analyze input data against high TRL benchmark and available literature data.</p>
<p>The methodology incorporates real-world data and supplier-agnostic information to provide a balanced view of new vs. established technologies.
The functions to calculate this are provided in the project folder. If you notice an issue/wish to improve a function, please raise an issue on the project github and/or send a push request.</p>
<p>The following python modules handle the engineering calculations:</p>
<ol>
<li>Flowrate Calculation -</li>
<li>Compressor Class</li>
<li>Storage Class</li>
<li>Dispenser Class</li>
<li>LCOH Calculator</li>
</ol>
<h1><strong>Flowrate Calculation</strong></h1>
<hr>
<p>Outlined below are two utility functions used for converting mass flow rates and vehicle refueling rates into standardized units of kilograms per hour (kg/h).
These functions facilitate the handling of various input units, ensuring consistent calculations across different scenarios.</p>
<p><strong>1. convert_mass_flowrate_to_kg_per_hour(mass_kg, time_unit)</strong></p>
<p>Converts a given mass flow rate from &quot;kilograms per specified time unit&quot; to &quot;kilograms per hour&quot;.</p>
<p><em>Parameters:</em></p>
<ul>
<li><strong>mass_kg</strong>: The mass flow rate in kilograms per the specified time unit.</li>
<li><strong>time_unit</strong>: The unit of time for the given mass flow rate. Valid options are <strong>&quot;hour&quot;</strong>, <strong>&quot;day&quot;</strong>, and <strong>&quot;year&quot;</strong>.</li>
</ul>
<p><em>Returns:</em></p>
<ul>
<li>The converted mass flow rate in kilograms per hour (kg/h).</li>
</ul>
<p><em>Example Usage:</em></p>
<p>avg_flowrate_kg_per_hour = convert_mass_flowrate_to_kg_per_hour(mass_kg=120, time_unit='day')</p>
<p><strong>2. convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity, num_vehicles, time_unit)</strong></p>
<p>Calculates the total mass flow rate in kilograms per hour based on the refueling capacity of a single vehicle and the total number of vehicles refueled within a specified time period.</p>
<p><em>Parameters:</em></p>
<ul>
<li><strong>vehicle_capacity</strong>: The fuel capacity of a single vehicle in kilograms (kg).</li>
<li><strong>num_vehicles</strong>: The total number of vehicles refueled within the specified time period.</li>
<li><strong>time_unit</strong>: The unit of time over which the vehicles are refueled. Valid options are <strong>&quot;hour&quot;</strong>, <strong>&quot;day&quot;</strong>, and <strong>&quot;year&quot;</strong>.</li>
</ul>
<p><em>Returns:</em></p>
<ul>
<li>The total mass flow rate resulting from refueling the specified number of vehicles, converted to kilograms per hour (kg/h).</li>
</ul>
<p><em>Example Usage:</em></p>
<p>total_kg_per_hour = convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity=5, num_vehicles=24, time_unit='day')</p>
<p><em>Usage Notes:</em>*</p>
<ul>
<li>These functions are designed to be generic and applicable to various scenarios involving mass flow rates and vehicle refueling.</li>
<li>Ensure that the <strong>time_unit</strong> parameter matches one of the expected strings (<strong>&quot;hour&quot;</strong>, <strong>&quot;day&quot;</strong>, or <strong>&quot;year&quot;</strong>) to avoid key errors.</li>
<li>The functions can be called separately or in conjunction, depending on the specific conversion requirements of your application.</li>
</ul>
<h1><strong>Compressor Class</strong></h1>
<hr>
<p><strong>Compressor (Base Class)</strong></p>
<p>This parent class is designed as a base for specific compressor types and is not intended to be instantiated directly.
It implements common calculations and properties shared among different compressor types to avoid duplicating code.</p>
<p>Constructor - Compressor(inputs, avg_flowrate, peak_flowrate, comp_type)</p>
<p><em>Parameters:</em></p>
<ul>
<li><strong>inputs</strong>: User input parameters for the compressor.</li>
<li><strong>avg_flowrate</strong>: Average flow rate through the compressor.</li>
<li><strong>peak_flowrate</strong>: Peak flow rate through the compressor.</li>
<li><strong>comp_type</strong>: The type of compressor (e.g., piston, diaphragm).</li>
</ul>
<p><em>Methods</em></p>
<ul>
<li><strong>set_peak_flowrate(new_peak_flowrate)</strong>: Update the peak flow rate.</li>
<li><strong>do_all_calculations()</strong>: Perform all necessary calculations for the compressor.</li>
<li><strong>calculate_number_of_stages()</strong>: Determine the number of compression stages needed based on the input and output pressures.</li>
<li><strong>calculate_inter_stage_p()</strong>: Calculate inlet and outlet pressures and inlet temperature for each stage.</li>
<li><strong>calculate_outlet_temp()</strong>: Calculate the outlet temperature for each compression stage.</li>
<li><strong>calculate_isentropic_efficiency()</strong>: Calculate or retrieve the isentropic efficiency for each stage.</li>
<li><strong>calculate_work_done()</strong>: Calculate the work done in each compression stage.</li>
<li><strong>calculate_compressor_power()</strong>: Compute the power requirements of the compressor.</li>
<li><strong>calculate_compression_energy()</strong>: Calculate the energy needed to compress one kg of hydrogen for each stage.</li>
<li><strong>calculate_cooling_energy()</strong>: Estimate the energy required for cooling hydrogen between each compression stage.</li>
<li><strong>calculate_compressor_equipment_cost()</strong>, <strong>calculate_compressor_installation_cost()</strong>, <strong>calculate_compressor_maintenance()</strong>, <strong>calculate_compressor_energy()</strong>, <strong>calculate_cost_summary()</strong>: Methods for calculating various costs and summarizing the overall cost.</li>
</ul>
<p><strong>PistonCompressor (Child Class)</strong></p>
<p>Inherits from Compressor. This class is specific to piston compressors and may override parent class methods for calculations specific to piston compressors.</p>
<p>Constructor - PistonCompressor(inputs, avg_flowrate, peak_flowrate)</p>
<p><em>Overridden Methods</em></p>
<ul>
<li><strong>calculate_isentropic_efficiency()</strong>: Calculate the isentropic efficiency for each stage, specific to piston compressors.</li>
</ul>
<p><strong>DiaphragmCompressor (Child Class)</strong></p>
<p>Inherits from <strong>Compressor</strong>. This class is specific to diaphragm compressors.</p>
<p>Constructor - DiaphragmCompressor(inputs, avg_flowrate, peak_flowrate)</p>
<p><strong>CentrifugalCompressor (Child Class)</strong></p>
<p>Inherits from <strong>Compressor</strong>. This class is specific to centrifugal compressors and may require its own implementation for certain calculations.</p>
<p>Constructor - CentrifugalCompressor(inputs, avg_flowrate, peak_flowrate)</p>
<h1><strong>Storage Calculation</strong></h1>
<hr>
<p><strong>Storage (Base Class)</strong></p>
<p>The <strong>Storage</strong> class represents a storage system for hydrogen. It includes methods for calculating storage capacity, costs, and the levelized cost of hydrogen (LCOH).</p>
<p>Constructor - Storage(inputs, avg_flowrate, peak_flowrate, storage_type)</p>
<p><em>Parameters:</em></p>
<ul>
<li><strong>inputs</strong>: A dictionary containing input parameters for the storage system.</li>
<li><strong>avg_flowrate</strong>: The average flow rate of hydrogen (assumed placeholder value for calculations).</li>
<li><strong>peak_flowrate</strong>: The peak flow rate of hydrogen.</li>
<li><strong>storage_type</strong>: A string indicating the type of storage system.</li>
</ul>
<p><em>Methods</em></p>
<ul>
<li><strong>set_peak_flowrate(new_peak_flowrate)</strong>: Sets a new peak flowrate.</li>
<li><strong>set_avg_flowrate(new_avg_flowrate)</strong>: Sets a new average flowrate.</li>
<li><strong>calculate_all()</strong>: A convenience method to execute all calculations related to the storage system.</li>
<li><strong>calculate_storage_capacity()</strong>: Converts storage capacity from user-defined units to kg.</li>
<li><strong>calculate_storage_equipment_cost()</strong>: Calculates the cost of the storage equipment.</li>
<li><strong>calculate_storage_installation_cost()</strong>: Estimates the cost of installing the storage equipment.</li>
<li><strong>calculate_storage_maintenance()</strong>: Estimates the maintenance costs for the storage system.</li>
<li><strong>calculate_storage_energy()</strong>: Calculates the energy costs associated with the storage system.</li>
<li><strong>calculate_cost_summary()</strong>: Summarizes the capital and operational expenses and calculates the LCOH.</li>
</ul>
<p><strong>Storage_I_II (Child Class)</strong></p>
<p>Inherits from <strong>Storage</strong>. This class represents Type I/II hydrogen storage systems.</p>
<p>Constructor - Storage_I_II(inputs, avg_flowrate, peak_flowrate)</p>
<p><em>Overridden Methods</em></p>
<ul>
<li><strong>calculate_storage_equipment_cost()</strong>: Custom equipment cost calculation for Type I/II storage systems.</li>
</ul>
<p><strong>Storage_III_IV (Child Class)</strong></p>
<p>Inherits from <strong>Storage</strong>. This class is specific to Type III/IV hydrogen storage systems.</p>
<p>Constructor - Storage_III_IV(inputs, avg_flowrate, peak_flowrate)</p>
<p><em>Overridden Methods</em></p>
<ul>
<li><strong>calculate_storage_equipment_cost()</strong>: Custom equipment cost calculation for Type III/IV storage systems. Note: The provided method’s documentation mentions it’s identical to the base class’s implementation.
If there’s no distinct calculation for Type III/IV, this method may not need to be overridden.</li>
</ul>
<h1><strong>Dispenser Class</strong></h1>
<hr>
<p>The <strong>Dispenser</strong> class models a hydrogen fuel dispenser, incorporating calculations for equipment costs, maintenance, installation costs, energy consumption, and the levelized cost of hydrogen (LCOH).</p>
<p><strong>Constructor</strong></p>
<p>Dispenser(avg_flowrate, peak_flowrate, inputs)</p>
<p><em>Parameters:</em></p>
<ul>
<li><strong>avg_flowrate</strong>: The average flow rate of hydrogen.</li>
<li><strong>peak_flowrate</strong>: The peak flow rate of hydrogen.</li>
<li><strong>inputs</strong>: A dictionary containing various input parameters such as lifetime, WACC (Weighted Average Cost of Capital), energy price, and specifics about the dispensing vehicle including type, pressure, and mass.</li>
</ul>
<p><em>Methods</em></p>
<ul>
<li><strong>calculate_all()</strong>: Executes all relevant calculations for the dispenser setup.</li>
<li><strong>calculate_vehicle_properties(vehicle, pressure, capacity)</strong>: Computes properties related to the vehicle being refuelled, including slow and quick refuel times based on dispensing pressure and mass.</li>
<li><strong>calculate_num_dispensers_needed()</strong>: Determines the number of dispensers required to meet peak hydrogen flow demands.</li>
<li><strong>calculate_dispenser_equipment_cost()</strong>: Estimates the cost of the dispenser equipment based on the pressure requirements.</li>
<li><strong>calculate_dispenser_installation_cost()</strong>: Calculates the cost associated with installing the dispensers.</li>
<li><strong>calculate_dispenser_maintenance()</strong>: Estimates the annual maintenance costs for the dispensers.</li>
<li><strong>calculate_dispenser_energy()</strong>: Computes the energy costs associated with operating the dispensers, which varies by the dispensing pressure.</li>
<li><strong>calculate_cost_summary()</strong>: Summarizes the capital expenditures (CAPEX), operational expenditures (OPEX), and calculates the overall levelized cost of hydrogen (LCOH) for the dispenser setup.</li>
</ul>
<p><em>Calculations and Assumptions</em></p>
<p>The class includes several assumptions about refuelling rates and additional time required for connection/disconnection, which are used to determine refuelling times.
These values and the specific calculations depend on whether precooling is used and the type of vehicle being refuelled (tube trailer or passenger vehicle).</p>
<p>Cost calculations are influenced by the specified dispensing pressure, affecting equipment cost, installation cost, and energy cost.
Maintenance costs are assumed to be a percentage of the equipment cost, and all costs contribute to the calculation of the levelized cost of hydrogen (LCOH).</p>
<p><em>Usage</em></p>
<p>Instantiate the <strong>Dispenser</strong> class with the average and peak hydrogen flow rates and a dictionary of input parameters.
Use the <strong>calculate_all()</strong> method to perform all calculations and access the <strong>results</strong> attribute to retrieve detailed cost and operational information.</p>
<h1><strong>LCOH Calculator</strong></h1>
<hr>
<p>The <strong>H2AuxCostCalculator</strong> class is designed to facilitate comprehensive cost analysis for hydrogen supply chain hardware.
It integrates functionalities for converting flow rates and pressures, instantiating hardware components, performing necessary calculations, and compiling cost summaries.</p>
<p><strong>Constructor</strong></p>
<p>H2AuxCostCalculator()
Initializes an instance of the <strong>H2AuxCostCalculator</strong> class.</p>
<p><em>Methods</em></p>
<p><strong>calculate_costs(response: dict) -&gt; dict</strong></p>
<p>Performs all required calculations to estimate the costs associated with different pieces of hydrogen supply chain hardware based on user inputs.</p>
<p><em>Parameters:</em></p>
<ul>
<li><strong>response</strong>: A dictionary containing user-specified parameters and selections for hardware configurations, including pressure and mass values, dispensing rates, and whether storage is required.</li>
<li><strong>Returns:</strong>
<ul>
<li>A dictionary mapping each piece of hardware to its corresponding cost calculations and results.</li>
</ul>
</li>
</ul>
<p><em>Workflow and Calculations</em></p>
<ol>
<li><strong>Extracting Parameters</strong>: The method extracts and processes user inputs, including converting pressure units to bars and determining flow rates in kilograms per hour.</li>
<li><strong>Instantiation of Hardware Classes</strong>:
<ul>
<li>Creates instances of <strong>Dispenser</strong>, <strong>Storage_I_II</strong>, <strong>Storage_III_IV</strong>, <strong>CentrifugalCompressor</strong>, <strong>DiaphragmCompressor</strong>, and <strong>PistonCompressor</strong> based on the processed inputs.</li>
</ul>
</li>
<li><strong>Performing Calculations</strong>:
<ul>
<li>For each hardware component, it calls the relevant method (<strong>calculate_all()</strong> or <strong>do_all_calculations()</strong>) to perform the necessary cost and operational calculations.</li>
</ul>
</li>
<li><strong>Compiling Results</strong>:
<ul>
<li>Aggregates the results from each hardware component into a single dictionary, providing a comprehensive overview of the costs associated with the configured hydrogen supply chain hardware.</li>
</ul>
</li>
</ol>
<p><em>Usage</em></p>
<p>Instantiate the class and call the <strong>calculate_costs</strong> method with the user input parameters as a dictionary.
The method returns a detailed dictionary containing cost analysis for each piece of hardware involved in the hydrogen supply chain.</p>
<p><em>Example Usage:</em></p>
<p>calculator = H2AuxCostCalculator() costs_dict = calculator.calculate_costs(user_input_parameters)</p>
<p><em>Notes</em></p>
<ul>
<li>The <strong>calculate_costs</strong> method relies on helper functions for unit conversions and extracting numerical values from input strings.</li>
<li>It supports dynamic inclusion of storage hardware based on user input.</li>
<li>This class serves as a central point for initiating cost calculations across various components of hydrogen infrastructure</li>
</ul>
<h1><strong>Assumptions/Limitations</strong></h1>
<p>====================================================</p>
<p>The tool’s accuracy is dependent on the quality and completeness of the input data. Assumptions are made regarding standard operational conditions and calculation workflow,
it is recommended to consult with specialists for critical decisions. The tool is continuously updated to reflect new data and user feedback, yet it may not capture all nuances of every unique project scenario.</p>`;

    return (
        <Box
            sx={{
                height: '100vh',
                overflowY: 'scroll',
                padding: '20px',
            }}
        >
            <Typography level="h1" sx={{ marginBottom: '20px' }}>Documentation</Typography>
            <Typography>{documentationSections}</Typography>
        </Box>
    );
};

export default Docs;