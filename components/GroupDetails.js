import React,{Component} from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class GroupDetails extends Component {
  constructor(props){
    super(props);
      this.state = {
        groups: props.group,
        options: {
          page :1,
          sizePerPageList: [ {
            text: '3', value: 3
          }, {
            text: '6', value: 6
          }, {
            text: 'All', value: props.group.length
          } ],
          sizePerPage: 3,
          pageStartIndex: 0,
          prePage: 'Prev', // Previous page button text
         nextPage: 'Next', // Next page button text
         firstPage: 'First', // First page button text
         lastPage: 'Last', // Last page button text
         defaultSortName: 'no_of_members'
        }
      };
      console.log(this.state.groups);

  }
render() {
  return (
    <div>
      <BootstrapTable data={this.state.groups} striped hover pagination={ true } options={ this.state.options }>
        <TableHeaderColumn isKey dataField='group_code'>Group ID</TableHeaderColumn>
        <TableHeaderColumn dataField='group_name'>Group Name</TableHeaderColumn>
        <TableHeaderColumn dataField='group_status'>Group Status</TableHeaderColumn>
        <TableHeaderColumn dataField='loan_purpose'>Loan Purpose</TableHeaderColumn>
        <TableHeaderColumn dataField='no_of_members' dataSort>No. of Members</TableHeaderColumn>
        <TableHeaderColumn dataField='loan_cycle'>Loan Cycle</TableHeaderColumn>
        <TableHeaderColumn dataField='loan_sanctioned_date'>Loan Sanctioned Date</TableHeaderColumn>
        <TableHeaderColumn dataField='previous_loan_amount' >Previous Loan Amount</TableHeaderColumn>
        <TableHeaderColumn dataField='previous_loan_closure_date'>Previous Loan Closure Date</TableHeaderColumn>
        <TableHeaderColumn dataField='village'>Village</TableHeaderColumn>
        <TableHeaderColumn dataField='panchayat'>Panchayat</TableHeaderColumn>
        <TableHeaderColumn dataField='block'>Block</TableHeaderColumn>
        <TableHeaderColumn dataField='bank'>Bank</TableHeaderColumn>
        <TableHeaderColumn dataField='branch'>Branch</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}
}
