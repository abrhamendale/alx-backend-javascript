class Building {
	_sqft
	constructor(sqft: Number) {
		this._sqft = sqft;
	}

	set _sqft(x) {
		this._sqft = sqft;
	}

	get _sqft() {
		return this._sqft;
	}
	
	evacuationWarningMessage() {
		throw(Error("Class extending Building must override evacuationWarningMessage"));
	}
}
