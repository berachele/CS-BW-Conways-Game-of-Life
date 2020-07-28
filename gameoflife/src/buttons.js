import React from 'react';
import {Button, DropdownItem, DropdownMenu, ButtonDropdown, DropdownToggle} from 'reactstrap'

class Buttons extends React.Component{

    handleSelect = (event) => {
        this.props.gridSize(event)
    }
    
    render(){
        return(
            <div className="center">
                <Button>
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
                    <ButtonDropdown>
                        <DropdownToggle> Grid Size
                            <DropdownMenu
                                title="Grid Size"
                                id="size-menu"
                                onSelect={this.handleSelect}> 
                            <DropdownItem eventkey="1">25x25</DropdownItem>
                            <DropdownItem eventkey="2">50x50</DropdownItem>
                            <DropdownItem eventkey="3">70x70</DropdownItem>
                            </DropdownMenu>
                        </DropdownToggle>
                    </ButtonDropdown>
                </Button>
            </div>
        )
    }
}

export default Buttons