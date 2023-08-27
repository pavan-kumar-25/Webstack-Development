import xmlschema

xml_file = "products.xml"
xsd_file = "product_schema.xsd"
validator = xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("xml file is valid against the xsd schema")
else:
    print("xml file is not valid")
    try:
        print(validator.validate(xml_file))
    except xmlschema.validators.exceptions.XMLSchemaDecodeError as exception:
        print(exception.reason)    