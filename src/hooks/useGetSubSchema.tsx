// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const useGetSubSchema = (properties: string[], schema: any) => {
    const modifiedSchema = { ...schema, properties: {}, required: properties };
    properties.forEach(property => {
        modifiedSchema.properties[property] = schema.properties[property]
    });
    return modifiedSchema;
}


export default useGetSubSchema;