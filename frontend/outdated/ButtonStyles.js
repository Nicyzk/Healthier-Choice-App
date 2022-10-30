//style
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  input:{
    padding:20,
    backgroundColor: 'pink',
    marginTop:20
  },
  rectbutton:{
    backgroundColor:'#463EC633',
    padding:15,
    borderRadius:10,
    marginTop:20,
    marginBottom: 10,
    alignItems:'center',
    width:'80%',
    alignSelf:'center',
    borderWidth:3,
    borderColor:'rgba(0, 0, 0, 0.1)',
  },
  roundbutton:{
    backgroundColor:'#4169e1',
    padding:15,
    borderRadius:20,
    marginTop:20,
    marginBottom: 10,
    alignItems:'center',
    width:'70%',
    alignSelf:'center',
    borderWidth:3,
    borderColor:'rgba(0, 0, 0, 0.1)',
  },
  blacktext:{
    fontsize:30,
    color:'black',
    fontweight:'bold',
  },

  greytext:{
    fontsize:30,
    color:'black',
    fontweight:'bold',
  },
  
  whitetext:{
    fontsize:30,
    color:'white',
    fontweight:'bold'
  },

  // underline: {
  //   textDecorationLine: 'underline',
  // },

  morebutton:{
    backgroundColor:'#4169e1',
    padding:10,
    borderRadius:30,
    marginTop:20,
    marginBottom: 10,
    alignItems:'center',
    width:'50%',
    alignSelf:'center',
    borderWidth:3,
    borderColor:'rgba(0, 0, 0, 0.1)'
  }
})
export default styles;