const calculateNumber = (type, a, b) => {
	switch(type) {
		case 'SUM': 
			return Math.round(a) + Math.round(b);
			break;
		case 'SUBTRACT':
			return Math.round(b) - Math.round(a);
			break;
		case 'DIVIDE': 
			if (Math.round(b) === 0) return "Error";
			return Math.round(a) / Math.round(b);
			break;
	}
};
module.exports = calculateNumber;

