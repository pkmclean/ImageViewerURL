import React, { createElement }from "react";
import { Dimensions, Image, View, Text } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

export class ImageViewerURL extends React.Component {

    constructor(props){
        super(props);
            this.state = {
                windowWidth: Dimensions.get("window").width,
                windowHeight: Dimensions.get("window").height,
                uri: this.props.url.value,
                zoom: this.props.zoom.value,
                getWidth: 0,
                getHeight: 0
            }
        }

        getData(){
            setTimeout(() => {
                //Get the acutal size of the image
                Image.getSize(this.props.url.value, (width, height) => {
                    // console.info('height: ' + height);
                    // console.info('width: ' + width);
                    this.setState({
                        getWidth: width,
                        getHeight: height,
                    }); 
                });
            }, 50)
        }
    
        componentWillMount() {
            this.getData();
        }

    render() {
        const source = { uri: this.props.url.value }; 

        if (this.props.authToken && this.props.authToken.value) {
            source.headers = {};
            source.headers.Authorization = this.props.authToken.value;
        }
        // Divides the width of the actual image by the phone screen width which is used to get the resizing height and width
        percentage = (this.state.windowWidth / this.state.getWidth); 
        displayWidth = this.state.getWidth * percentage; 
        displayWidth = Math.floor(displayWidth); 
        // console.info('Your width is: ' + displayWidth);
        displayHeight = this.state.getHeight * percentage;
        displayHeight = Math.floor(displayHeight)
        // console.info('Your height is: ' + displayHeight);
        // console.info('Zoom: ' + this.state.zoom);

        // if zoom is enabled this view will be rendered
        const WithZoom = <ImageZoom cropWidth={Dimensions.get('window').width}
                            cropHeight={Dimensions.get('window').height}
                            imageWidth={displayWidth}
                            imageHeight={displayHeight}>
                                <Image style = {{width:displayWidth, height:displayHeight }} source={source}/>
                            </ImageZoom>

        // if zoom is disabled this view will be rendered
        const WithoutZoom = <Image style = {{width:displayWidth, height:displayHeight }} source={source} />

        const renderImage = this.state.zoom ? WithZoom : WithoutZoom 


        return (
            <View style = {{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
                {renderImage}
            </View>
        );
    }
}