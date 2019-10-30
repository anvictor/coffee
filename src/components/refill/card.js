import React, { Component } from "react";
import Badge from "@material-ui/core/Badge/Badge";
import Button from "@material-ui/core/Button/Button";

export default class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className='card'>
      <img className='imgConsumable' src={'./assets/img/'+this.props.picture} alt={this.props.caption}/>
      <Badge color="primary" badgeContent={this.props.value} className='cardBadge'>
        <div>
          {/*Badge can not be without child tag*/}
        </div>
      </Badge>
      <Button className='addBtn' onClick={(e) =>{this.props.handleConsumableAdded(e)}} variant="contained" color='primary'>
        {this.props.caption}
      </Button>
    </div>
  };
};




