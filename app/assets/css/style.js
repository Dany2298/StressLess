import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#dbfbff",
    padding: 30,
  },
  bgBody: {
    padding: 25,
    flex: 1,
    backgroundColor: "#dbfbff",
    justifyContent: "space-between",
    paddingVertical: 80
  },

  imageMainCont: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain"
  },
  imageMain: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },

  heading: {
    marginBottom: 18,
    fontSize: 18,
    fontWeight: "bold",
    
  },

  headingSecond: {
    marginBottom: 18,
    fontSize: 18,
    fontWeight: "bold",
    textAlign:"center",
    textDecorationLine: "underline"
  },

   headingThird: {
    fontSize: 18,
    textAlign:"center",
    textDecorationLine: "underline",
    color:"#000000",
    fontWeight: "bold",
    letterSpacing:"3"
  },

  text: {
    marginBottom: 18,
    fontSize: 14,
  },
  textColoured: {
    marginBottom: 18,
    fontSize: 14,
    textAlign:"center",
    color:"#3f8094"
  },
  buttonMain: {
    backgroundColor: "#4e8c9f",
    paddingVertical: 15,
    marginVertical:20,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonSecond:{
    backgroundColor: "#4e8c9f",
    borderRadius:999,
    width:"60%",
    paddingVertical: 10,
    marginVertical:20,
    justifyContent: "center",
    alignItems: "center"
  },
  drwerButton:{
    margin: 10,padding:10,borderRadius:10, backgroundColor:"#9ee0f2" 
  },
  buttonMainText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonSndText: {
    color: "#fff",
  },

  title: {
    backgroundColor: '#dfdf',
    textAlign: 'center',
    marginVertical: 15,

  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 50,
    padding: 20,
  },

  inputLong: {
    flex:1,
    backgroundColor: "#8dc5c9",
    borderRadius: 20,
    paddingTop:20,
    padding: 20,
  },

  logo: {
    width: 66,
    height: 58,
  },
  textt: {
    textAlign: "center",
    backgroundColor: "#4e8c9f",
    margin: 50,
    padding: 6,
    height: 30,
    width: 250,
    color: "#fff",

  },
  ProfileText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 10,

  },
  roundCard: {
    padding: 15, borderRadius: 20, margin: 5, borderColor: "#000", borderWidth: 1
  },
  roundCardColoured: {
    backgroundColor: "#9ee0f2", padding: 15, borderRadius: 20, marginVertical: 5, borderColor: "#000", borderWidth: 1
  }
});

export default styles;
