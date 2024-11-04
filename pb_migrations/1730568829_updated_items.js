/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "seuxbkze",
    "name": "lastMaintenance",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  // remove
  collection.schema.removeField("seuxbkze")

  return dao.saveCollection(collection)
})
