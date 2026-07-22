import pytest


@pytest.mark.skip(reason="This test is under development")
def test_skip_example():

    print("This test will not execute.")

    assert True