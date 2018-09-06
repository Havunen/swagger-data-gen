const path = require('path');
const test = require('ava');
const SwaggerDataGen = require('../../dist/src/SwaggerDataGen');

test('References dont get overriden', async t => {
    const api = await SwaggerDataGen.build(path.resolve(__dirname, 'test1.schema.json'));
    const generatedData = await SwaggerDataGen.generate(api);

    t.is(typeof generatedData['Rest.API.ProjectProductModel'].product, 'object'); // Should not be masked
});

test('References dont get overriden variation 2', async t => {
    const api = await SwaggerDataGen.build(path.resolve(__dirname, 'test2.schema.json'));
    const generatedData = await SwaggerDataGen.generate(api);

    t.is(typeof generatedData['Rest.API.ProjectProductModel'].product, 'object'); // Should not be masked
});

test('guid should always get uuid faker', async t => {
    const api = await SwaggerDataGen.build(path.resolve(__dirname, 'test1.schema.json'));
    const generatedData = await SwaggerDataGen.generate(api);

    t.is(generatedData['Rest.API.ProjectProductModel'].projectGuid.length, 36); // Should be uuid
});