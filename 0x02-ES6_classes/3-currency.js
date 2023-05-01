class Currency {
	_code;
	_name;
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	set code(x) {
		this._code = x;
	}

	get code() {
		return this._code;
	}

	set name(x) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	displayFullCurrency() {
		return this._name (this._code)
	}
}
