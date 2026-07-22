from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Setup Chrome Driver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Maximize browser
driver.maximize_window()

# Open Simple Form Demo page
driver.get("https://www.testmuai.com/selenium-playground/simple-form-demo")

# Locate text box
textbox = driver.find_element(By.ID, "user-message")

# Enter text
textbox.send_keys("Hello Selenium!")

print("Text entered successfully!")

input("Press Enter to close browser...")

driver.quit()