import React from 'react';
import './App.css'
import Card from './components/card';

class App extends React.Component {

  state = {
    avatarId: 3,
    personName: 'Robin Collins'
  }
  
  changeAvatar = () => {
    this.setState({
      avatarId: 54,
      personName: 'Brad Pitt'
    })
  }

  render() {
    return (
       <div className="container">
         <div className="row">
           <Card name={this.state.personName} job="Full Stack Developer" avatarId={this.state.avatarId} />
           <Card name="Peter Collins" job="Animator" avatarId={61}/>
           <Card name="Raymond Collins" job="Retired Marine Engineer" avatarId={65}/>
           <Card name="June Collins" job="Rory Dragon" avatarId={20}/>
           <Card name="Julia Collins" job="Nusery Tutor" avatarId={16}/>
           <Card name="Nicholas Collins" job="Author" avatarId={6}/>
          </div>
          <div class="row">
            <div class="col-md-3">
              <a onClick={this.changeAvatar} className="changeAvatar" href="#">Change Details</a>
            </div>
        </div>
        </div>
    )
  }
}

export default App;
