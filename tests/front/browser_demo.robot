*** Settings ***
Library    Browser    auto_closing_level=KEEP
Resource    Keywords.robot

*** Test Cases ***
Test Web Form
    New Browser    chromium    headless=False
    New Page    https://www.selenium.dev/selenium/web/web-form.html
    Get Title    ==    Web form
    Type Text    [name="my-text"]    ${Username}    delay=0.1 s
    Type Secret    [name="my-password"]    $Password    delay=0.1 s
    Type Text    [name="my-textarea"]    ${Message}    delay=0.1 s
    Click With Options    button    delay=2 s
    Get Text    id=message    ==    Received!

Test Web Form Extra Kentat
    New Browser    chromium    headless=False
    New Page    https://www.selenium.dev/selenium/web/web-form.html

    Select Options By    [name="my-select"]    text    Two
    Fill Text    [name="my-datalist"]    New York
    Upload File By Selector    [name="my-file"]    ${CURDIR}/../../README.md
    Check Checkbox    id=my-check-2
    Uncheck Checkbox    id=my-check-1
    Click    id=my-radio-2

    Sleep    3s
    Close Browser
