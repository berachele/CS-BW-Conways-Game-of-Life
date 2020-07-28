import React from 'react';
import {ButtonToolbar, MenuItem, DropdownButton} from 'react-bootstrap'

class Buttons extends React.Component{

    handleSelect = (event) => {
        this.props.gridSize(event)
    }
    
    render(){
        return(
            <div className="center">
                <ButtonToolbar>
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
                    <DropdownButton
                        title="Grid Size"
                        id="size-menu"
                        onSelect={this.handleSelect}>
                    <MenuItem eventkey="1">25x25</MenuItem>
                    <MenuItem eventkey="2">50x50</MenuItem>
                    <MenuItem eventkey="3">70x70</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Buttons