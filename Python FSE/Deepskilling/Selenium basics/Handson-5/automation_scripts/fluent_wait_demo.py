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

wait = WebDriverWait(
    driver,
    timeout=15,
    poll_frequency=1
)

try:
    heading = wait.until(
        EC.visibility_of_element_located((By.TAG_NAME, "h1"))
    )

    print("Heading:", heading.text)

except Exception as e:
    print(e)

input("Press Enter to close the browser...")

driver.quit()