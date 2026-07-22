"""
Hands-On 5 - Step 35

Preferred Selenium Locator Strategies

1. ID
   - Fastest and most reliable.
   - IDs are usually unique.

2. NAME
   - Good when ID is not available.

3. CSS_SELECTOR
   - Fast and flexible.
   - Preferred over XPath in many projects.

4. XPATH
   - Very powerful.
   - Useful when no ID or CSS Selector is available.

5. CLASS_NAME
   - Works only if the class is unique.
   - Can match multiple elements.

6. TAG_NAME
   - Finds elements by HTML tag.
   - Usually returns the first matching element.

7. LINK_TEXT
   - Matches the complete visible text of a link.

8. PARTIAL_LINK_TEXT
   - Matches part of a link's text.
   - Least preferred because multiple links can match.
"""

print("Preferred Selenium Locator Ranking")
print("----------------------------------")
print("1. ID")
print("2. NAME")
print("3. CSS_SELECTOR")
print("4. XPATH")
print("5. CLASS_NAME")
print("6. TAG_NAME")
print("7. LINK_TEXT")
print("8. PARTIAL_LINK_TEXT")