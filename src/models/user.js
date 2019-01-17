module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User',{
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        timestamp: true
    });
}