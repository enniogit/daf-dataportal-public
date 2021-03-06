import React from 'react';

import TitleSeparator from '../TitleSeparator/titleSeparator.js';
import TitleSeparatorVert from '../TitleSeparator/titleSeparatorVert.js';
import UserStoryBox from './UserStoryBox.js';
import UserStoryBoxVertical from './UserStoryBoxVertical.js';

class UserStoriesContent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title : "storie",
      subtitle : "Le storie sono articoli scritti da noi e dalla nostra community di esperti: partendo dai dati, interpretiamo il mondo e aiutiamo la socità a prendere decisioni basate sui fatti"
    };

    if (this.props.title)
      this.state.title = this.props.title;

    if (this.props.subtitle)
      this.state.subtitle = this.props.subtitle;

    if (this.props.userStoryView)
      this.state.userStoryView = this.props.userStoryView;

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userStories: nextProps.userStories
    });
  }

  render() {

    let stories = [];

    if (this.state.userStories && this.state.userStoryView) {
      stories = this.state.userStories.map((story, key) => {
        if (key > 2) return;
        return (
         
          <UserStoryBoxVertical key={key} story={story}>
          </UserStoryBoxVertical>
         
        )
      });
    } else  if (this.state.userStories) {
      stories = this.state.userStories.map((story, key) => {
        if (key > 2) return;
        return (
         
          <UserStoryBox key={key} story={story}>
          </UserStoryBox>
         
        )
      });

    }

    if (this.state.userStories && this.state.userStoryView) {
      return (
      
          <div className = "Grid Grid--withGutter text-left mt-40">
            <TitleSeparatorVert text={this.state.subtitle} title={this.state.title} />
            {stories}
          </div>
          
        );
    } else {

      return (
        
           <div className = "Grid Grid--withGutter text-left mt-40">
             <TitleSeparator text={this.state.subtitle} title={this.state.title} />
             {stories}
           </div>
           
         );

    }
  }
}

export default UserStoriesContent;
