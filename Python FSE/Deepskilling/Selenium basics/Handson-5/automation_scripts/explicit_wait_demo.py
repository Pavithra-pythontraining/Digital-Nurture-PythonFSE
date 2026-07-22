import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Setup Chrome Driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Maximize browser
driver.maximize_window()

# Open Selenium Playground
driver.get("https://www.testmuai.com/selenium-playground/")

# Create Explicit Wait object
wait = WebDriverWait(driver, 10)

try:
    # Wait until the Ajax Form Submit link is visible
    ajax_link = wait.until(
        EC.visibility_of_element_located((By.LINK_TEXT, "Ajax Form Submit"))
    )

    print("✅ Element Found:", ajax_link.text)

except Exception as e:
    print("❌ Element not found:", e)

# Keep browser open
input("Press Enter to close the browser...")

driver.quit()