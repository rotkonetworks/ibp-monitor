import { DataTypes, Sequelize } from 'sequelize'

export const providerModel = {
  definition: {
    id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    websiteUrl: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    logoUrl: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('active', 'pending'),
      allowNull: false,
    },
    region: {
      type: DataTypes.ENUM(
        '',
        'africa',
        'asia',
        'central_america',
        'europe',
        'middle_east',
        'north_america',
        'oceania'
      ),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    },
  },
  options: {
    tableName: 'provider',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    defaultScope: {
      attributes: {
        exclude: [],
      },
      order: [['id', 'ASC']],
    },
  },
}
