import React from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

const surfaceModule = NativeModules.surfaceModule;


class ButtonSurface extends React.Component{
    render(){
        return(
            <View style={styles.buttonPanel}>
                <VrButton
                    style={styles.greetingBox}
                    onClick={()=>{
                        surfaceModule.createPanel()
                    }}


                >
                    <Text>
                        Create Panel
                    </Text>
                </VrButton>
            </View>
        )
    }
}

class DynamicSurfaces extends React.Component {

     state = {
         width:1000,
         height:600,
     }

     changeSurfaceDimensions(width,height){
         surfaceModule.resizeSurface(width,height)
         this.setState({width: width, height: height})
     }

      render() {

        console.log(surfaceModule.changeSurfaceType("Flat"));

        return (
          <View style={[styles.panel,{height:this.state.height, width:this.state.width}]}>
            <VrButton
                style={styles.greetingBox}
                onClick={()=>{
                    if(this.state.width === 1000){
                        this.changeSurfaceDimensions(500,300)
                    }else{
                        this.changeSurfaceDimensions(1000,500)
                    }

                }}
            >
              <Text style={styles.greeting}>
                Change Dim
              </Text>
            </VrButton>

            <VrButton
                style={styles.greetingBox}
                onClick={()=>{
                  surfaceModule.changeSurfaceType("Flat")
                }}
            >
              <Text style={styles.greeting}>
                Flat
              </Text>
            </VrButton>

            <VrButton
                style={styles.greetingBox}
                onClick={()=>{
                  surfaceModule.changeSurfaceType("Cylinder")
                }}
            >
              <Text style={styles.greeting}>
                Cylinder
              </Text>
            </VrButton>

            <VrButton
                style={styles.greetingBox}
                onClick={()=>{
                    if(this.state.width === 1000){
                        this.changeSurfaceDimensions(500,300)
                    }else{
                        this.changeSurfaceDimensions(1000,500)
                    }

                }}
            >
              <Text style={styles.greeting}>
                Reset
              </Text>
            </VrButton>

            <VrButton
                style={styles.greetingBox}
                onClick={()=>{
                    surfaceModule.destroyPanel()
                }}
            >
              <Text style={styles.greeting}>
                Destroy
              </Text>
            </VrButton>

          </View>
        );
      }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 5,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    width:200,
  },
  greeting: {
    fontSize: 30,
  },
  buttonPanel:{
      width:300,
      height:300,
      backgroundColor:'rgb(255,127,80)',
      justifyContent: 'center',
      alignItems: 'center'
  }
});

AppRegistry.registerComponent('ButtonSurface', () => ButtonSurface);
AppRegistry.registerComponent('DynamicSurfaces', () => DynamicSurfaces);
