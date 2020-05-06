import React, { Component } from "react";
import Taskitem from "./Taskitem";

class ManagerTaskList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       filterName:'',
       filterStatus: -1, // tất cả = -1 , bật chế độ =1, tắt chế độ =0
    }
  }
  onChange =(e) =>{
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(name ==='filterName'? value: this.state.filterName,
                        name ==='filterStatus'? value: this.state.filterStatus)
    this.setState({
      [name]: value
    })
  }
  render() {
    
    var { tasks } = this.props;
    var{filterName, filterStatus} = this.props
    var elementTasks = tasks.map((tasks, index) => {
      return <Taskitem
       key={tasks.id} 
       index={index} 
       tasks={tasks} 
       onUpdateStatus={this.props.onUpdateStatus}
       onDelete={this.props.onDelete} 
       onUpdate={this.props.onUpdate}/>;
    });

    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Name</th>
                <th className="text-center">Status</th>
                <th className="text-center">Edit and Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange} />
                </td>
                <td>
                  <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange} >
                    <option value="-1">ALL status</option>
                    <option value="0">Hide Action</option>
                    <option value="1">Active</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {/* task item */}

              {elementTasks}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ManagerTaskList;
