module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('board', { 
        bo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bo_us_id: { 
            type: DataTypes.INTEGER
        }, 
        bo_title: { 
            type: DataTypes.STRING(50)
        }, 
        bo_content: {
            type: DataTypes.STRING(255)
        },
        bo_category: {
            type: DataTypes.INTEGER
        },
        bo_show: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        bo_like: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        bo_hate: {
            type: DataTypes.INTEGER,
            defaultValue: 0           
        },
        bo_trade_value: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        bo_trade_status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        bo_thumbnail: {
            type: DataTypes.STRING(100)
        },
        bo_view: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        bo_cost: {
            type: DataTypes.INTEGER
        },
        bo_cost_selector: {
            type: DataTypes.INTEGER
        }
    }, 
    {
        tableName: "board",
        timestamps: true
    }); 
    
    return model;
}

// 2020-05-22 조회수 추가
