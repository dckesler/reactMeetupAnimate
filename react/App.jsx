import React from "react";
import Animation from "./Animation";

import { MWPassive } from "./Animations/walrus/MWPassive.jsx";
import { MWSub } from "./Animations/walrus/MWSub.jsx";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	animate(){
		this.setState({
			animation: MWSub
		})
	}
	render(){
		var animation = this.state.animation || null;
		return (
			<div>
				<Animation passive={MWPassive} animation={animation} />
				<button onClick={this.animate.bind(this)}>Animate</button>
			</div>
		)
	}
}

React.render(<App />, document.getElementById("app"));