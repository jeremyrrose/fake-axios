import React from 'react';
import Record from './Record';
import { login, records } from '../services/index'

class Recordlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recordData: [],
            username: ''
        }
    }

    componentDidMount = async() => {
        // this.getRecords()
        const user = await login({username: "jro", password:'1234'})
        console.log(user)
        this.getRecords()
    }

    getRecords = async () => {
        const resp = await records()
        console.log(resp)
        this.setState({
            recordData: resp.results
        })
    }

    render(){
        const records = this.state.recordData.map(record => {
            return (
                <>
                <Record id={record.id} title = {record.title} artist={record.artist} releaseYear={record.releaseYear} img={record.cover_image}/>
                <button //onClick={() => this.favHandler(record.id)}
                >Like the song</button>
                <input type='text' name='username' value={this.state.username} onChange={(e) => this.changeHandler(e)}></input>
                </>
        )}
        )
        return (
            <div>
                { records }
            </div>
        )
    }
}

export default Recordlist
