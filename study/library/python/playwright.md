# [Playwright](https://playwright.dev/python/docs/library)

## Playwright 란
- Playwright는 웹 앱의 e2e 테스트 도구이다
- TypeScript, JavaScript, Python, .NET, Java 다양한 언어를 지원한다
- Windows, Linux, and macOS, locally or on CI, headless or headed 와같은 다양한 환경에서 사용할 수 있다

## Playwright 설치
```bash
pip install playwright
```

## Playwright 사용

### 동기 방식
```python
from playwright.sync_api import sync_playwright # 동기 방식의 Playwright 불러오기

with sync_playwright() as p:
    browser = p.chromium.launch() # 브라우저 실행

    page = browser.new_page() # 새 페이지 생성
    page.goto('https://playwright.dev/python/docs/intro') # 페이지 이동
    page.screenshot(path='screenshot.png') # 스크린샷 저장
    browser.close() # 브라우저 종료
```

### 비동기 방식
```python
import asyncio # 비동기 방식을 사용하기 위한 asyncio 불러오기
from playwright.async_api import async_playwright # 비동기 방식의 Playwright 불러오기

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch() # 브라우저 실행

        page = await browser.new_page() # 새 페이지 생성
        await page.goto('https://playwright.dev/python/docs/intro') # 페이지 이동
        await page.screenshot(path='screenshot.png') # 스크린샷 저장
        await browser.close() # 브라우저 종료

asyncio.run(main())
```