from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

service = Service(ChromeDriverManager().install())

driver = webdriver.Chrome(service=service)

driver.implicitly_wait(10)

driver.get("https://www.lambdatest.com/selenium-playground/")

print(driver.title)

time.sleep(10)   # Wait for 10 seconds

driver.quit()