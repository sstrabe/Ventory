/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8v01gvji",
    "name": "inClass",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "0swf28r7hlo5lap",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lb0v8xcntmegrpj")

  // remove
  collection.schema.removeField("8v01gvji")

  return dao.saveCollection(collection)
})
