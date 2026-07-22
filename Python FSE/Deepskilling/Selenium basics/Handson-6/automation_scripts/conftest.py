import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


@pytest.fixture
def driver():

    service = Service(ChromeDriverManager().install())

    driver = webdriver.Chrome(service=service)

    driver.maximize_window()

    yield driver

    driver.quit()

@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):

    outcome = yield
    report = outcome.get_result()

    if report.when == "call" and report.failed:

        driver = item.funcargs.get("driver")

        if driver:
            screenshot_name = f"{item.name}_failure.png"
            driver.save_screenshot(screenshot_name)

            print(f"\nScreenshot saved: {screenshot_name}")