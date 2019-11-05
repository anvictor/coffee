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
      <Badge color={this.props.color} badgeContent={this.props.value} className='cardBadge'>
        <div notice={'This div needed. Badge can not be without child tag'}>
          {/*Warning:(15, 9) XML tag has empty body*/}
        </div>
      </Badge>
      <Button className='addBtn' onClick={(e) =>{this.props.handleAddConsumableClicked(e)}} variant="contained" color={this.props.color}>
        {this.props.caption}
      </Button>
    </div>
  };
};




