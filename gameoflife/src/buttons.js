import React from 'react';
import {DropdownItem, DropdownMenu, ButtonDropdown, DropdownToggle} from 'reactstrap'

class Buttons extends React.Component{
    constructor(){
        super()
        this.state = {
            dropdownOpen: false,
        }
    }
    
    handleSelect = (event) => {
        console.log('inside HANDLESELECT')
        this.props.gridSize(event)
    }

    toggle = () => this.setState({dropdownOpen: !this.state.dropdownOpen});

    render(){

        return(
            <div className="center">
                <div>
                    <button className="btn btn-default" onClick={this.props.playButton}>
                        Play
                    </button>
                    <button className="btn btn-default" onClick={this.props.stopButton}>
                        Stop
                    </button>
                    <button className="btn btn-default" onClick={this.props.clearGrid}>
                        Clear
                    </button>
                    <button className="btn btn-default" onClick={this.props.slowSpeed}>
                        Slow
                    </button>
                    <button className="btn btn-default" onClick={this.props.fastSpeed}>
                        Fast
                    </button>
                    <button className="btn btn-default" onClick={this.props.seedGrid}>
                        Seed Grid
                    </button>
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownmenu" data-toggle="dropdown">
                        Dropdown
                        <span className="caret" />
                    </button>
                    {/* <ul className="dropdown-menu" aria-labelledby="dropdownmenu" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <li eventkey="1" onSelect={this.handleSelect}>25x25</li>
                        <li eventkey="2" onSelect={this.handleSelect}>50x50</li>
                        <li eventkey="3" onSelect={this.handleSelect}>70x70</li>
                    </ul> */}
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="btn btn-default"> Grid Size <span/>
                            <span className="caret" />
                            <DropdownMenu> 
                            <DropdownItem eventkey="1" onClick={this.handleSelect}>25x25</DropdownItem>
                            <DropdownItem eventkey="2" onClick={this.handleSelect}>50x50</DropdownItem>
                            <DropdownItem eventkey="3" onClick={this.handleSelect}>50x70</DropdownItem>
                            </DropdownMenu>
                        </DropdownToggle>
                    </ButtonDropdown>
                </div>
            </div>
        )
    }
}

export default Buttons