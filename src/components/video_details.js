import React, {Component} from 'react';

class VideoDeatils extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.video) {
            return (<div>Loading....</div>);
        }

        let url = `http://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div className='video-detail col-md-8'>
                <div className='emded-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={url}></iframe>
                </div>
                <div className='details col-md-8'>
                    <div>{this.props.video.snippet.title}</div>
                    <div>{this.props.video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

export default VideoDeatils;