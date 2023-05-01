import { Currency } from './3-currency.js'

class Pricing {
	_amount
	_currency
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	set _amount(x) {
		this._amount = amount;
	}

	get _amount() {
		return this._amount;
	}

	set _currency(x) {
		this._currency = currency;
	}

	get _currency() {
		return this._currency;
	}

	displayFullPrice() {
		return this._amount this.currency (Currency.code);
	}

	static convertPrice(amount: Number, conversionRate: Number) {
		return amount * conversionRate;
	}
}
