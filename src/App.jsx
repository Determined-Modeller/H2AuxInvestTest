import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {
 ProjectSetupCreateForm 
} from './ui-components';
import {
 CentralFillingStationInputsCreateForm 
} from './ui-components';
import {
 CentralHDSInputsCreateForm 
} from './ui-components';
import {
 CentralIndustrialUserInputsCreateForm 
} from './ui-components';
import {
 DistributedFillingStationInputsCreateForm 
} from './ui-components';
import {
 DistributedIndustrialUserCreateForm 
} from './ui-components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Render the Amplify form */}
        <ProjectSetupCreateForm />
      </header>
    </div>
  );
}

export default App;