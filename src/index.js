import React from  'react'
import ReactDOM from 'react-dom' 

function Cartoon(props) {
	return <h1>Hello, {props.name} {props.show}</h1>
}
function Show() {
	return <div>
				<Cartoon name="Marshmello" show="Pokemon" />
				<Cartoon name="Dr. Strange" show="Noobie" />
			</div>
}
ReactDOM.render(
	<Show />,
	document.getElementById('root')
);
  