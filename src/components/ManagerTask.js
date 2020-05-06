import React, { Component } from "react";


class ManagerTask extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id:'',
       name:'',
       status:false
    }
  }
  ///////////////////////////////////
  onCloseForm =()=>{
  this.props.onCloseForm()
  }
  ////////////////////////////////////
  onChange =(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true'? true: false; //ep kieu
    }
    this.setState({
      [name]:value
    });
  }
 ////////////////////////////////////
 onSubmit =(event)=>{
   event.preventDefault();
    // this.props.onSubmit(this.state.name, this.state.status === 'true'? true :false) --name,status ep kieu
    this.props.onSubmit(this.state)
    this.onClear();
    this.onCloseForm();
 }
 onClear =()=>{
   this.setState({
     name:'',
     status:false,
   });
 }
 ////////////////////// update managertask
 componentDidMount (){
  if(this.props.task){
    this.setState({
      id: this.props.task.id,
      name: this.props.task.name,
      status: this.props.task.status
    });
    console.log(this.state);
    
  }
   
 }
 UNSAFE_componentWillReceiveProps(nextProps){
  if(nextProps && nextProps.task){
    this.setState({
      id: nextProps.task.id,
      name: nextProps.task.name,
      status: nextProps.task.status
    })
    console.log(this.state);
    
  }
  else if(nextProps && nextProps.task === null){
    this.setState({
      id:'',
      name:'',
      status:false
    })
  }
 }
// static getDerivedStateFromProps (props){
//   console.log(props);
  
// }
  render() {
    var {id} = this.state
    return (
      <div className="panel panel-warning">
        <div className="panel-heading ">
          <h3 className="panel-title ">
            {id !== ''? 'Update Work':  'ADD Work'}
            <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
          </h3>
        </div>
        <div className="panel-body">
          <form  onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name :</label>
              {/* lấy value form */}
              <input type="text" 
              className="form-control"
              name="name"
              value={this.state.name} 
              onChange={this.onChange}/>

            </div>
            <label>Status :</label>

            <select className="form-control" 
            name="status"
            value={this.state.status} 
            onChange={this.onChange}
            >
              <option value={true}>Active : on</option>
              <option value={false}>Hide Action : of</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning ">
                Save Task
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger"
              onClick= {this.onClear}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ManagerTask;
