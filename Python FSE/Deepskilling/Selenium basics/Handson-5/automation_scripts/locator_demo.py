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

time.sleep(5)

# -----------------------------
# TAG NAME Locator
# -----------------------------
heading = driver.find_element(By.TAG_NAME, "h1")
print("Heading:", heading.text)

# -----------------------------
# CLASS NAME Locator
# -----------------------------
body = driver.find_element(By.CLASS_NAME, "wrapper")
print("Wrapper found:", body.is_displayed())

# -----------------------------
# LINK TEXT Locator
# -----------------------------
try:
    link = driver.find_element(By.LINK_TEXT, "Ajax Form Submit")
    print("LINK_TEXT Found:", link.text)
except:
    print("LINK_TEXT not found on this page.")

# -----------------------------
# PARTIAL LINK TEXT Locator
# -----------------------------
try:
    partial = driver.find_element(By.PARTIAL_LINK_TEXT, "Ajax")
    print("PARTIAL_LINK_TEXT Found:", partial.text)
except:
    print("PARTIAL_LINK_TEXT not found.")

time.sleep(5)

driver.quit()