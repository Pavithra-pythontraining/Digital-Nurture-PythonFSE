import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Create ChromeDriver service
service = Service(ChromeDriverManager().install())

# Launch Chrome browser
driver = webdriver.Chrome(service=service)

# Maximize browser window
driver.maximize_window()

# Open Selenium Playground Home Page
driver.get("https://www.testmuai.com/selenium-playground/")

time.sleep(5)

# Navigate to Simple Form Demo page
driver.get("https://www.testmuai.com/selenium-playground/simple-form-demo")

time.sleep(5)

# Print current URL
print("Current URL:", driver.current_url)

# Verify URL
assert "simple-form-demo" in driver.current_url
print("✅ URL verification successful!")

# Navigate Back
driver.back()
print("⬅️ Navigated Back")

time.sleep(3)

# Navigate Forward
driver.forward()
print("➡️ Navigated Forward")

time.sleep(3)

# Refresh the page
driver.refresh()
print("🔄 Page Refreshed")

time.sleep(3)

# Open Google in a new tab
driver.execute_script('window.open("https://www.google.com");')

time.sleep(3)

# Print all window handles
print("Window Handles:", driver.window_handles)

# Switch to Google tab
driver.switch_to.window(driver.window_handles[1])

print("Google Tab Title:", driver.title)

time.sleep(3)

# Switch back to Selenium Playground tab
driver.switch_to.window(driver.window_handles[0])

print("Returned to Selenium Playground")

# Take Screenshot
driver.save_screenshot("playground_screenshot.png")
print("📸 Screenshot saved as playground_screenshot.png")

# Get current window size
print("Current Window Size:", driver.get_window_size())

# Setting a consistent browser window size ensures that responsive web pages
# behave consistently across different test executions and screen resolutions.
driver.set_window_size(1280, 800)

# Print new window size
print("New Window Size:", driver.get_window_size())

# Keep browser open until user presses Enter
input("Press Enter to close the browser...")

# Close browser
driver.quit()

print("✅ Browser Closed Successfully")