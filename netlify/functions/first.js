const faunadb = require('faunadb');
const {Get, Ref, Collection} = faunadb.query;

exports.handler = async function (event, context) {
    const client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
    const result = await client.query(Ref(Collection("customers"), "101"));
    console.log(result);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World", time: new Date().toISOString(), result, data: result.data }),
    };
};
