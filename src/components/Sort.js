import React, { Component } from 'react'

 class Sort extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sortBy:'name',
      sortVl: 1
    }
  }
  
  
   onClick =(sortBy, sortValue)=>{
    
    this.props.onSort(sortBy, sortValue)
    this.setState({
      sortBy:sortBy,
      sortVl:sortValue
    })
    
   }
    render() {
      var {sortBy, sortVl} = this.state;
        return (
            <div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort Work <span className="fas fa-caret-down ml-5"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li onClick ={()=> this.onClick('name', 1, )}>
                <a role="button" className={(sortBy ==='name' && sortVl === 1)? "Sort-Slect":""} >
                  <span className="fa fa-sort-alpha-asc pr-5">Name A-Z</span>
                </a>
              </li>
              <li onClick ={()=> this.onClick('name', -1,)}>
                <a  role="button" className={(sortBy ==='name' && sortVl === -1)? "Sort-Slect":""}>
                  <span className="fa fa-sort-alpha-desc pr-5">Name Z-A</span>
                </a>
              </li>
              <li role="separator" className="divider"></li>
              <li onClick ={()=> this.onClick('status', 1,)}>
                <a  role="button" className={(sortBy ==='status' && sortVl === 1)? "Sort-Slect":""}>
                  Status Active
                </a>
              </li>
              <li onClick ={()=> this.onClick('status', -1,)}>
                <a  role="button" className={(sortBy ==='status' && sortVl === -1)? "Sort-Slect":""}>
                  Status Hide Action
                </a>
              </li>
            </ul>
          </div>
        </div>
            </div>
        )
    }
}
export default Sort;