import React, { Component } from 'react';
import Record from './Record';
// import {getJSON} from 'jquery'
import * as RecordsAPI from '../utils/RecordsAPI';
import RecordForm from './RecordForm'
class Records extends Component {
  constructor(){
    super();
    this.state ={
      records:[],
      error:null,
      isLoaded:false
    }
  }
  componentDidMount(){
    RecordsAPI.getAll().then(
      response => this.setState({
        records:response.data,
        isLoaded:true
      })
    ).catch(
      error => this.setState({
        error:error,
        isLoaded:true
      })
    )
  }
  render() {
    const { error , isLoaded ,records } = this.state;
    let recordsComponent;
    if( error ){
      recordsComponent =<div> error </div>
    }else if( !isLoaded ){
      recordsComponent=<div> loading </div>
    }else{
      recordsComponent = (<table className='table table-border'>
              <thead>
                <tr> 
                  <th>
                      Date
                  </th> 
                  <th>
                      Ttitle
                  </th>
                  <th>
                      Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                  {records.map((item,i) => <Record  key={item.id} {...item} />    )}
              </tbody>
          </table>
          )
    }
    return (
      <div>
          <h2>records</h2>
          <RecordForm />
          {recordsComponent}
      </div>
    )

  }
}

export default Records;
