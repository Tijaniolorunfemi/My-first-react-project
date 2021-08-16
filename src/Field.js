import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Page from './Page'

class Field extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Firstname: '' , lastname: '', nin:'' ,
            localgovernment:'', electionid:''
        }

        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange= this.handleLastnameChange.bind(this);
        this.handleElectionidChange= this.handleElectionidChange.bind(this);
        this.handleNinChange= this.handleNinChange.bind(this);  
    }
    //  saveRef = useRef(null)

    handleFirstnameChange = (event) => {
        if(event.target.value.match("^[a-zA-Z]*$")!=null) {
            this.setState({Firstname: event.target.value});
        }
        this.setState({
            Firstname:event.target.value 
        })
    }

    handleLastnameChange = (event) => {
        if(event.target.value.match("^[a-zA-Z]*$")!=null) {
            this.setState({Lastname: event.target.value});
        }
        this.setState({
            lastname:event.target.value
        })
    }

    handleElectionidChange = (event) => {
        if(event.target.value.match("^[a-zA-Z]*$")!=null) {
            this.setState({electionid: event.target.value});
        }
        this.setState({
            electionid:event.target.value
        })
    }

    handleNinChange = (event) => {
        if(event.target.value.match("^[a-zA-Z]*$")!=null) {
            this.setState({Nin: event.target.value});
        }
        this.setState({
            nin:event.target.value
        })
    }

    render() {
        const {Firstname,lastname,electionid,nin} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="">
                    
                    <div id="1">
                        <label className="p-r">FIRSTNAME</label>
                        <input 
                            
                            type="text" 
                            value={Firstname} 
                            placeholder="First Name"
                            onChange={this.handleFirstnameChange}
                            pattern="[A-Za-z]{8}"
                        />
                    </div>
                    <div>
                        <label className="p-r">LASTNAME</label>
                        <input 
                            type="text"  
                            placeholder="Last Name"
                            value={lastname} 
                            onChange={this.handleLastnameChange}
                            pattern="[A-Za-z]{8}"
                        />
                    </div>

                    <div>
                        <label className="p-r">DATE-OF-BIRTH</label>
                        <input 
                            type="date" 
                        />
                    </div>

                    <div>
                        <label className="p-r">EXAMINATION-ID</label>
                        <input 
                            type=""
                            value={electionid} 
                            placeholder="Election ID"
                            onChange={this.handleElectionidChange}
                            pattern="[0-9]{10}"
                        />
                    </div>

                    <div>
                        <label className="p-r">SEAT-NUMBER</label>
                        <input 
                            type="" 
                            placeholder="Nin Number"
                            value={nin} 
                            onChange={this.handleNinChange}
                            pattern="[0-9]{10}"
                        />
                    </div>
                    <button type="submit" >
                        
                        <Link to="Page"> VOTE </Link>
                    </button>
                    {/* <Page passSave={(ref) => saveRef.current = ref}/>
                    <button onClick={() => saveRef.current()}> save </button> */}
                </form>
            </div>
        )
    }
}

export default Field ; 
