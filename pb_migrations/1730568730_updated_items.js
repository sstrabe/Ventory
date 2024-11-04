/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_GRGyRiE` ON `items` (`serial`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sqlkripm",
    "name": "serial",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  collection.indexes = []

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sqlkripm",
    "name": "serial",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
