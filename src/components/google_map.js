import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
const API_KEY = "AIzaSyDwS6UJFBXztBkiz8YiCT3bO9wxfq_EULM";
const GOOGLE_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`;

const MyGoogleMap = compose(
                        withProps({
                            googleMapURL: GOOGLE_URL,
                            loadingElement: <div style={{ height: `100%` }} />,
                            containerElement: <div style={{ height: `400px` }} />,
                            mapElement: <div style={{ height: `100%` }} />,
                        }),
                        withScriptjs,
                        withGoogleMap
                    )( ( props ) =>{

                            return(
                                <GoogleMap
                                    defaultZoom={8}
                                    //defaultCenter={{ lat: -34.397, lng: 150.644 }}
                                    defaultCenter={{ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }}
                                />
                            );

                        }
                    );

export default MyGoogleMap;