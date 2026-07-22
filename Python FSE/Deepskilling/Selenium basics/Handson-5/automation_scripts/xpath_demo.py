import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Setup Chrome Driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Maximize Browser
driver.maximize_window()

# Open Selenium Playground
driver.get("https://www.testmuai.com/selenium-playground/")

time.sleep(3)

# XPath using text()
try:
    ajax_link = driver.find_element(By.XPATH, "//a[text()='Ajax Form Submit']")
    print("✅ XPath using text() found:", ajax_link.text)
except:
    print("❌ XPath using text() not found.")

# XPath using contains()
try:
    ajax_partial = driver.find_element(By.XPATH, "//a[contains(text(),'Ajax')]")
    print("✅ XPath using contains() found:", ajax_partial.text)
except:
    print("❌ XPath using contains() not found.")

# Keep browser open
input("Press Enter to close the browser...")

driver.quit()