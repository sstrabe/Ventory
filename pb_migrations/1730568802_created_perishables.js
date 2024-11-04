/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r30c84bus5qvpnz",
    "created": "2024-11-02 17:33:22.738Z",
    "updated": "2024-11-02 17:33:22.738Z",
    "name": "perishables",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vtrawhw7",
        "name": "type",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r30c84bus5qvpnz");

  return dao.deleteCollection(collection);
})
