*** Settings ***
Library    Browser

*** Test Cases ***
BMI Laskuri Laskee Oikein
    New Browser    chromium    headless=False
    New Page    http://localhost:5173/bmi.html

    Fill Text    id=weight    70
    Fill Text    id=height    170
    Click    text=Laske indeksi

    Get Text    css=.bmi-score    ==    24.2

    Close Browser
