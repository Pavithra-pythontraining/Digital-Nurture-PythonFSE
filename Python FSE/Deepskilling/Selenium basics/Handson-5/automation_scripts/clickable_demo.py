from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.maximize_window()

driver.get("https://www.testmuai.com/selenium-playground/")

wait = WebDriverWait(driver, 10)

try:
    element = wait.until(
        EC.element_to_be_clickable((By.LINK_TEXT, "Ajax Form Submit"))
    )

    print("Element is clickable.")
    element.click()

except Exception as e:
    print(e)

input("Press Enter to close the browser...")

driver.quit()