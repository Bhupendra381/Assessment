import React,{Component} from 'react';
import {StyleSheet, FlatList, Text, View, Image, ActivityIndicator} from 'react-native';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            seed:1,
            isLoading:false
        }
    }

    componentDidMount(){
        this.setState({isLoading:true}, this.getData);
    }

    getData = () => {
        const url= "https://randomuser.me/api/?seed="+ this.state.seed + "&results=10&page="+this.state.page
        fetch (url).then((res)=>res.json())
        .then((response)=>{
            this.setState({
                data:this.state.data.concat(response.results)
            })
        })
}
    
    renderRow=({item})=>{
        return(
            <View style={styles.item}>
                <Text style={styles.itemText}>{`${item.name.first} ${item.name.last}`}</Text>
                <Text style={styles.itemText}>{item.email}</Text>
            </View>
        )
    }

    handleLoadMore=()=>{
        this.setState(
            {page:this.state.page+1, seed:this.state.seed+1, isLoading:true},
            this.getData
        )
    }

    renderFooter=()=>{
        return(
            this.state.isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size="large"/>
            </View> :null
        )
    }
    render(){
        return(
            <FlatList
                style={StyleSheet.container}
                data={this.state.data}
                renderItem={this.renderRow}
                keyExtractor={(item,index)=>index.toString()}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0}
                ListFooterComponent={this.renderFooter}
            />    
        ); 
    }  
}

const styles=StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'#F5FCFF'
    },
    loader:{
        marginTop:10,
        alignItems:'center'
    },
    item:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        marginBottom:10
    },
    itemText:{
        fontSize:16,
        padding:5
    }
})