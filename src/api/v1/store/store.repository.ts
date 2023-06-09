import { Op } from "sequelize";
import { Store } from "../../../models/store.model";

export default class StoreRepository {
    /**
     주어진 조건에 맞는 Record 모두 검색
     */
    public findAll(page, size): Promise<{ rows; count }> {
        let where = {
            deleted_at: {
                [Op.eq]: null,
            },
        };

        return Store.findAndCountAll({
            where,
            limit: size,
            offset: size * (page - 1),
            order: [["_id", "ASC"]],
        });
    }
    public findAllCity(page, size, city): Promise<{ rows; count }> {
        let where = {
            deleted_at: {
                [Op.eq]: null,
            },
            address: {
                [Op.like]: `%${city}%`,
            },
        };

        return Store.findAndCountAll({
            where,
            limit: size,
            offset: size * (page - 1),
            order: [["_id", "ASC"]],
        });
    }

    public search(q, page, size): Promise<{ rows; count }> {
        let where = {
            name: {
                [Op.like]: `%${q}%`,
            },
            deleted_at: {
                [Op.eq]: null,
            },
        };

        return Store.findAndCountAll({
            where,
            limit: size,
            offset: size * (page - 1),
            order: [["_id", "ASC"]],
        });
    }

    public searchCity(q, page, size, city): Promise<{ rows; count }> {
        let where = {
            name: {
                [Op.like]: `%${q}%`,
            },
            deleted_at: {
                [Op.eq]: null,
            },
            address: {
                [Op.like]: `%${city}%`,
            },
        };

        return Store.findAndCountAll({
            where,
            limit: size,
            offset: size * (page - 1),
            order: [["_id", "ASC"]],
        });
    }
}
