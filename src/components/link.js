import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button/Button";
class TriggerPath extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className={this.props.path.color}>
        <Link  to={this.props.path.disabled ?'#/cooking': this.props.path.url}>
          <Button disabled = {this.props.path.disabled} variant="contained" color={this.props.path.color}>
            {this.props.path.caption}
          </Button>
        </Link>
      </div>

    );
  }
}

export default TriggerPath;
