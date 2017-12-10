'use strict';

module.exports = function(dayOfMonth) {
	return dayOfMonth.toString().length < 2 ? '0' + dayOfMonth : dayOfMonth;
};
