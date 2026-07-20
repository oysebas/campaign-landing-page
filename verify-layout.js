import { chromium } from 'playwright';

(async () => {
  console.log('Launching local Chrome...');
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome' // Uses your local Google Chrome browser
  });
  
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:5173/...');
  await page.goto('http://localhost:5173/');
  
  // 1. Desktop Breakpoint
  console.log('Capturing Desktop Breakpoint (1200x900)...');
  await page.setViewportSize({ width: 1200, height: 900 });
  await page.screenshot({ path: 'assets/screenshot-desktop.png', fullPage: true });
  
  // 2. Tablet Breakpoint
  console.log('Capturing Tablet Breakpoint (768x1024)...');
  await page.setViewportSize({ width: 768, height: 1024 });
  
  // Test FAQ click to verify item doesn't disappear
  console.log('Testing FAQ toggle click...');
  await page.click('#faq .reveal-on-scroll:nth-child(2)');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'assets/screenshot-faq-open.png' });
  
  await page.screenshot({ path: 'assets/screenshot-tablet.png', fullPage: true });
  
  // 3. Mobile Breakpoint - Collapsed Menu
  console.log('Capturing Mobile Breakpoint (375x812) - Collapsed...');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'assets/screenshot-mobile-collapsed.png', fullPage: true });
  
  // 4. Mobile Breakpoint - Open Menu
  console.log('Opening mobile menu...');
  await page.click('#mobile-menu-btn');
  await page.waitForTimeout(300); // Wait for transition
  console.log('Capturing Mobile Breakpoint (375x812) - Expanded...');
  await page.screenshot({ path: 'assets/screenshot-mobile-expanded.png' });
  
  await browser.close();
  console.log('All screenshots captured successfully under assets/ directory!');
})().catch(err => {
  console.error('Error during execution:', err);
  process.exit(1);
});
