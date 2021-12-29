/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect, oneEvent, aTimeout, tDOM } from 'qing-t';
import '../dist/main.js';
import { QingButton } from '../dist/main.js';

function getInternalButtonEl(btn: QingButton) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  return btn.shadowRoot?.querySelector('button')!;
}

it('Default state', async () => {
  const el = await fixture<QingButton>(html` <qing-button><p>test</p></qing-button> `);

  tDOM.isInlineBlockElement(el);
  expect(el.innerHTML).to.eq('<p>test</p>');

  const btnEl = getInternalButtonEl(el)!;
  const btnStyles = window.getComputedStyle(btnEl);
  expect(btnStyles.display).to.eq('inline-block');
  expect(btnStyles.cursor).to.eq('pointer');
  expect(btnStyles.padding).to.eq('9.600000381469727px 14.399999618530273px');
  expect(btnStyles.transition).to.eq('all 0.3s ease 0s');
  expect(btnStyles.border).to.eq('0px none rgb(0, 0, 0)');
  expect(btnStyles.borderRadius).to.eq('0px');
});

it('Click event', async () => {
  const el = await fixture<QingButton>(html` <qing-button></qing-button> `);

  const listener = oneEvent(el, 'click');
  getInternalButtonEl(el).click();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { detail, composed, bubbles } = await listener;
  expect(detail).to.eq(null);
  expect(composed).to.eq(false);
  expect(bubbles).to.eq(false);
});

it('Autofocus', async () => {
  const el = await fixture<QingButton>(html` <qing-button autofocus></qing-button> `);

  await aTimeout(50);
  expect(document.activeElement).to.eq(el);
});

it('Checkbox', async () => {
  const el = await fixture<QingButton>(html` <qing-button canSelect></qing-button> `);
  expect(el.selected).to.eq(false);

  const btnElement = getInternalButtonEl(el);
  let event = oneEvent(el, 'check');
  btnElement.click();
  await event;
  expect(el.hasAttribute('selected')).eq(true);
  expect(el.selected).to.eq(true);

  event = oneEvent(el, 'check');
  btnElement.click();
  await event;
  expect(el.hasAttribute('selected')).eq(false);
  expect(el.selected).to.eq(false);
});

it('Checkbox (selected)', async () => {
  const el = await fixture<QingButton>(html` <qing-button canSelect selected></qing-button> `);
  expect(el.selected).to.eq(true);

  const btnElement = getInternalButtonEl(el);
  let event = oneEvent(el, 'check');
  btnElement.click();
  await event;
  expect(el.hasAttribute('selected')).eq(false);
  expect(el.selected).to.eq(false);

  event = oneEvent(el, 'check');
  btnElement.click();
  await event;
  expect(el.hasAttribute('selected')).eq(true);
  expect(el.selected).to.eq(true);
});

it('Width', async () => {
  let el = await fixture<QingButton>(html` <qing-button style="width:400px"></qing-button> `);
  let styles = window.getComputedStyle(getInternalButtonEl(el));

  expect(styles.width).to.eq('400px');

  el = await fixture<QingButton>(html` <qing-button style="min-width:400px"></qing-button> `);
  styles = window.getComputedStyle(getInternalButtonEl(el));

  expect(styles.width).to.eq('400px');
});
