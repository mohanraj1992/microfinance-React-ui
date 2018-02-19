import React,{Component} from 'react'//
import Multistep from 'react-multistep'

import LocationDetails_Entry from './GroupStepper/LocationDetails_Entry'
import GroupDetails_Entry from './GroupStepper/GroupDetails_Entry'
import LoanDetails_Entry from './GroupStepper/LoanDetails_Entry'
import CollectionDetails_Entry from './GroupStepper/CollectionDetails_Entry'
import FileUpload_Entry from './GroupStepper/FileUpload_Entry'

export default class GroupCreation extends Component {
  constructor(props){
    super(props);
  }

  render(){

    const steps= [
                {name: 'Group Details', Component: <GroupDetails_Entry />},
                {name: 'Location Details', Component: <LocationDetails_Entry />},
                {name: 'Loan details', Component: <LoanDetails_Entry />},
                {name: 'Collection details', Component: <CollectionDetails_Entry />},
                {name: 'Files and submit', Component: <FileUpload_Entry />},
                ];
    return (
      <Multistep showNavigation={true} steps={steps}/>
    );
  }
}
