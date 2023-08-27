from lxml import etree

#to load the xml file
xml_tree = etree.parse("products.xml")

#to load the xsl file
xsl_transform = etree.parse("transform.xsl")

# to apply xslt transformation
html_tree = xsl_transform(xml_tree)

# write a transformed html to a file
with open("shop_smart.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree,pretty_print=True))