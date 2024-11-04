/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxdtwcwu",
    "name": "needsMaintenance",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  // remove
  collection.schema.removeField("kxdtwcwu")

  return dao.saveCollection(collection)
})
