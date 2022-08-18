import React from 'react';
import Contact from './components/Contact';

function App() {
	const contacts = [
		{
			name: 'Cory',
			id: 1,
			adr: 'Something Something Lane',
		},
		{
			name: 'Zach',
			id: 2,
			adr: 'Something Something Lane 2222',
		},
		{
			name: 'Sarah',
			id: 3,
			adr: 'Something Something Lane 3333',
		},
	];

	const [list, setList] = React.useState(contacts);
	const [inp, setInp] = React.useState('');
	const [change, setChange] = React.useState(false);

	React.useEffect(() => {
		console.log('hit');
	}, [change]);

	const submit = () => {
		let newList = list;
		const newObj = {
			name: inp,
			id: list.length + 1,
			adr: 'somewhere here',
		};

		newList.push(newObj);
		setList(newList);
		setChange(!change);
		setInp('');
	};

	const handleChange = (event) => {
		setInp(event.target.value);
	};

	return (
		<div className="App">
			{list.map((itm) => (
				<Contact key={itm.id} data={itm} />
			))}
			<input type="text" value={inp} onChange={handleChange} />
			<button onClick={submit}> Submit</button>
		</div>
	);
}

export default App;
