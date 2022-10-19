const { MongoClient } = require('mongodb');

//the same function without using client.connect
require('dotenv').config();

const url = process.env.MONGO
const client = new MongoClient(url);

//crete a connection singleton


async function script() {
    await client.connect();
    console.log("conectado ao banco de dados");

    /*what is mongoDB
    mongoDB is a document database with the scalability and flexibility
    that you want with the querying and indexing that you need
    */

    const db = client.db('test');
    const collection = db.collection('pokemons');

    //insert one pokemon
    const insert = await collection.insertOne({ name: 'Pikachu', type: 'electric' });

    //getall from pokemon
    const all = await collection.find({}).toArray();

    //get one pokemon
    const one = await collection.findOne({ name: 'Pikachu' });

    //update one pokemon
    const update = await collection.updateOne({ name: 'Pikachu' }, { $set: { name: 'Pikachu', type: 'electric', attack: 55 } });

    //delete one pokemon
    const deleteOne = await collection.deleteOne({ name: 'Pikachu' });

    //delete all pokemon
    const deleteAll = await collection.deleteMany({});

    //mongoDB query functions
    /*
    find()
    findOne()
    insertOne()
    insertMany()
    updateOne()
    updateMany()
    deleteOne()
    deleteMany()
    limit()
    skip()
    sort()
    toArray()
    */

    //mongoDB operators
    /*$set
    set a field to a value in a document or insert a new field with a value into a document.
    */
    /*$unset
    removes the specified field from a document.
    */
    /*$inc
    increments a field by a specified value.
    example: { $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }
    */
    /*$min
    only updates the field if the specified value is less than the existing field value.
    */
    /*$max
    only updates the field if the specified value is greater than the existing field value.
    */
    /*$mul
    multiplies the value of the field by the specified amount.
    */
    /*$rename
    renames a field.
    */
    /*$currentDate
    sets the value of a field to current date, either as a Date or a Timestamp.
    */
    /*$addToSet
    adds elements to an array only if they do not already exist in the set.
    */
    /*$pop
    [1] removes the last element of an array.
    [-1] removes the first element of an array.
    */
    /*$pull
    removes all array elements that match a specified query.
    */
    /*$push
    appends a specified value to an array.
    */
    /*$each
    appends multiple specified values to an array.
    */
    /*$slice
    limits the size of an updated array to a specified number of elements.
    */
    /*$sort
    sorts the elements of an updated array.
    */
    /*$position
    specifies the position in the array to modify with the $push and $addToSet operators.
    */
    /*$bit
    performs bitwise AND, OR, and XOR updates of integer values.
    */
    /*$isolated
    prevents the query from yielding to other readers or writers during its execution.
    */
    /*$comment
    adds a comment to a query.
    */
    /*$expr
    allows the use of aggregation expressions within the query language.
    */
    /*$jsonSchema
    validates documents against a JSON schema.
    */
    /*$mod
    performs a modulo operation on the value of a field and selects documents with a specified result.
    */
    /*$regex
    selects documents where values match a specified regular expression.
    */
    /*$text
    performs text search.
    */
    /*$where
    matches documents that satisfy a JavaScript expression.
    */
    /*$geoIntersects
    matches geometries that intersect with a GeoJSON geometry.
    */
    /*$geoWithin
    matches geometries within a bounding GeoJSON geometry.
    */
    /*$near
    selects geometries within a certain distance of a point.
    */
    /*$nearSphere
    selects geometries within a certain distance of a point on a sphere.
    */

    /*aggregation framework
    what is aggregation?
    Aggregation is a process where MongoDB groups values from multiple documents together,
     and then performs a calculation on the grouped data to return a single result.
    */

    //aggregation example with lookup
    // const aggregation = await collection.aggregate([
    //     {
    //         $lookup: {
    //             from: 'pokemons',
    //             localField: 'type',
    //             foreignField: 'type',
    //             as: 'pokemons'
    //         }
    //     }
    // ]).toArray();


    await client.disconnect();
} script()

