'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('datos_clinicos', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: "users",
                        key: 'id'
                    },
                    onDelete: "NO ACTION",
                    onUpdate: "CASCADE"
                },
                have_enfermedades: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                enfermedades: {
                    type: Sequelize.TEXT
                },
                tratamiento_actual: {
                    type: Sequelize.TEXT
                },
                medicacion: {
                    type: Sequelize.TEXT
                },
                otros: {
                    type: Sequelize.TEXT
                },
                have_alergias: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                alergias: {
                    type: Sequelize.TEXT
                },
                alergias_medicacion: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn("NOW")
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn("NOW")
                }
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('datos_clinicos');
        });
    }
};
