import React from 'react';
import Gallery from 'react-grid-gallery';
import IMAGES from './photos'



export default class PhotoGallery extends React.Component {
    render() {
        
        return (
            <Gallery images={IMAGES} />
        )
    }
}
