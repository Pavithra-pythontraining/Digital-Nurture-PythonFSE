import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Setup Chrome Driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Maximize browser
driver.maximize_window()

# Open Selenium Playground
driver.get("https://www.testmuai.com/selenium-playground/simple-form-demo")

time.sleep(3)

# Locate the input box using CSS Selector (id)
message_box = driver.find_element(By.CSS_SELECTOR, "#user-message")

# Enter text
message_box.send_keys("Hello Selenium!")

print("✅ Text entered successfully.")

# Keep browser open
input("Press Enter to close the browser...")

driver.quit()