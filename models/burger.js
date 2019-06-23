
// Create a "Burger" model that matches up with DB

module.exports = function(sequelize, Datatypes) {

	let Burger = sequelize.define("Burger", {

		burger_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 100]
			}
		},
		devour: {
			type: Datatypes.BOOLEAN,
			default: true
		},
	});
	return Burger;
};
