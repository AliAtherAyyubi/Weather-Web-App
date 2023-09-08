import React, { Component } from 'react'
import Wcontext from './WeatherContext'

export default class WState extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    forecast= async()=>{
        try {
        let url='https://api.openweathermap.org/data/2.5/forecast?id=524901&q=lahore&exclude=daily&units=metric&appid=fde38c3c010e336307f0b9402c5111ba'

        let url2='https://newsapi.org/v2/everything?q=tesla&from=2023-06-29&sortBy=publishedAt&apiKey=c2dbdbef839043c0ad5e0dcaa8950936'
        let res= await fetch(url)
        
        let fetchdata= await res.json()
        // let t= {list:[{main:{temp:34}},{dt:{humidity:40}}],city:{name:"lahore"}}
        this.setState({data:fetchdata.list})
        // console.log(this.state.data.list[0].main.temp)
        console.log(this.state.data[0].main)
        // console.log(data.list[0].weather[0].main)
        } catch (error) {
            console.log(error)
        }
    }
    async componentDidMount(){
        this.forecast()
    }

  render() {
    let name='lahore'
    return (
        <Wcontext.Provider value={this.state.data}>
        {this.props.children}
        </Wcontext.Provider>
    )
  }
}
