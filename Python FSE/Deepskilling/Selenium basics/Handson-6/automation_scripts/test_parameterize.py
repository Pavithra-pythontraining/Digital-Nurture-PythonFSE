import pytest


@pytest.mark.parametrize(
    "num1, num2, expected",
    [
        (2, 3, 5),
        (10, 20, 30),
        (15, 5, 20),
        (100, 200, 300)
    ]
)
def test_addition(num1, num2, expected):

    result = num1 + num2

    assert result == expected