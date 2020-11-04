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
        const target = event.currentTarget.attributes.props.nodeValue
        this.props.gridSize(target)
    }

    toggle = () => this.setState({dropdownOpen: !this.state.dropdownOpen});


    render(){

        return(
            <section className="centerParent">
                <div className="center">
                    <div className="buttonParent">
                        <button className="btn btn-default" onClick={this.props.playButton}>
                            Play
                        </button> <span/> <span/>
                        <button className="btn btn-default" onClick={this.props.stopButton}>
                            Stop
                        </button> <span/> <span/>
                        <button className="btn btn-default" onClick={this.props.clearGrid}>
                            Clear
                        </button> <span/> <span/>
                        <button className="btn btn-default" onClick={this.props.slowSpeed}>
                            Slow
                        </button> <span/> <span/>
                        <button className="btn btn-default" onClick={this.props.fastSpeed}>
                            Fast
                        </button> <span/> <span/>
                        <button className="btn btn-default" onClick={this.props.seedGrid}>
                            Seed
                        </button> <span/> <span/> 
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle className="btn btn-default"> Grid Size <span/>
                                <span className="caret" />
                                <DropdownMenu> 
                                <DropdownItem key="1" props={"1"} onClick={this.handleSelect}>25x25</DropdownItem>
                                <DropdownItem key="2" props={"2"}  onClick={this.handleSelect}>50x50</DropdownItem>
                                <DropdownItem key="3" props={"3"}  onClick={this.handleSelect}>70x50</DropdownItem>
                                </DropdownMenu>
                            </DropdownToggle>
                        </ButtonDropdown>
                    </div>
                </div>
            </section>
        )
    }
}

export default Buttons