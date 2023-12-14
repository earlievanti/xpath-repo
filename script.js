// XPath script example

// 1. Partial Text Search
const element1 = document.evaluate('//div[contains(text(), "partial_text")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 2. Search by Attribute
const element2 = document.evaluate('//div[@attribute="value"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 3. Multiple Conditions
const element3 = document.evaluate('//div[@class="class" and @id="identifier"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 4. Search by Index
const element4 = document.evaluate('//div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 5. Search by Parent Element
const element5 = document.evaluate('//div[@class="parent_class"]//div[@class="child_class"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 6. Search by Child Element
const element6 = document.evaluate('//div[@class="parent_class"]/div[@class="child_class"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 7. Search by Previous Sibling
const element7 = document.evaluate('//div[@class="current_class"]/preceding-sibling::div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 8. Search by Next Sibling
const element8 = document.evaluate('//div[@class="current_class"]/following-sibling::div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 9. Search by Case-Insensitive Text
const element9 = document.evaluate('//div[lower-case(text())="text_in_lower_case"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 10. Search by Text Start
const element10 = document.evaluate('//div[starts-with(text(), "start_of_text")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Use the elements as needed
console.log(element1, element2, element3, element4, element5, element6, element7, element8, element9, element10);
